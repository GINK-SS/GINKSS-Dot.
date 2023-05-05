import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Notification from './container/common/Notification';
import Header from './container/common/Header';
import Contact from './container/modal/Contact';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import { contactState } from './store/modal';
import { notificationState } from './store/notification';
import { useEffect } from 'react';

function App() {
  const isContact = useRecoilValue(contactState);
  const isNotification = useRecoilValue(notificationState);

  useEffect(() => {
    isContact
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = 'auto');

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isContact]);

  return (
    <>
      <Header />
      {isNotification && <Notification />}
      {isContact && <Contact />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:projectName" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
