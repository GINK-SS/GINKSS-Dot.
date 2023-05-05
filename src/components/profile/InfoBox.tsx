import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface InfoProps {
  children: ReactNode;
}

const InfoBox = ({ children }: InfoProps) => {
  return <Container>{children}</Container>;
};

export default InfoBox;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  ${media.small} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: min(260px, 100vw);
    margin: 0 auto;
  }
`;
