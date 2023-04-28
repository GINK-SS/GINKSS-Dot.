import { ReactNode } from 'react';
import styled from 'styled-components';
import chevron from '../../assets/chevron.svg';
import hoverTriangle from '../../assets/hoverTriangle.svg';

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

  &:hover {
    > div:last-child,
    > div:last-child > div:first-child {
      transform: scale(1.03);
    }

    > div:last-child::before {
      transform: translate(-54%, -54%) scale(1.03);
    }

    > div:last-child::after {
      transform: translate(-50%, -50%) scale(1.03);
      opacity: 0;
    }

    > div:last-child > div:nth-child(2) {
      transform: translate(-50%, -50%) scale(1.03);
    }

    > div:last-child > div:nth-child(2)::after {
      background-image: url(${hoverTriangle});
      transform: translate(-65%, -65%) scale(1.03);
    }

    > div:last-child > div:last-child {
      transform: translate(-47%, -47%) scale(1.03);
    }

    > div:last-child > div:last-child::before {
      transform: translate(-46%, -46%);
    }

    Img {
      transform: translate(-50%, -50%) scale(0.97);
      filter: none;
    }
  }
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
