import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

interface SubjectProps {
  text: string;
}

const Subject = ({ text }: SubjectProps) => {
  return <Text>{text}</Text>;
};

export default Subject;

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;

  ${media.medium} {
    margin-bottom: 15px;
  }

  ${media.small} {
    margin-bottom: 5vw;
    font-size: 4.5vw;
  }

  &::before {
    content: '♦';
    color: ${({ theme }) => theme.pointColor};
    margin-right: 5px;

    ${media.small} {
      margin-right: 1.5vw;
    }
  }
`;
