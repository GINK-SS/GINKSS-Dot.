import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainName from '../../assets/mainName.png';

const NameSticker = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState(windowHeight / 2000);

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerHeight / 2000;
      if (newScale !== scale) setScale(newScale);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [scale]);

  return <Sticker src={mainName} alt="" scale={scale} />;
};

export default NameSticker;

interface StickerProps {
  scale: number;
}

const Sticker = styled.img.attrs<StickerProps>(({ scale }) => ({
  style: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${scale * 1.3}) rotate(15deg)`,
  },
}))<StickerProps>``;
