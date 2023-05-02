import styled from 'styled-components';

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

  &::before {
    content: '♦';
    color: ${({ theme }) => theme.pointColor};
    margin-right: 5px;
  }
`;
