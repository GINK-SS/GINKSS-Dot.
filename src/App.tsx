import { Route, Routes } from 'react-router-dom';
import Header from './container/common/Header';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
