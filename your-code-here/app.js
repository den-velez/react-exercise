// NOTE See HELP.md in this folder for some useful info & tips

import "./tests.js";
const { css } = emotion;
const { useState, useEffect } = React;

import { constants } from './constants/constants.js'
import { saveLocalStorage, loadLocalStorage } from './lib/localStorage.js'
import Searcher from './components/Search/Search.js'
import MovieList from './components/MovieList/MovieList.js';
import Header from './components/Header/Header.js';


const mainStyle = css`
  width: 100%;
  overflow: scroll;
  height: 100%;
`

export const App = ({ onLoad }) => {
  const [moviesList, setMoviesList] = useState();
  const [showMovieDetailsId, setShowMovieDetailsId] = useState();
  const [titleFilter, setTitleFilter] = useState();
  const [decadeFilter, setDecadeFilter] = useState();
  const [moviesFiltered, setmoviesFiltered] = useState();

  const { errorMessage } = constants;

  useEffect(() => {
    const movies = async () => {
      try {
        let moviesList = []
        let reviewList = []
        const loadFromLocalStorate = loadLocalStorage('movies')
        if(loadFromLocalStorate) {
          moviesList = loadFromLocalStorate;
        } else {
          const getMovies = await fetch('http://localhost:1234/api/movies.json')
          const movies = await getMovies.json()

          const getReviews= await fetch('http://localhost:1234/api/reviews.json')
          reviewList = await getReviews.json()


          moviesList = movies.sort(
            (a, b) => {
              if(a.title < b.title) { return -1; }
              if(a.title > b.title) { return 1; }
              return 0;
            }
          );

          moviesList.forEach((movie) => {
            const reviewData = reviewList.find((review) => review['movie-id'] == movie.id)
            movie.review = reviewData.review
          })

          saveLocalStorage('movies', moviesList)
        }
        setMoviesList(moviesList)

      } catch (e) {
        console.error('Error')
      }
    }
    movies()
  }, []);


  useEffect(onLoad, []); // to run tests


  const onFilterTitle = (value) => {
    const newValue = value === '' || value.length < 2 ? null : value
    setTitleFilter(newValue)
    movieFilter(newValue, decadeFilter)
  }

  const onSelectDecade = (value) => {
    const newValue = value === 'all' ? null : value
    setDecadeFilter(newValue)
    movieFilter(titleFilter , newValue)
  }

  const movieFilter = (title, decade )=> {
    const filteredMovies = moviesList.filter(movie => {
      const titleMatches = title ? movie.title.toLowerCase().includes(title): true;
      const decadeMatches = decade ? movie.year.toString().slice(0,3) == decade : true;

      return titleMatches && decadeMatches ;
    });
    setmoviesFiltered(filteredMovies)
  }

  const toogleMovieDetails = (movieId)=> {
    if(movieId === showMovieDetailsId) {
      setShowMovieDetailsId(null)
    }else {
      setShowMovieDetailsId(movieId)
    }

  }


  const movieListToRender = moviesFiltered ? moviesFiltered : moviesList;

  if(!movieListToRender ) {
    return html`
      <main>
      ${Header()}
      <p>${errorMessage}</p>
      </main>
      `;
  }

  return html`
  <main class=${mainStyle}>
   ${Header()}
   ${Searcher(onFilterTitle, onSelectDecade)}
   ${MovieList(movieListToRender,showMovieDetailsId, toogleMovieDetails)}
   </main>
   `;
};
