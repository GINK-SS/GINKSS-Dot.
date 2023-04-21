import { ReactNode } from 'react';
import styled from 'styled-components';

interface InfoProps {
  children: ReactNode;
}

const InfoBox = ({ children }: InfoProps) => {
  return <Container>{children}</Container>;
};

export default InfoBox;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
