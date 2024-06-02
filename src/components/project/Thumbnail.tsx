import styled from 'styled-components';
import triangle from '../../assets/triangle.svg';
import { media } from '../../utils/mediaQuery';
import { useState } from 'react';

interface ThumbnailProps {
  file: string;
  month: string;
  year: number;
}

const Thumbnail = ({ file, month, year }: ThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImgBox>
      <ImgBoxInner>
        <Img
          src={`${process.env.PUBLIC_URL}/images/project/thumbnails/${file}`}
          alt={file}
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
        />

        <SpinnerWrapper>
          <Spinner isLoaded={isLoaded} />
        </SpinnerWrapper>
      </ImgBoxInner>
      <Triangle />
      <Date>
        <Month>{month}</Month>
        <Year>{year}</Year>
      </Date>
      <Decorate />
    </ImgBox>
  );
};

export default Thumbnail;

const ImgBox = styled.div`
  position: relative;
  order: 0;
  transition: 0.5s;

  // 위에 꾸미기 (hover 시)
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 100%;
    height: 100%;
    outline: 1px solid ${({ theme }) => theme.pointColor};
    transform: translate(-50%, -50%);
    transition: 0.3s;
  }

  // 흑백 화면 (hover 전)
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }
`;

// 사진 감싸는 컴포넌트
const ImgBoxInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 290px;
  height: 290px;
  outline: 1px solid ${({ theme }) => theme.pointColor};
  transition-property: transform;
  transition-duration: 0.5s;
  overflow: hidden;

  width: 290px;
  height: 290px;

  ${media.large} {
    width: 250px;
    height: 250px;
  }

  ${media.medium} {
    width: 230px;
    height: 230px;
  }

  ${media.small} {
    width: 42vw;
    height: 42vw;
  }
`;

// 삼각형
const Triangle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 250px solid ${({ theme }) => theme.subPointDarkerColor}AA;
    border-right: 250px solid transparent;
    transition: 0.5s;

    ${media.large} {
      border-top: 220px solid ${({ theme }) => theme.subPointDarkerColor}AA;
      border-right: 220px solid transparent;
    }

    ${media.medium} {
      border-top: 200px solid ${({ theme }) => theme.subPointDarkerColor}AA;
      border-right: 200px solid transparent;
    }

    ${media.small} {
      border-top: 35vw solid ${({ theme }) => theme.subPointDarkerColor}AA;
      border-right: 35vw solid transparent;
    }
  }
`;

const Date = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  font-weight: 600;

  ${media.large} {
    font-size: 17px;
  }

  ${media.medium} {
    top: 8px;
    left: 8px;
    font-size: 15px;
  }

  ${media.small} {
    top: 1vw;
    left: 1vw;
    font-size: 3vw;
  }
`;

const Month = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-style: italic;
  transition-duration: 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 0%;
    height: 110%;
    background-color: ${({ theme }) => theme.pointDarkerColor};
    transform: translate(2px, 3px);
    transition-duration: 0.3s;

    ${media.medium} {
      height: 100%;
    }
  }
`;

const Year = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
  font-style: italic;
  transition-duration: 0.3s;

  ${media.medium} {
    top: 18px;
  }

  ${media.small} {
    top: 3vw;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 0%;
    height: 110%;
    background-color: ${({ theme }) => theme.pointDarkerColor};
    transform: translate(2px, 3px);
    transition-duration: 0.3s;

    ${media.medium} {
      height: 100%;
    }
  }
`;

// 그림자
const Decorate = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    `repeating-linear-gradient(-45deg, ${theme.pointLighterColor}, ${theme.pointLighterColor} 2px, transparent 0, transparent 4px)`};
  transform: translate(-47%, -47%);
  transition: 0.5s;

  // 뒤에 꾸미기 (hover 시)
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    outline: 1px solid ${({ theme }) => theme.pointColor};
    transform: translate(-50%, -50%);
    transition: 0.8s;
  }
`;

// 진짜 사진
const Img = styled.img<{ isLoaded: boolean }>`
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
  position: absolute;
  width: 300px;
  height: 300px;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  object-fit: cover;
  transition: 0.5s;

  ${media.large} {
    width: 260px;
    height: 260px;
  }

  ${media.medium} {
    width: 240px;
    height: 240px;
  }

  ${media.small} {
    width: 44vw;
    height: 44vw;
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #555;
`;

const Spinner = styled.span<{ isLoaded: boolean }>`
  width: 16px;
  height: 16px;
  display: ${({ isLoaded }) => (isLoaded ? 'none' : 'block')};
  margin: 15px auto;
  position: relative;
  background: #fff;
  box-shadow: -24px 0 #fff, 24px 0 #fff;
  box-sizing: border-box;
  animation: shadowPulse 1s linear infinite;

  @keyframes shadowPulse {
    0% {
      background: #fff;
      box-shadow: -24px 0 #ff3d00, 24px 0 #fff;
    }
    33% {
      background: #ff3d00;
      box-shadow: -24px 0 #fff, 24px 0 #fff;
    }
    66% {
      background: #fff;
      box-shadow: -24px 0 #fff, 24px 0 #ff3d00;
    }
    100% {
      background: #fff;
      box-shadow: -24px 0 #fff, 24px 0 #fff;
    }
  }
`;
