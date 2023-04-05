import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Title = () => {
  const [isFE, setIsFE] = useState(window.innerWidth <= 900 ? true : false);
  const [isLine, setIsLine] = useState(false);

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
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
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

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(100vw, 3000px);
  transform: translate(-50%, -50%);
`;

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
  color: #f5eaea;
  font-family: 'Changa One', cursive;
  font-weight: 600;
  line-height: 0.8;
  text-shadow: -1.5px 0 #5f5343, 0 3.5px #5f5343, 3.5px 0 #5f5343, 0 -1.5px #5f5343;
`;
