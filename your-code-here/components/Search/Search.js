import { constants } from '../../constants/constants.js'

const { css } = emotion;

const searchContainer = css`
  width: 50%;
  margin: 0 auto;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const searchItem = css`
  display: flex;
  flex-direction: column;
  `

const searchInputs= css`
  padding: 8px 16px;
  font-size: 20px;
  `


const Searcher = (onFilterTitle, onSelectDecade) => {
  const { decadeOptions } = constants;
  const optionElements = () => decadeOptions.map((option ) => html `<option value=${option.valueToFilter}>${option.decade}</option>`)

  return html `
  <div class=${searchContainer}>
  <div class=${searchItem}>
  <label>Title Contains</label>
  <input data-testid="searcherTitle" class=${searchInputs} placeholder="Search by title" onChange=${(e)=> onFilterTitle(e.target.value)}/>
  </div>
  <div class=${searchItem}>
  <label>Decade</label>
  <select class=${searchInputs} name="select" onChange=${(e)=> onSelectDecade(e.target.value)}>
  <option value="all" selected>All movies</option>
  ${optionElements()}
  </div>
</select>
  </div>
  `
}

export default Searcher;


