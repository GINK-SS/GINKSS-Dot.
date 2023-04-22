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
  border-radius: 15px;
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
    background-color: ${({ theme }) => theme.hoverBgColor};
    cursor: pointer;
  }
`;

const Title = styled.p`
  margin-left: 15px;
  font-size: 20px;
`;
