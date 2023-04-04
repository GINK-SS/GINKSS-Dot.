import { useEffect } from 'react';
import Background from '../components/main/Background';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Background>
    </Background>
  );
};

export default MainPage;

