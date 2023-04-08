import styled from 'styled-components';
import logoImg from '../../assets/icons/logo.png';
import darkLogoImg from '../../assets/icons/darkLogo.png';
import lightImg from '../../assets/icons/light.png';
import darkImg from '../../assets/icons/dark.png';
import { IconInfo } from '../../types/header';

const iconList: IconInfo = {
  logo: logoImg,
  darkLogo: darkLogoImg,
  light: lightImg,
  dark: darkImg,
};

interface ButtonProps {
  icon: string;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

const Button = ({ icon, handleClick }: ButtonProps) => {
  return (
    <>
      <IconBox onClick={handleClick}>
        <Icon icon={icon} />
      </IconBox>
    </>
  );
};

export default Button;

const IconBox = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Icon = styled.div<{ icon: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ icon }) => iconList[icon]});
  background-repeat: no-repeat;
  background-size: cover;
`;
