import styled from 'styled-components';

interface PhotoProps {
  file: string;
  onOutClick: React.MouseEventHandler<HTMLDivElement>;
}

const Photo = ({ file, onOutClick }: PhotoProps) => {
  return (
    <Overlay onClick={onOutClick}>
      <Img src={`${process.env.PUBLIC_URL}/images/photos/${file}`} alt={file} />
    </Overlay>
  );
};

export default Photo;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
`;
