import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Header from './container/common/Header';
import Contact from './container/modal/Contact';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import { contactState } from './store/modal';

function App() {
  const isContact = useRecoilValue(contactState);

  return (
    <>
      <Header />
      {isContact && <Contact />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
