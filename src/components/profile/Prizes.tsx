import styled from 'styled-components';
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

  &:first-child {
    margin-bottom: 8px;
    word-break: keep-all;
  }
`;

const Date = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Where = styled.p`
  &::before {
    content: '-';
    margin-left: 5px;
    margin-right: 5px;
  }
`;
