import styled from 'styled-components';
import mainName from '../../assets/mainName.png';
import mainMsg from '../../assets/mainMsg.png';

interface StickersProps {
  windowWidth: number;
  windowHeight: number;
  scale: number;
}

const Stickers = ({ windowWidth, windowHeight, scale }: StickersProps) => {
  return (
    <>
      <Name
        src={mainName}
        alt=""
        windowRatio={windowWidth / windowHeight}
        scale={scale}
      />
      <Msg src={mainMsg} alt="" windowRatio={windowWidth / windowHeight} scale={scale} />
    </>
  );
};

export default Stickers;

interface StickerProps {
  windowRatio: number;
  scale: number;
}

const Name = styled.img.attrs<StickerProps>(({ windowRatio, scale }) => ({
  style: {
    display: `${windowRatio > 0.35 ? 'block' : 'none'}`,
    position: 'absolute',
    zIndex: '2',
    top: '80%',
    left: '50%',
    transform: `${
      windowRatio > 0.6
        ? `translate(-50%, -50%) scale(${scale * 1.3}) rotate(15deg)`
        : `translate(-50%, -50%) scale(${scale * 0.9}) rotate(15deg)`
    }`,
  },
}))<StickerProps>``;

const Msg = styled.img.attrs<StickerProps>(({ windowRatio, scale }) => ({
  style: {
    display: `${windowRatio > 0.6 ? 'block' : 'none'}`,
    position: 'absolute',
    top: '30%',
    left: `calc(50% - (1024px * ${scale}) / 2.5)`,
    transform: `translate(-50%, -50%) scale(${scale * 0.5}) rotate(-10deg)`,
  },
}))<StickerProps>``;
