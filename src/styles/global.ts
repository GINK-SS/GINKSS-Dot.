import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/font.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
