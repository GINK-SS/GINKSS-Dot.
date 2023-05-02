import styled from 'styled-components';

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
`;

const Content = styled.p`
  line-height: 1.5;
  font-weight: 300;
`;
