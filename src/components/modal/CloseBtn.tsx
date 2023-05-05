import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';
import { media } from '../../utils/mediaQuery';

interface CloseBtnProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
const CloseBtn = ({ onClick }: CloseBtnProps) => {
  return (
    <Button onClick={onClick}>
      <ReactIcon icon="IoCloseCircleOutline" size={50} />
    </Button>
  );
};

export default CloseBtn;

const Button = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.pointLighterColor};
  cursor: pointer;

  ${media.medium} {
    width: 40px;
    height: 40px;
    top: 40px;
    right: 30px;

    > svg {
      width: 35px;
      height: 35px;
    }
  }

  ${media.small} {
    width: 35px;
    height: 35px;
    top: 15px;
    right: 3vw;

    > svg {
      width: 35px;
      height: 35px;
    }
  }

  &:hover {
    transform: rotate(90deg);
    transition: 0.5s;
    transition-property: transform;
  }

  &:not(:hover) {
    transform: rotate(-90deg);
    transition: 0.5s;
    transition-property: transform;
  }
`;
