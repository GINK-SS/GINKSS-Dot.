import { ReactNode } from 'react';
import styled from 'styled-components';
import chevron from '../../assets/chevron.svg';

interface SummaryWrapperProps {
  index: number;
  children: ReactNode;
}

const SummaryWrapper = ({ index, children }: SummaryWrapperProps) => {
  return (
    <Wrapper isRight={index % 2 !== 0}>
      <Chevron isRight={index % 2 !== 0} isLastChild={index === 2} />
      {children}
    </Wrapper>
  );
};

export default SummaryWrapper;

const Wrapper = styled.div<{ isRight: boolean }>`
  display: flex;
  justify-content: ${({ isRight }) => (isRight ? 'right' : 'left')};
  position: relative;
  margin-bottom: 300px;
  cursor: pointer;
`;

const Chevron = styled.div<{ isRight: boolean; isLastChild: boolean }>`
  display: ${({ isLastChild }) => (isLastChild ? 'none' : 'block')};
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: -1;
  height: 20px;
  background-image: url(${chevron});
  background-repeat: repeat-x;
  transform: ${({ isRight }) =>
    isRight ? 'translate(0, 300px) rotate(-37deg)' : 'translate(0, 300px) rotate(37deg)'};
`;
