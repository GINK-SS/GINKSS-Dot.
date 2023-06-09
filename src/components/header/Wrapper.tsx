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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;

  ${media.header} {
    padding: 0 20px;
    height: 70px;
    background-color: ${({ theme }) => theme.bgColor};
    border-bottom: 1px solid ${({ theme }) => theme.textColor}AA;
  }
`;
