import styled from 'styled-components';

interface MessageProps {
  isActive: boolean;
  text: string;
}

const Message = ({ isActive, text }: MessageProps) => {
  return <Content isActive={isActive}>{text}</Content>;
};

export default Message;

const Content = styled.p<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  margin: 30px 0;
  text-align: center;
  font-size: 18px;
`;
