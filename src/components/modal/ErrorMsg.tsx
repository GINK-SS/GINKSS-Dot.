import styled from 'styled-components';

interface ErrorMsgProps {
  isActive: boolean;
}

const ErrorMsg = ({ isActive }: ErrorMsgProps) => {
  return <Message isActive={isActive}>모든 항목 작성 부탁드립니다.</Message>;
};

export default ErrorMsg;

const Message = styled.p<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  margin: 30px 0;
  text-align: center;
`;
