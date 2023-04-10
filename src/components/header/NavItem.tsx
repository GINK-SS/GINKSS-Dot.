import styled from 'styled-components';

interface NavItemProps {
  content: string;
  handleClick: React.MouseEventHandler<HTMLParagraphElement>;
}

const NavItem = ({ content, handleClick }: NavItemProps) => {
  return <Content onClick={handleClick}>{content}</Content>;
};

export default NavItem;

const Content = styled.p`
  cursor: pointer;
`;
