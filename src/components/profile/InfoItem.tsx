import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';

interface InfoItemProps {
  icon: string;
  text: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

const InfoItem = ({ icon, text, handleClick }: InfoItemProps) => {
  return (
    <Wrapper onClick={handleClick}>
      <ReactIcon icon={icon} size={30} />
      <Title>{text}</Title>
    </Wrapper>
  );
};

export default InfoItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.bgColor};
  border-radius: 5px;
  transition-property: border, color, background-color;
  transition-duration: ${({ theme }) => theme.transDuration};

  &:hover {
    border: 1px solid ${({ theme }) => theme.boxHoverBorderColor};
    color: ${({ theme }) => theme.calloutTextColor};
    background-color: ${({ theme }) => theme.boxHoverBgColor};
    cursor: pointer;
  }
`;

const Title = styled.p`
  margin-left: 15px;
  font-size: 20px;
`;
