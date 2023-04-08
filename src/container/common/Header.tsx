import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../../components/header/Button';
import Wrapper from '../../components/header/Wrapper';
import { themeState } from '../../store/theme';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useRecoilState(themeState);

  const onLogo = () => {
    if (pathname !== '/') navigate('/');
  };

  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <Wrapper>
      <Button icon={isDark ? 'darkLogo' : 'logo'} handleClick={onLogo} />
      <Button icon={isDark ? 'dark' : 'light'} handleClick={toggleTheme} />
    </Wrapper>
  );
};

export default Header;
