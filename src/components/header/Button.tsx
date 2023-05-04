import styled from 'styled-components';
import logoImg from '../../assets/icons/logo.png';
import darkLogoImg from '../../assets/icons/darkLogo.png';
import { IconInfo } from '../../types/header';
import ReactIcon from '../../container/common/ReactIcon';

const iconList: IconInfo = {
  logo: logoImg,
  darkLogo: darkLogoImg,
};

interface ButtonProps {
  isReactIcon?: boolean;
  icon: string;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

const Button = ({ isReactIcon = false, icon, handleClick }: ButtonProps) => {
  return (
    <>
      <IconBox onClick={handleClick}>
        {isReactIcon ? <ReactIcon icon={icon} size={25} /> : <Icon icon={icon} />}
      </IconBox>
    </>
  );
};

export default Button;

const IconBox = styled.div`
  cursor: pointer;
`;

const Icon = styled.div<{ icon: string }>`
  width: 35px;
  height: 35px;
  background-image: url(${({ icon }) => iconList[icon]});
  background-repeat: no-repeat;
  background-size: cover;
`;
