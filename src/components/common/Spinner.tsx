import styled from 'styled-components';

interface SpinnerProps {
  isActive: boolean;
  size?: number;
}

/**
 * @params isActive: 활성화 여부, size?: px크기 (숫자)
 */
const Spinner = ({ isActive, size = 48 }: SpinnerProps) => {
  return (
    <Overlay isActive={isActive}>
      <Container>
        <Loader size={size} />
      </Container>
    </Overlay>
  );
};

export default Spinner;

const Overlay = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.span<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border: 2px solid ${({ theme }) => theme.textColor};
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: rotation 2s ease-in-out infinite;
  }

  &::after {
    border-color: #ff3d00;
    animation-delay: 1s;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
