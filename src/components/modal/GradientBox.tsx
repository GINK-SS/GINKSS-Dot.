import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientBoxProps {
  children: ReactNode;
}

const GradientBox = ({ children }: GradientBoxProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GradientBox;

const gradientAnimation = keyframes`
  0% {
    border-image: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(30, 28, 28, 0.2) 100%);
    border-image-slice: 1;
  }
  25% {
    border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(30, 28, 28, 0.2) 100%);
    border-image-slice: 1;
  }
  50% {
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(30, 28, 28, 0.2) 100%);
    border-image-slice: 1;
  }
  75% {
    border-image: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(30, 28, 28, 0.2) 100%);
    border-image-slice: 1;
  }
  100% {
    border-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 0%, rgba(30, 28, 28, 0.2) 100%);
    border-image-slice: 1;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 50px;
  border: 1px solid transparent;
  animation: ${gradientAnimation} 2s linear infinite;
`;
