import { ReactNode } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 1000px;
  padding: 50px;
  border-radius: 50px 20px / 30px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
`;
