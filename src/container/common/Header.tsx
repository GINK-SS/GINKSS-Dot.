import { useState } from 'react';
import Button from '../../components/header/Button';
import Wrapper from '../../components/header/Wrapper';

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  return (
    <Wrapper>
      <Button
        icon={isHover ? 'logoHover' : 'logo'}
        handleClick={() => {}}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </Wrapper>
  );
};

export default Header;
