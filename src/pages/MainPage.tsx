import { useEffect } from 'react';
import Background from '../components/main/Background';
import Absolute from '../container/main/Absolute';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Background>
      <Absolute />
    </Background>
  );
};

export default MainPage;
