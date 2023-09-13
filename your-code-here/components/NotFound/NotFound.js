const { css } = emotion;

import { constants } from '../../constants/constants.js'

const notFoundContainer = css`
  margin: 100px auto;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
`;

const NotFound = () => {
  const { notFoundMessage } = constants;

  return html `
    <div data-testId='notFound-component' class=${notFoundContainer}>
      <h3>${notFoundMessage}</h3>
    </div>
  `
}

export default NotFound
