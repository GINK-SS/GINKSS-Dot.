import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';
import ShadowText from '../common/ShadowText';

interface PrizesProps {
  name: string;
  date: string;
  prize: string;
  where: string;
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

const Prizes = ({ name, date, prize, where, onClick }: PrizesProps) => {
  return (
    <Container>
      <Wrapper>
        <ShadowText text={name} size={20} onClick={onClick} />
        <Date>({date})</Date>
      </Wrapper>
      <Wrapper>
        <p>{prize}</p>
        <Where>{where}</Where>
      </Wrapper>
    </Container>
  );
};

export default Prizes;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  word-break: keep-all;

  &:first-child {
    ${media.medium} {
      justify-content: space-between;
    }
  }

  > p:first-child {
    ${media.small} {
      font-size: 18px;
    }
  }

  &:last-child {
    > p:first-child {
      ${media.small} {
        font-size: 14px;
      }
    }
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  ${media.medium} {
    font-size: 15px;
  }

  ${media.small} {
    font-size: 13px;
  }

  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;

    ${media.medium} {
      display: none;
    }
  }
`;

const Where = styled.p`
  ${media.small} {
    font-size: 14px;
  }
  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;
  }
`;
