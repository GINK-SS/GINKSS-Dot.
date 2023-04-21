import styled from 'styled-components';

interface TitleProps {
  isLine: boolean;
  isFE: boolean;
  windowWidth: number;
  windowHeight: number;
}

const Title = ({ isLine, isFE, windowWidth, windowHeight }: TitleProps) => {
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
  font-family: 'Changa One', cursive;
  font-weight: 600;
  line-height: 0.8;
  color: ${({ theme }) => theme.hoverBgColor};
  text-shadow: -1px 0 rgba(0, 0, 0, 0.5), 1px 0 rgba(0, 0, 0, 0.5),
    0 -1px rgba(0, 0, 0, 0.5), 0 1px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5);
  cursor: default;
`;
