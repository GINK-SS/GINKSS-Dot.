import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/font.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
  }
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }
`;
