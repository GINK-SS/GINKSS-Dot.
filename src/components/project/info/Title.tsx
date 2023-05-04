import styled from 'styled-components';
import ReactIcon from '../../../container/common/ReactIcon';
import { media } from '../../../utils/mediaQuery';

interface TitleProps {
  text: string;
  onBtnClick: React.MouseEventHandler<HTMLDivElement>;
}

const Title = ({ text, onBtnClick }: TitleProps) => {
  return (
    <Wrapper>
      <Content>{text}</Content>
      <Button onClick={onBtnClick}>
        <ReactIcon icon="IoCloseCircleOutline" size={35} />
      </Button>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.p`
  margin-bottom: 15px;
  font-size: 50px;
  font-weight: 700;
  cursor: default;
  color: ${({ theme }) => theme.pointDarkerColor};

  ${media.medium} {
    margin-bottom: 10px;
    font-size: 45px;
  }

  ${media.small} {
    margin-bottom: 3vw;
    font-size: 12vw;
  }
`;

const Button = styled.div`
  display: none;
  color: ${({ theme }) => theme.pointColor};
  cursor: pointer;

  ${media.small} {
    display: block;
  }
`;
