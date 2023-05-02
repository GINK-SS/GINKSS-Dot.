import styled from 'styled-components';

interface TechStackProps {
  techStack: string[];
}

const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <Container>
      {techStack.map((tech, index) => (
        <Tech key={index} isMyTech={tech[0] === '!'}>
          {tech[0] === '!' ? tech.slice(1) : tech}
        </Tech>
      ))}
    </Container>
  );
};

export default TechStack;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Tech = styled.p<{ isMyTech: boolean }>`
  margin-bottom: 5px;
  font-weight: ${({ isMyTech }) => (isMyTech ? '500' : '400')};
  color: ${({ theme, isMyTech }) =>
    isMyTech ? theme.subPointColor : theme.subTextColor};
`;
