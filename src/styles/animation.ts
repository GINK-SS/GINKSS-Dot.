import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const bottomUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const animation = {
  fadeIn,
  bottomUp,
};

export default animation;
