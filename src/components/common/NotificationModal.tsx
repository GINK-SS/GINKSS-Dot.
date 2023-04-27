import styled, { keyframes } from 'styled-components';

interface NotificationModalProps {
  message: string;
}

const NotificationModal = ({ message }: NotificationModalProps) => (
  <Container>
    <Text>{message}</Text>
  </Container>
);

export default NotificationModal;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }

  5% {
    opacity: 0;
  }

  10% {
    opacity: 1;
    transform: translateY(150%);
  }

  75% {
    opacity: 1;
    transform: translateY(150%);
  }
  
  100% {
    opacity: 0;
    transform: translateY(200%);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 150;
  top: -3.5rem;
  left: 0;
  right: 0;
  animation: ${fadeInOut} 1.5s linear;
`;

const Text = styled.p`
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.pointColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.bgColor};
`;
