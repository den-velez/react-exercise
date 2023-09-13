const { css } = emotion;
import MovieDetails from '../MovieDetails/MovieDetails.js'

const movieItemContainer = css`
  display: block;
  cursor: pointer;
  width: 100%;
  background-color: #CED1AD;
  border: .5px solid gray;
  border-radius: 4px;
`;

const movieItemHeadline = css`
  display: flex;
  column-gap: 8px;
  padding : 12px 16px;
  font-size: 20px;
  pointer-events: none;
`

const anchorMovieItem = css`
  pointer-events: all;
`;

const MovieItem = (movie, movieIdSelected, toogleMovieDetails) => {
  return html`
    <button data-testid="detailsButton" class=${movieItemContainer} id=${movie.id} onClick=${(e)=> toogleMovieDetails(e.target.id)}>
      <div class=${movieItemHeadline}>
      <span> ${movie.score * 100}%</span>
      <a class=${anchorMovieItem} href=${movie.url}>${movie.title}</a>
      <span>(${movie.year})</span>
      </div>
     ${MovieDetails(movie, movieIdSelected)}
    </button>
  `
}

export default MovieItem;
