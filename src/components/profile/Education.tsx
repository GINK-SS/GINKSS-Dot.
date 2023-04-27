import styled from 'styled-components';
import ShadowText from '../common/ShadowText';

interface EducationProps {
  name: string;
  date: string;
  content: string[];
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

const Education = ({ name, date, content, onClick }: EducationProps) => {
  return (
    <Container>
      <Wrapper>
        <ShadowText text={name} size={20} onClick={onClick} />
        <Date>({date})</Date>
      </Wrapper>
      {content.map((data, index) => (
        <Content key={index}>{data}</Content>
      ))}
    </Container>
  );
};

export default Education;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 20px;
    word-break: keep-all;
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Content = styled.p`
  margin-bottom: 15px;

  &::before {
    content: '•';
    margin: 15px;
  }
`;
