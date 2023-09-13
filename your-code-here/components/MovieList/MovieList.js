const { css } = emotion;
import MovieItem from '../MovieItem/MovieItem.js'
import NotFound from '../NotFound/NotFound.js'

const listMovieContainer = css`
  width: 80%;
  margin: 0 auto;
`;

const listMovieStyle = css`
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 8px;
width: 100%;
padding: 16px;
list-style: none;
`;

const listMovieItem = css`
width: 100%;
`;

const MovieList = (movieList, movieIdSelected, toogleMovieDetails) => {

  if(movieList.length === 0) return NotFound()

  return html `
  <section class=${listMovieContainer}>
    <ul class=${listMovieStyle}>${movieList.map((item) => html`<li data-testid='movie-item' class=${listMovieItem} key=${item.id}> ${MovieItem(item, movieIdSelected ,toogleMovieDetails)}</li>`)}</ul>
  </section>
  `
}

export default MovieList
