import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface NameProps {
  text: string;
  cursor: string;
}

const Name = ({ text, cursor }: NameProps) => {
  return (
    <Content>
      {text}
      {cursor}
    </Content>
  );
};

export default Name;

const Content = styled.p`
  height: 50px;
  margin-left: 20px;
  font-size: 50px;
  font-weight: 500;

  ${media.medium} {
    font-size: 40px;
  }

  ${media.small} {
    font-size: 7.5vw;
  }
`;
