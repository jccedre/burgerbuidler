import { keyframes } from 'styled-components';

const enable = keyframes`
  0% {
    transform: scale(1);
  }

  60% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animations = {
  enable: enable,
  spinnerAnimation: spinnerAnimation,
}

export default animations;
