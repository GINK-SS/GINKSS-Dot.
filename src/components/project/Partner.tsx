import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface PartnerProps {
  people: string[];
  isRight: boolean;
}

const Partner = ({ people, isRight }: PartnerProps) => {
  return (
    <Wrapper isRight={isRight}>
      {people.map((person, index) => (
        <Person key={index} isRight={isRight}>
          {person}
        </Person>
      ))}
    </Wrapper>
  );
};

export default Partner;

const Wrapper = styled.div<{ isRight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')};
  margin-right: ${({ isRight }) => (isRight ? '3px' : '0')};

  ${media.medium} {
    align-items: flex-start;
    margin-right: 0;
  }
`;

const Person = styled.p<{ isRight: boolean }>`
  font-size: 11px;
  font-weight: 300;

  ${media.small} {
    font-size: 2vw;
  }

  &:not(:last-child)::after {
    content: 'X';
    display: block;
    margin: 2px 0;
    font-size: 10px;
    font-weight: 200;
    text-align: ${({ isRight }) => (isRight ? 'right' : 'left')};

    ${media.medium} {
      text-align: left;
    }

    ${media.small} {
      margin: 0;
      font-size: 2vw;
    }
  }
`;
