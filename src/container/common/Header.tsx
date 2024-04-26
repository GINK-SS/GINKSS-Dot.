import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Button from '../../components/header/Button';
import RightIcons from '../../components/header/RightIcons';
import Wrapper from '../../components/header/Wrapper';
import { contactState } from '../../store/modal';
import { notificationState } from '../../store/notification';
import { themeState } from '../../store/theme';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useRecoilState(themeState);
  const [contact, setContact] = useRecoilState(contactState);
  const setIsNotification = useSetRecoilState(notificationState);

  const onLogo = () => {
    if (pathname !== '/') {
      window.scrollTo(0, 0);
      navigate('/');
    }
  };

  const toggleTheme = () => {
    // setIsDark((prev) => !prev);
    setIsNotification(true);
  };

  const onProfile = () => {
    if (pathname !== '/profile') {
      window.scrollTo(0, 0);
      navigate('/profile');
    } else window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onProject = () => {
    if (pathname !== '/project') {
      window.scrollTo(0, 0);
      navigate('/project');
    } else window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onEmail = () => setContact(true);

  return (
    <Wrapper>
      <Button icon={isDark ? 'darkLogo' : 'logo'} handleClick={onLogo} />

      <RightIcons>
        <Button
          isReactIcon
          icon="BiUserPin"
          explain="PROFILE"
          isClick={pathname === '/profile'}
          handleClick={onProfile}
        />
        <Button
          isReactIcon
          icon="BiBook"
          explain="PROJECT"
          isClick={pathname === '/project'}
          handleClick={onProject}
        />
        <Button
          isReactIcon
          icon={contact ? 'BiEnvelopeOpen' : 'BiEnvelope'}
          explain="CONTACT"
          handleClick={onEmail}
        />
        {/* <Button
          isReactIcon
          icon={isDark ? 'BiMoon' : 'BiSun'}
          explain={isDark ? 'DARK' : 'LIGHT'}
          handleClick={toggleTheme}
        /> */}
      </RightIcons>
    </Wrapper>
  );
};

export default Header;
