import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0,0,0, 0.2);
  border-right: 1.1em solid rgba(0,0,0, 0.2);
  border-bottom: 1.1em solid rgba(0,0,0, 0.2);
  border-left: 1.1em solid ${props => props.theme.colors.black};
  transform: translateZ(0);
  animation:
  ${props => props.theme.animations.spinnerAnimation} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

const spinner = ( props ) => {
  return(
    <StyledSpinner>Loading...</StyledSpinner>
  );
};

export default spinner;
