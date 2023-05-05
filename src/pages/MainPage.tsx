import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Background from '../components/main/Background';
import Absolute from '../container/main/Absolute';

const MainPage = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>GINK-SS</title>
      </Helmet>

      <Background>
        <Absolute />
      </Background>
    </>
  );
};

export default MainPage;
