import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';
import { media } from '../../utils/mediaQuery';
import ShadowText from '../common/ShadowText';

interface InfoItemProps {
  icon: string;
  text: string;
  href?: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

const InfoItem = ({ icon, text, href, handleClick }: InfoItemProps) => {
  return (
    <Wrapper>
      <ReactIcon icon={icon} size={35} />
      {href ? (
        <Link to={href} target="_blank">
          <Title>
            <ShadowText text={text} isItalic />
          </Title>
        </Link>
      ) : (
        <Title>
          <ShadowText text={text} isItalic onClick={handleClick} />
        </Title>
      )}
    </Wrapper>
  );
};

export default InfoItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.medium} {
    > svg {
      width: 27px;
      height: 27px;
    }
  }

  ${media.small} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Title = styled.div`
  margin-left: 15px;

  ${media.medium} {
    margin-left: 10px;

    p {
      font-size: min(20px, 7vw);
    }
  }
`;
