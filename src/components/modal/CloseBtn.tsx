import styled from 'styled-components';
import ReactIcon from '../../container/common/ReactIcon';

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
  position: fixed;
  top: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    transform: rotate(90deg);
    transition: 0.5s;
  }

  &:not(:hover) {
    transform: rotate(-90deg);
    transition: 0.5s;
  }
`;
