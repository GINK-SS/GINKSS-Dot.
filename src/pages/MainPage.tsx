import { useEffect } from 'react';
import Background from '../components/main/Background';
import NameSticker from '../components/main/NameSticker';
import SangMinKing from '../components/main/SangMinKing';
import Title from '../components/main/Title';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Background>
      <Title />
      <SangMinKing />
      <NameSticker />
    </Background>
  );
};

export default MainPage;
