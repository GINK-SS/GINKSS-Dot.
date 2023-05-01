import styled from 'styled-components';
import GithubShortCut from './GithubShortCut';

interface SubTitleProps {
  role: string;
  people: string[];
  github: string;
}

const SubTitle = ({ role, people, github }: SubTitleProps) => {
  return (
    <FlexBox>
      <div>
        <Role>{role}</Role>
        <PeopleBox>
          {people.map((person, index) => (
            <Person key={index}>{person}</Person>
          ))}
        </PeopleBox>
      </div>
      <GithubShortCut url={github} />
    </FlexBox>
  );
};

export default SubTitle;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Role = styled.p`
  font-weight: 300;
`;

const PeopleBox = styled.div`
  display: flex;
`;

const Person = styled.p`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.subTextColor};

  &:not(:last-child)::after {
    content: 'X';
    margin: 0 3px;
    font-size: 10px;
  }
`;
