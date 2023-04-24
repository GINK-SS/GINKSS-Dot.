import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../../components/header/Button';
import NavItem from '../../components/header/NavItem';
import Wrapper from '../../components/header/Wrapper';
import { themeState } from '../../store/theme';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useRecoilState(themeState);
  const [clickMode, setClickMode] = useState(false);

  const onLogo = () => {
    if (pathname !== '/') navigate('/');
  };

  const toggleTheme = () => {
    // setIsDark((prev) => !prev);
    setIsNotification(true);
    setClickMode(true);
  };

  const themeAnimationEnd = () => setClickMode(false);

  const onProfile = () => {
    if (pathname !== '/profile') navigate('/profile');
  };

  return (
    <Wrapper>
      <Button icon={isDark ? 'darkLogo' : 'logo'} handleClick={onLogo} />
      <NavItem content="PROFILE" handleClick={onProfile} />
      <Button
        icon={isDark ? 'dark' : 'light'}
        handleClick={toggleTheme}
        animationState={clickMode}
        animationEnd={themeAnimationEnd}
      />
    </Wrapper>
  );
};

export default Header;
