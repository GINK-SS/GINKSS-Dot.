import { useState } from 'react';
import Button from '../../components/header/Button';
import Wrapper from '../../components/header/Wrapper';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <Button
        icon={isHover ? 'logoHover' : 'logo'}
        handleClick={() => {}}
      />
    </Wrapper>
  );
};

export default Header;
