import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface IntroduceProps {
  content: string;
}

const Introduce = ({ content }: IntroduceProps) => {
  return <Content>{content}</Content>;
};

export default Introduce;

const Content = styled.p`
  margin-bottom: 30px;
  word-break: keep-all;

  ${media.medium} {
    font-size: 15px;
  }
`;
