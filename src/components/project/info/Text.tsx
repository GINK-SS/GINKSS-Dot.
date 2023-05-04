import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

interface TextProps {
  texts: string[];
}

const Text = ({ texts }: TextProps) => {
  return (
    <Paragraph>
      {texts.map((text, index) => (
        <Content key={index}>{text}</Content>
      ))}
    </Paragraph>
  );
};

export default Text;

const Paragraph = styled.div`
  margin-bottom: 30px;

  ${media.medium} {
    margin-bottom: 25px;
  }

  ${media.small} {
    margin-bottom: 5vw;
  }
`;

const Content = styled.p`
  line-height: 1.5;
  font-weight: 300;

  ${media.medium} {
    font-size: 15px;
  }

  ${media.small} {
    font-size: 3.5vw;
  }
`;
