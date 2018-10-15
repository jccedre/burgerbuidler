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

const animations = {
  enable: enable,
}

export default animations;
