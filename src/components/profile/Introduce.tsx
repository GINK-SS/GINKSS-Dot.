import styled from 'styled-components';

interface IntroduceProps {
  content: string;
}

const Introduce = ({ content }: IntroduceProps) => {
  return <Content>{content}</Content>;
};

export default Introduce;

const Content = styled.p`
  font-size: 20px;
`;
