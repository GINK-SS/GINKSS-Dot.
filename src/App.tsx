import { Route, Routes } from 'react-router-dom';
import Header from './container/common/Header';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
