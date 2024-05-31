import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/font.css';
import hideout from '../assets/hideout.svg';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    background-image: url(${hideout});
    background-size: 70px 70px;
  }
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }
  ul {
    list-style-type: disc;

    ul {
      list-style-type: circle;

        ul {
          list-style-type: square;
        }
    }
  }
  ol {
    list-style-type: decimal;
  }
`;
