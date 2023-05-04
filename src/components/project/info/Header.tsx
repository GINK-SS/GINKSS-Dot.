import { ReactNode } from 'react';
import styled from 'styled-components';
import bg from '../../../assets/zigzag.svg';
import { media } from '../../../utils/mediaQuery';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  margin-bottom: 30px;
  padding: 50px 50px 30px;
  background-image: url(${bg});

  ${media.medium} {
    margin-bottom: 20px;
    padding: 35px 30px 20px;
  }

  ${media.small} {
    margin-bottom: 5vw;
    padding: 4vw 5vw 3vw 3vw;
  }
`;
