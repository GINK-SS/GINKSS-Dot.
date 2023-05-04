import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

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

  ${media.small} {
    margin-bottom: 5vw;
  }
`;

const Tech = styled.p<{ isMyTech: boolean }>`
  margin-bottom: 5px;
  font-weight: ${({ isMyTech }) => (isMyTech ? '500' : '400')};
  color: ${({ theme, isMyTech }) =>
    isMyTech ? theme.subPointColor : theme.subTextColor};

  ${media.medium} {
    font-size: 15px;
  }

  ${media.small} {
    margin-bottom: 1.5vw;
    font-size: 4vw;
  }
`;
