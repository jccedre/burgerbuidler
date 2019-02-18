import React from 'react';
import styled from 'styled-components';

const StyledInputElement = styled.div`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${props => props.validation ? '#ccc' : 'red'};
  background-color: ${props => props.validation ? 'white' : '#c97589'};
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


  switch(props.elementType) {
    case ('input'):
      inputElement = <StyledInput
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        validation={props.validation} />;
      break;
    case ('textarea'):
      inputElement = <StyledTextarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        validation={props.validation} />;
      break;
    case ('select'):
      inputElement = (
        <StyledSelect
          value={props.value}
          onChange={props.changed}
          validation={props.validation} >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </StyledSelect>
        );
      break;
    default:
      inputElement = <StyledInput
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        validation={props.validation} />;
  }
  return (
    <StyledInputElement>
      <StyledLabel></StyledLabel>
      {inputElement}
    </StyledInputElement>
  );
};

export default input;
