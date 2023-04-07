import styled from 'styled-components';
import mainPhoto from '../../assets/mainPhoto.png';

interface SangMinKingProps {
  windowHeight: number;
  scale: number;
}

const SangMinKing = ({ windowHeight, scale }: SangMinKingProps) => {
  return <Photo src={mainPhoto} alt="" windowHeight={windowHeight} scale={scale} />;
};

export default SangMinKing;

interface PhotoProps extends SangMinKingProps {}

const Photo = styled.img.attrs<PhotoProps>(({ windowHeight, scale }) => ({
  style: {
    position: 'absolute',
    zIndex: '1',
    top: `calc(50% + (${windowHeight}px - (1750px * ${scale})) / 2)`,
    left: '50%',
    transform: `translate(-50%, -50%) scale(${scale})`,
  },
}))<PhotoProps>``;
