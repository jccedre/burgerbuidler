import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({
  type: props => props.type || 'primary',
})`
background-color: ${props => {
  if (props.type === 'success') {
     return props.theme.colors.green;
  } else if (props.type === 'danger') {
    return props.theme.colors.ruby;
  } else {
    return props.theme.colors.azure;
  }
  }};
outline: none;
cursor: pointer;
color: ${props => props.theme.colors.white};
padding: 0.5em 1em;
border: none;
font-size: 1.2em;
margin: 0.5em 1em;
box-shadow: 2px 2px 2px ${props => {
  if (props.type === 'success') {
     return props.theme.colors.greenActive;
  } else if (props.type === 'danger') {
    return props.theme.colors.rubyActive;
  } else {
    return props.theme.colors.azureActive;
  }
  }};
transition: background 0.3s;

&:hover,
&:focus {
  background-color: ${props => {
    if (props.type === 'success') {
       return props.theme.colors.greenHover;
    } else if (props.type === 'danger') {
      return props.theme.colors.rubyHover;
    } else {
      return props.theme.colors.azureHover;
    }
  }};
}

&:active {
  background-color: ${props => {
    if (props.type === 'success') {
       return props.theme.colors.greenActive;
    } else if (props.type === 'danger') {
      return props.theme.colors.rubyActive;
    } else {
      return props.theme.colors.azureActive;
    }
  }};
}

&:disabled {
  background-color: ${props => {
    if (props.type === 'success') {
       return props.theme.colors.greenDisabled;
    } else if (props.type === 'danger') {
      return props.theme.colors.rubyDisabled;
    } else {
      return props.theme.colors.azureDisabled;
    }
  }};
  cursor: not-allowed;
}

&:not(:disabled) {
  animation: ${props => props.theme.animations.enable} 0.3s linear;
}
`;

const button = ( props ) => {
  return (
    <StyledButton
      onClick={props.clicked}
      disabled={props.disabled}
      type={props.type}>
      {props.children}
    </StyledButton>
  );
}

export default button;
