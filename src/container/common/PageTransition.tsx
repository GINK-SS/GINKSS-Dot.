import { ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import animation from '../../styles/animation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [visited, setVisited] = useState(0);

  useEffect(() => {
    setVisited((prev) => prev + 1);
  }, []);

  return <Container visited={visited}>{children}</Container>;
};

export default PageTransition;

const Container = styled.div<{ visited: number }>`
  ${({ visited }) =>
    visited < 2 &&
    css`
      animation: ${animation.fadeIn} 1s linear;
    `};
`;
