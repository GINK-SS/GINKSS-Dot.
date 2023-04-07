import styled from 'styled-components';
import logoImg from '../../assets/icons/logo.png';
import logoHoverImg from '../../assets/icons/logoHover.png';
import { IconInfo } from '../../types/header';

const iconList: IconInfo = {
  logo: logoImg,
  logoHover: logoHoverImg,
};

const iconAlt: IconInfo = {
  logo: '로고',
  logoHover: '로고',
};

interface ButtonProps {
  icon: string;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
  handleMouseOver?: React.MouseEventHandler<HTMLImageElement>;
  handleMouseOut?: React.MouseEventHandler<HTMLImageElement>;
}

const Button = ({
  icon,
  handleClick,
  handleMouseOver = () => {},
  handleMouseOut = () => {},
}: ButtonProps) => {
  return (
    <>
      <IconBox
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Icon src={iconList[icon]} alt={iconAlt[icon]} />
      </IconBox>
    </>
  );
};

export default Button;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 100%;
`;
