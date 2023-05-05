import styled from 'styled-components';
import bg from '../../assets/zigzag.svg';
import { media } from '../../utils/mediaQuery';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Content>{text}</Content>;
};

export default Title;

const Content = styled.p`
  margin-bottom: 30px;
  padding: 50px 50px 30px;
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  cursor: default;
  color: ${({ theme }) => theme.pointDarkerColor};
  background-image: url(${bg});

  ${media.medium} {
    padding: 40px 30px 30px;
    font-size: 45px;
  }

  ${media.small} {
    padding: 4vw 3vw 3vw;
    font-size: 35px;
  }
`;
