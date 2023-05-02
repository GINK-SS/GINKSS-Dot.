import styled from 'styled-components';

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

  &:first-child {
    margin-bottom: 50px;
    padding: 3px;
    border: 5px solid ${({ theme }) => theme.pointLighterColor};
  }
`;
