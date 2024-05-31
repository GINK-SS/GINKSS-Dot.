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

  ${media.large} {
    margin-bottom: 25px;
    padding: 30px 30px 20px;
  }

  ${media.medium} {
    margin-bottom: 20px;
    padding: 25px 20px 10px;
  }

  ${media.small} {
    margin-bottom: 4vw;
    padding: 3vw;
  }
`;
