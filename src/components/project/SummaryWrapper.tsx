import { ReactNode } from 'react';
import styled from 'styled-components';
import chevron from '../../assets/chevron.svg';
import hoverTriangle from '../../assets/hoverTriangle.svg';
import { media } from '../../utils/mediaQuery';

interface SummaryWrapperProps {
  isRight: boolean;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const SummaryWrapper = ({ isRight, children, onClick }: SummaryWrapperProps) => {
  return (
    <Wrapper isRight={isRight} onClick={onClick}>
      <Chevron isRight={isRight} />
      {children}
    </Wrapper>
  );
};

export default SummaryWrapper;

const Wrapper = styled.div<{ isRight: boolean }>`
  display: flex;
  justify-content: ${({ isRight }) => (isRight ? 'right' : 'left')};
  position: relative;
  margin: 0 50px 300px;
  cursor: pointer;

  ${media.medium} {
    justify-content: left;
    margin: 0 50px 200px;
  }

  ${media.small} {
    margin: 0 5vw 200px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:last-child > div:first-child {
    display: none;
  }

  &:hover {
    // ImgBox, ImgBoxInner
    > div:nth-child(2),
    > div:nth-child(2) > div:first-child {
      transform: scale(1.03);
    }

    // ImgBox::before
    > div:nth-child(2)::before {
      transform: translate(-54%, -54%) scale(1.03);
    }

    // ImgBox::after
    > div:nth-child(2)::after {
      transform: translate(-50%, -50%) scale(1.03);
      opacity: 0;
    }

    // Triangle
    > div:nth-child(2) > div:nth-child(2) {
      transform: translate(-50%, -50%) scale(1.03);
    }

    // Triangle::after
    > div:nth-child(2) > div:nth-child(2)::after {
      border-top-color: ${({ theme }) => theme.subPointLighterColor}88;
      transform: translate(-15%, -15%) scale(1.03);
    }

    // Month
    > div:nth-child(2) > div:nth-child(3) > p:first-child {
      top: -5px;
      left: -5px;

      ${media.medium} {
        top: -5px;
        left: -3px;
      }
    }

    // Year
    > div:nth-child(2) > div:nth-child(3) > p:last-child {
      top: 15px;
      left: -5px;

      ${media.medium} {
        top: 12px;
        left: -3px;
      }

      ${media.small} {
        top: 8px;
      }
    }

    // Month::before, Year::before
    > div:nth-child(2) > div:nth-child(3) > p::before {
      width: 110%;

      ${media.medium} {
        width: 105%;
      }

      ${media.small} {
        width: 102%;
      }
    }

    // Decorate
    > div:nth-child(2) > div:last-child {
      transform: translate(-47%, -47%) scale(1.03);
    }

    // Decorate::before
    > div:nth-child(2) > div:last-child::before {
      transform: translate(-46%, -46%);
    }

    Img {
      transform: translate(-50%, -50%) scale(0.97);
      filter: none;
    }

    // Title (Text)
    > div:nth-child(3) > div > p:first-child::before {
      width: ${({ isRight }) => (isRight ? '125%' : '120%')};
      ${({ isRight }) => (isRight ? 'right: -20%;' : 'left: 0%;')};

      ${media.medium} {
        left: 0%;
      }

      ${media.small} {
        left: 10%;
      }
    }

    // SubTitle (Text)
    > div:nth-child(3) > div > p:nth-child(2)::before {
      width: ${({ isRight }) => (isRight ? '125%' : '120%')};
      ${({ isRight }) => (isRight ? 'right: -20%;' : 'left: 0%;')};

      ${media.medium} {
        left: 0%;
      }
    }
  }

  &:not(:hover) {
    // Month::before, Year::before
    > div:nth-child(2) > div:nth-child(3) > p::before {
      width: 0%;
      transition-duration: 0s;
    }

    // Title (Text)
    > div:nth-child(3) > div > p:first-child::before {
      width: 0%;
    }

    // SubTitle (Text)
    > div:nth-child(3) > div > p:nth-child(2)::before {
      width: 0%;
    }
  }
`;

const Chevron = styled.div<{ isRight: boolean }>`
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: -1;
  height: 20px;
  background-image: url(${chevron});
  background-repeat: repeat-x;
  transform: ${({ isRight }) =>
    isRight ? 'translate(0, 300px) rotate(-37deg)' : 'translate(0, 300px) rotate(37deg)'};

  ${media.medium} {
    width: 80%;
    transform: translate(-100px, 150px) rotate(-90deg);
  }
`;
