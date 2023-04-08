import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeState } from './store/theme';

const Root = () => {
  const isDark = useRecoilValue(themeState);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <GlobalStyle />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <Root />
  </RecoilRoot>
);
