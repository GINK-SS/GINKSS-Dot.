import { ReactNode } from 'react';
import styled from 'styled-components';
import bg from '../../../assets/zigzag.svg';

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
`;
