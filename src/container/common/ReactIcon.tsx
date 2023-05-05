import { IconComponents } from '../../types';
import { IoLogoGithub, IoMailOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import {
  BiUserPin,
  BiBook,
  BiEnvelope,
  BiEnvelopeOpen,
  BiSun,
  BiMoon,
} from 'react-icons/bi';

const iconComponents: IconComponents = {
  IoLogoGithub,
  IoMailOutline,
  IoCloseCircleOutline,
  ImProfile,
  BiUserPin,
  BiBook,
  BiEnvelope,
  BiEnvelopeOpen,
  BiSun,
  BiMoon,
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
