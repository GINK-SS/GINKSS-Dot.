import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainPhoto from '../../assets/mainPhoto.png';

const SangMinKing = () => {
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

  return <Photo src={mainPhoto} alt="" windowHeight={windowHeight} scale={scale} />;
};

export default SangMinKing;

interface PhotoProps {
  scale: number;
  windowHeight: number;
}

const Photo = styled.img<PhotoProps>`
  position: absolute;
  top: ${({ windowHeight, scale }) =>
    `calc(50% + (${windowHeight}px - (1750px * ${scale})) / 2)`};
  left: 50%;
  transform: ${({ scale }) => `translate(-50%, -50%) scale(${scale})`};
`;
