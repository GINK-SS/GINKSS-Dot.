import { IconComponents } from '../../types';
import {
  IoLogoGithub,
  IoMailOutline,
  IoCloseCircleOutline,
  IoMoon,
  IoSunny,
} from 'react-icons/io5';

const iconComponents: IconComponents = {
  IoLogoGithub,
  IoMailOutline,
  IoCloseCircleOutline,
  IoMoon,
  IoSunny,
};

interface ReactIconProps {
  icon: string;
  size?: number;
}

/**
 * @params icon: 아이콘 이름, size?: 사이즈
 */
const ReactIcon = ({ icon, size }: ReactIconProps) => {
  const IconComponent = iconComponents[icon];

  return <IconComponent size={size} />;
};

export default ReactIcon;
