import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

const Container = styled.div`
  max-width: 1000px;
  margin: 150px auto;
  padding: 0 30px;

  ${media.small} {
    padding: 0 1vw;
  }
`;
