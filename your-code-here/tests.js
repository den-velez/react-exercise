// Test Runner: https://mochajs.org
// DOM helpers: https://testing-library.com/docs/intro
// Assertions: https://unexpected.js.org/assertions/any/to-be/

const { expect } = weknowhow;
const { getByText, getByTestId, getAllByText, screen, fireEvent, getByRole } = TestingLibraryDom;


beforeEach(function () {
  this.app = document.querySelector("#user-app");
});


it('should be render 24 movies', ()=> {
  const movieItems = screen.getAllByTestId('movie-item');

  expect(movieItems.length, 'to be', 24)
})

it('should render Not Found component when the title does not exists', ()=>{
  fireEvent.change(screen.getByPlaceholderText('Search by title'), {target: {value: 'unknown'}})

  const NotFound = screen.getByTestId('notFound-component')

  expect(NotFound, 'to be defined')
})

it('should render a filter movie list when decade filter is applied', ()=>{
  fireEvent.change(screen.getByPlaceholderText('Search by title'), {target: {value: ''}})
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '201' } })

  const movieItems = screen.getAllByTestId('movie-item');

  expect(movieItems.length, 'to be less than', 24)
})


it('should render movie details when the user click any movie item', ()=>{
  const movieElements = screen.getAllByTestId('detailsButton')

  fireEvent.click(movieElements[0])

  const MovieDetails = screen.getByTestId('movieDetails')

  expect(MovieDetails, 'to be defined')
})

