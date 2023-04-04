import { ReactNode } from 'react';
import styled from 'styled-components';
import background from '../../assets/mainBackground.png';

interface BackgroundProps {
  children: ReactNode;
}

/** 메인 배경화면 */
const Background = ({ children }: BackgroundProps) => {
  return <Container>{children}</Container>;
};

export default Background;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: url(${background});
`;
