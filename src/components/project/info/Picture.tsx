import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

interface PictureProps {
  url: string;
}

const Picture = ({ url }: PictureProps) => {
  return <Img src={`${process.env.PUBLIC_URL}/images/project/pictures/${url}`} />;
};

export default Picture;

const Img = styled.img`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;

  ${media.medium} {
    margin-bottom: 15px;
  }

  ${media.small} {
    margin-bottom: 5vw;
  }

  &:first-child {
    margin-bottom: 50px;
    padding: 3px;
    border: 5px solid ${({ theme }) => theme.pointLighterColor};

    ${media.medium} {
      margin-bottom: 40px;
    }

    ${media.small} {
      margin-bottom: 10vw;
      padding: 1vw;
      border: 1.5vw solid ${({ theme }) => theme.pointLighterColor};
    }
  }
`;
