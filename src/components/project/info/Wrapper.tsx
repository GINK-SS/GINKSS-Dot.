import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

interface WrapperProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Wrapper = ({ children, onClick }: WrapperProps) => {
  return (
    <Overlay onClick={onClick}>
      <Container>
        <Box>{children}</Box>
      </Container>
    </Overlay>
  );
};

export default Wrapper;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow-y: scroll;
`;

const Container = styled.div`
  position: relative;
  width: min(80vw, 1000px);
  margin: 30px auto 40px;

  ${media.small} {
    width: 100%;
    margin: 0;
  }
`;

const Box = styled.div`
  width: min(80vw, 1000px);
  border: 1px solid ${({ theme }) => theme.pointColor};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgColor};

  ${media.small} {
    width: 100%;
    min-height: 100vh;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate(10px, 10px);
    z-index: -1;
    background: ${({ theme }) =>
      `repeating-linear-gradient(-45deg, ${theme.pointLighterColor}, ${theme.pointLighterColor} 2px, transparent 0, transparent 4px)`};

    ${media.small} {
      display: none;
    }
  }
`;
