import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';

interface InfoItemProps {
  icon: string;
  text: string;
}

const InfoItem = ({ icon, text }: InfoItemProps) => {
  return (
    <Wrapper>
      <ReactIcon icon={icon} size={30} />
      <Title>{text}</Title>
    </Wrapper>
  );
};

export default InfoItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const Title = styled.p`
  margin-left: 15px;
  font-size: 20px;
`;
