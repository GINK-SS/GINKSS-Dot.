import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface SkillsProps {
  name: string;
  content: string[];
}

const Skills = ({ name, content }: SkillsProps) => {
  return (
    <Container>
      <Name>{name}</Name>
      {content.map((data, index) => (
        <Content key={index}>{data}</Content>
      ))}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Name = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;

  ${media.small} {
    margin-bottom: 16px;
    font-size: 18px;
  }
`;

const Content = styled.p`
  margin-bottom: 15px;

  &::before {
    content: '•';
    margin: 15px;

    ${media.small} {
      margin: 0 10px;
    }
  }
`;
