import React from 'react';
import styled from 'styled-components';

const StyledBuildControl = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

const StyledLabel = styled.div`
  padding: 0.5em;
  font-weight: bold;
  width: 80px;
`;

const StyledButton = styled.button`
  display: block;
  font: inherit;
  padding: 1em;
  margin: 0 1em;
  width: 80px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.type === 'less') ? props.theme.colors.ruby : props.theme.colors.darkRaspberry};
  color: ${props => props.theme.colors.white};

  &:disabled {
    background-color: ${props => props.theme.colors.darkRaspberryActive};
    color: #ccc;
    cursor: default;
  }

  &:hover,
  &:focus {
    background-color: ${props => (props.type === 'less') ? props.theme.colors.rubyHover : props.theme.colors.darkRaspberryHover};

    &:disabled {
      cursor: not-allowed;
      background-color: ${props => props.theme.colors.darkRaspberryActive};
    }
  }

  &:active {
      background-color: ${props => (props.type === 'less') ? props.theme.colors.rubyActive : props.theme.colors.darkRaspberryActive};
  }
`;

const buildControl = ( props ) => {
  return (
    <StyledBuildControl>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledButton disabled type={'less'}>Less</StyledButton>
      <StyledButton type={'more'}>More</StyledButton>
    </StyledBuildControl>
  );
}

export default buildControl;
