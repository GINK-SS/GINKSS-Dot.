import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';
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
  margin-bottom: 20px;
  word-break: keep-all;

  > p:first-child {
    ${media.small} {
      font-size: 18px;
    }
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  ${media.medium} {
    font-size: 15px;
  }

  ${media.small} {
    font-size: 14px;
  }

  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Content = styled.p`
  margin-bottom: 15px;

  ${media.small} {
    font-size: 15px;
  }

  &::before {
    content: '•';
    margin: 15px;

    ${media.small} {
      margin: 10px;
    }
  }
`;
