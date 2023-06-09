import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface ContentProps {
  isRight: boolean;
  children: ReactNode;
}

const Content = ({ isRight, children }: ContentProps) => {
  return <Container isRight={isRight}>{children}</Container>;
};

export default Content;

const Container = styled.div<{ isRight: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  order: ${({ isRight }) => (isRight ? -1 : 0)};
  padding: ${({ isRight }) => (isRight ? '0 30px 0 10px' : '0 10px 0 40px')};
  overflow: hidden;

  ${media.large} {
    padding: ${({ isRight }) => (isRight ? '0 25px 0 10px' : '0 10px 0 35px')};
  }

  ${media.medium} {
    order: 0;
    padding: 0 10px 0 25px;
  }
`;
