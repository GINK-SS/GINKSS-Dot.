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
  max-width: 1000px;
  margin: 200px auto;
`;
