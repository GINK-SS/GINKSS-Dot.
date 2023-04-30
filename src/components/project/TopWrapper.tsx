import { ReactNode } from 'react';
import styled from 'styled-components';

interface TopWrapperProps {
  isRight: boolean;
  children: ReactNode;
}

const TopWrapper = ({ isRight, children }: TopWrapperProps) => {
  return <Wrapper isRight={isRight}>{children}</Wrapper>;
};

export default TopWrapper;

const Wrapper = styled.div<{ isRight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')};
`;
