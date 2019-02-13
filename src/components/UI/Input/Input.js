import React from 'react';
import styled from 'styled-components';

const StyledInputElement = styled.div`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 0.5em 1em;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

const StyledTextarea = styled.textarea`

`;

const StyledSelect = styled.select`

`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const input = ( props ) => {
  let inputElement = null;

  switch(props.inputtype){
    case ('input'):
      inputElement = <StyledInput {...props} />;
      break;
    case ('textarea'):
      inputElement = <StyledTextarea {...props} />;
      break;
    case ('select'):
      inputElement = <StyledSelect {...props} />;
      break;
    default:
      inputElement = <StyledInput {...props} />;

  }
  return (
    <StyledInputElement>
      <StyledLabel></StyledLabel>
      {inputElement}
    </StyledInputElement>
  );
};

export default input;
