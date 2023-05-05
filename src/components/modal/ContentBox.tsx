import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface ContentBoxProps {
  children: ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return <Container>{children}</Container>;
};

export default ContentBox;

const Container = styled.div`
  padding: 0 50px 50px;

  ${media.medium} {
    padding: 0 30px 30px;
  }

  ${media.small} {
    padding: 0 3vw 3vw;
  }
`;
