import styled from 'styled-components';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Content>{text}</Content>;
};

export default Title;

const Content = styled.p`
  margin-bottom: 15px;
  font-size: 50px;
  font-weight: 700;
  cursor: default;
  color: ${({ theme }) => theme.pointDarkerColor};
`;
