import { useEffect } from 'react';
import Background from '../components/main/Background';
import SangMinKing from '../components/main/SangMinKing';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Background>
      <SangMinKing />
    </Background>
  );
};

export default MainPage;

