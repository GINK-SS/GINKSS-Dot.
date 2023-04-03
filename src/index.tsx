import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <HelmetProvider>
        <GlobalStyle />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </BrowserRouter>
);
