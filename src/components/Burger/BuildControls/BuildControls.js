import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const StyledBuildControls = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.yellowOrange};
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 1em 0;
`;

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = ( props ) => {
  return (
    <StyledBuildControls>
      {controls.map(control => (
        <BuildControl key={control.label} label={control.label} />
      ))}
    </StyledBuildControls>
  )
};

export default buildControls;
