import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ShadowText from '../../components/common/ShadowText';
import Button from '../../components/header/Button';
import Wrapper from '../../components/header/Wrapper';
import { notificationState } from '../../store/notification';
import { themeState } from '../../store/theme';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useRecoilState(themeState);
  const setIsNotification = useSetRecoilState(notificationState);

  const onLogo = () => {
    if (pathname !== '/') navigate('/');
  };

  const toggleTheme = () => {
    // setIsDark((prev) => !prev);
    setIsNotification(true);
  };

  const onProfile = () => {
    if (pathname !== '/profile') navigate('/profile');
  };

  const onProject = () => {
    if (pathname !== '/project') navigate('/project');
  };

  return (
    <Wrapper>
      <Button icon={isDark ? 'darkLogo' : 'logo'} handleClick={onLogo} />
      <ShadowText text="PROFILE" size={20} weight={500} onClick={onProfile} />
      <ShadowText text="PROJECT" size={20} weight={500} onClick={onProject} />
      <Button
        isReactIcon
        icon={isDark ? 'IoMoon' : 'IoSunny'}
        handleClick={toggleTheme}
      />
    </Wrapper>
  );
};

export default Header;
