import { useEffect, useState } from 'react';
import SangMinKing from '../../components/main/SangMinKing';
import Title from '../../components/main/Title';
import Stickers from '../../components/main/Stickers';

const Absolute = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scale, setScale] = useState(0);
  const [isFE, setIsFE] = useState(false);
  const [isLine, setIsLine] = useState(false);

  const handleResize = () => {
    // 사진이나 스티커 스케일 조정
    const newScale = window.innerHeight / 2000;
    if (newScale !== scale) setScale(newScale);

    // FE
    window.innerWidth <= 900 ? setIsFE(true) : setIsFE(false);

    // 한 줄로 바꿀 것인지 (반응형)
    if (window.innerWidth > 3000) {
      window.innerHeight <= 800 ? setIsLine(true) : setIsLine(false);
    } else if (window.innerWidth <= 3000 && window.innerWidth > 900) {
      window.innerWidth / window.innerHeight >= (window.innerWidth - 900) / 2100 + 2.75
        ? setIsLine(true)
        : setIsLine(false);
    } else {
      window.innerWidth / window.innerHeight >= (window.innerWidth - 300) / 600 + 1.5
        ? setIsLine(true)
        : setIsLine(false);
    }

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Title
        isLine={isLine}
        isFE={isFE}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
      />
      <SangMinKing windowHeight={windowHeight} scale={scale} />
      <Stickers scale={scale} />
    </>
  );
};

export default Absolute;
