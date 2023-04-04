import styled from 'styled-components';
import mainPhoto from '../../assets/mainPhoto.png';

const SangMinKing = () => {
  return <Photo src={mainPhoto} alt="" />;
};

export default SangMinKing;

const Photo = styled.img`
  position: absolute;
  z-index: 2;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.7);
`;
