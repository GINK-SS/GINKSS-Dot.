import styled from 'styled-components';

interface ThumbnailProps {
  file: string;
}

const Thumbnail = ({ file }: ThumbnailProps) => {
  return (
    <Img src={`${process.env.PUBLIC_URL}/images/project/thumbnails/${file}`} alt={file} />
  );
};

export default Thumbnail;

const Img = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.pointColor};
  box-sizing: border-box;
`;
