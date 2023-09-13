const { css } = emotion;

import { constants } from '../../constants/constants.js'

const titleStyle = css`
  text-align: center;
  margin-bottom: 40px;
`;

const Header = () => {
  const { headerTitle } = constants;

  return html ` <h1 class=${titleStyle}>${headerTitle}</h1>`
}

export default Header;
