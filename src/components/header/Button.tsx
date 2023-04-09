import styled, { keyframes } from 'styled-components';
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
  animationState?: boolean;
  animationEnd?: React.AnimationEventHandler<HTMLDivElement>;
}

const Button = ({
  icon,
  handleClick,
  animationState = false,
  animationEnd,
}: ButtonProps) => {
  return (
    <>
      <IconBox onClick={handleClick}>
        <Icon icon={icon} isAnimation={animationState} onAnimationEnd={animationEnd} />
      </IconBox>
    </>
  );
};

export default Button;

const rotateIcon = keyframes`
  0% {
    transform: rotate(-50deg);
  }
  25% {
    transform: rotate(50deg);
  }
  50%{
    transform: rotate(-25deg);
  }
  75%{
    transform: rotate(25deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

const IconBox = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Icon = styled.div<{ icon: string; isAnimation: boolean }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ icon }) => iconList[icon]});
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(0deg);
  animation: ${({ isAnimation }) => isAnimation && rotateIcon} 0.3s;
`;
