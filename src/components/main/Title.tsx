import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Title = () => {
  const [isFE, setIsFE] = useState(window.innerWidth <= 900 ? true : false);
  const [isLine, setIsLine] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
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
    <Container isLine={isLine} windowWidth={windowWidth} windowHeight={windowHeight}>
      <Wrapper isActive={!isLine} isFE={isFE}>
        <Content>I'M</Content>
        <Content>A</Content>
        <Content>{isFE ? 'FE' : 'FRONTEND'}</Content>
      </Wrapper>
      <Wrapper isActive={isLine}>
        <Content>I'M</Content>
        <Content>A</Content>
        <Content>FRONTEND</Content>
        <Content>DEVELOPER</Content>
      </Wrapper>
      <Wrapper isActive={!isLine}>
        <Content>D</Content>
        <Content>E</Content>
        <Content>V</Content>
        <Content>E</Content>
        <Content>L</Content>
        <Content>O</Content>
        <Content>P</Content>
        <Content>E</Content>
        <Content>R</Content>
      </Wrapper>
    </Container>
  );
};

export default Title;

interface ContainerProps {
  isLine: boolean;
  windowWidth: number;
  windowHeight: number;
}

const Container = styled.div.attrs<ContainerProps>(
  ({ isLine, windowWidth, windowHeight }) => ({
    style: {
      position: 'absolute',
      top:
        isLine || windowWidth > 3000
          ? '50%'
          : windowWidth <= 1200
          ? windowHeight > 1100
            ? '20%'
            : `calc(${(1100 - windowHeight) / 20}% + 20%)`
          : windowWidth < 1500
          ? windowHeight > 1100
            ? '25%'
            : `calc(${(1100 - windowHeight) / 20}% + 25%)`
          : windowHeight > 1100
          ? '35%'
          : `calc(${(1100 - windowHeight) / 20}% + 35%)`,
      left: '50%',
      width: 'min(100vw, 3000px)',
      transform: 'translate(-50%, -50%)',
    },
  })
)<ContainerProps>``;

const Wrapper = styled.div<{ isActive: boolean; isFE?: boolean }>`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: space-between;
  margin: 0 1vw;

  &:first-child {
    p {
      font-size: ${({ isFE }) => (isFE ? '25vw' : 'min(13vw, 400px)')};
    }
  }

  &:nth-child(2) {
    p {
      font-size: min(7.5vw, 200px);
    }
  }

  &:last-child {
    p {
      font-size: min(19vw, 550px);
    }
  }
`;

const Content = styled.p`
  color: #fff9ee;
  font-family: 'Changa One', cursive;
  font-weight: 600;
  line-height: 0.8;
  text-shadow: -1px 0 #a18c6a, 0 1px #a18c6a, 1px 0 #a18c6a, 0 -1px #a18c6a,
    0 0px 30px #a18c6a;
`;
