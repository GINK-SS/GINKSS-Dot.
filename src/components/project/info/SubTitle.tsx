import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';
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

  ${media.small} {
    > div:last-child svg {
      width: 20px;
      height: 20px;
    }
    > div:last-child p {
      font-size: 18px;
    }
  }
`;

const Role = styled.p`
  font-weight: 300;

  ${media.medium} {
    font-size: 15px;
  }

  ${media.small} {
    font-size: 4.5vw;
  }
`;

const PeopleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Person = styled.p`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.subTextColor};

  ${media.small} {
    font-size: 3.3vw;
  }

  &:not(:last-child)::after {
    content: 'X';
    margin: 0 3px;
    font-size: 10px;

    ${media.small} {
      margin: 0 1.5px;
      font-size: 2vw;
    }
  }
`;
