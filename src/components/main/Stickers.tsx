import styled from 'styled-components';
import mainName from '../../assets/mainName.png';

interface StickersProps {
  scale: number;
}

const Stickers = ({ scale }: StickersProps) => {
  return <Name src={mainName} alt="" scale={scale} />;
};

export default Stickers;

interface NameProps {
  scale: number;
}

const Name = styled.img.attrs<NameProps>(({ scale }) => ({
  style: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${scale * 1.3}) rotate(15deg)`,
  },
}))<NameProps>``;
