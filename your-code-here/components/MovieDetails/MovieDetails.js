const { css } = emotion;

const movieDetailContainer = css`
  display: flex;
  padding: 16px;
`;

const movieDetailImage = css`
  width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.5);
`;

const movieDetailText = css`
  padding: 16px;
  font-size: 16px;
  color: #717579;
  text-align: left;
`;



const MovieDetails = (movie, movieIdSelected) =>{
  if(movie.id == movieIdSelected){
    return html `
      <div data-testid="movieDetails" class=${movieDetailContainer}>
        <img class=${movieDetailImage} src=${movie['cover-url']} alt=${movie.title} />
        <p class=${movieDetailText}>${movie.review}</p>
      </div>
    `
  }
}

export default MovieDetails;
