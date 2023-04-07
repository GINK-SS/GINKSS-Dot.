import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/header/Button';
import Wrapper from '../../components/header/Wrapper';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  const onLogo = () => {
    if (pathname !== '/') navigate('/');
  };

  return (
    <Wrapper>
      <Button
        icon={isHover ? 'logoHover' : 'logo'}
        handleClick={onLogo}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </Wrapper>
  );
};

export default Header;
