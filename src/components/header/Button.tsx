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
  explain?: string;
  isClick?: boolean;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

const Button = ({
  isReactIcon = false,
  icon,
  explain,
  isClick = false,
  handleClick,
}: ButtonProps) => {
  return (
    <>
      <IconBox isClick={isClick} onClick={handleClick}>
        {isReactIcon ? <ReactIcon icon={icon} size={30} /> : <Icon icon={icon} />}
        <ExplainBox>
          <Explain>{explain}</Explain>
        </ExplainBox>
      </IconBox>
    </>
  );
};

export default Button;

const IconBox = styled.div<{ isClick: boolean }>`
  position: relative;
  color: ${({ isClick, theme }) => (isClick ? theme.pointColor : theme.textColor)};
  cursor: pointer;

  &:hover {
    > div:last-child {
      display: block;
      transform: translate(-50%, 130%);
      opacity: 1;
    }
  }
`;

const Icon = styled.div<{ icon: string }>`
  width: 35px;
  height: 35px;
  background-image: url(${({ icon }) => iconList[icon]});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ExplainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, 100%);
  transition: 0.5s;
  transition-property: transform, opacity;
`;

const Explain = styled.p`
  font-size: 12px;
`;
