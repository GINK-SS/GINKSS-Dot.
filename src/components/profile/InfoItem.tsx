import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';
import ShadowText from '../common/ShadowText';

interface InfoItemProps {
  icon: string;
  text: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

const InfoItem = ({ icon, text, handleClick }: InfoItemProps) => {
  return (
    <Wrapper>
      <ReactIcon icon={icon} size={35} />
      <Title>
        <ShadowText text={text} isItalic onClick={handleClick} />
      </Title>
    </Wrapper>
  );
};

export default InfoItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 15px;
`;
