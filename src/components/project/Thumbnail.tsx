import styled from 'styled-components';
import triangle from '../../assets/triangle.svg';

interface ThumbnailProps {
  file: string;
  month: string;
  year: number;
}

const Thumbnail = ({ file, month, year }: ThumbnailProps) => {
  return (
    <ImgBox>
      <ImgBoxInner>
        <Img
          src={`${process.env.PUBLIC_URL}/images/project/thumbnails/${file}`}
          alt={file}
        />
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
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-size: 190% 190%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }
`;

const Date = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Month = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
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
  }
`;

const Year = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
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
const Img = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  transition: 0.5s;
`;
