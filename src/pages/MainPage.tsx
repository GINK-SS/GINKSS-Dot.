import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
