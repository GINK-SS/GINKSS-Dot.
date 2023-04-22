import { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default Wrapper;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: min(60vw, 800px);
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate(10px, 10px);
    background: ${({ theme }) =>
      `repeating-linear-gradient(-45deg, ${theme.textColor}, ${theme.textColor} 2px, ${theme.bgColor} 0, ${theme.bgColor} 4px)`};
  }
`;

const Box = styled.div`
  padding: 50px;
  border: 1px solid ${({ theme }) => theme.textColor};
  box-sizing: border-box;
  transform: translate(0, 0);
  background-color: ${({ theme }) => theme.bgColor};
`;
