import styled from 'styled-components';

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
`;

const Content = styled.p`
  margin-bottom: 15px;

  &::before {
    content: '•';
    margin: 15px;
  }
`;
