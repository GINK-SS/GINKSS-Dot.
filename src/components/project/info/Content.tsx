import styled from 'styled-components';

interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return <Text>{content}</Text>;
};

export default Content;

const Text = styled.p`
  margin-bottom: 15px;
  line-height: 1.5;
  font-weight: 300;
`;
