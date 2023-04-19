import styled from 'styled-components';

interface IntroduceProps {
  content: string;
}

const Introduce = ({ content }: IntroduceProps) => {
  return <Content>{content}</Content>;
};

export default Introduce;

const Content = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
  word-break: keep-all;
`;
