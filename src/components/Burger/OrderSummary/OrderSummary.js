import React from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';

const StyledList = styled.ul`
  list-style: none;
  padding-left: 1em;
`;

const StyledListItem = styled.li`
  margin-bottom: 0.5em;

  span {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

const orderSummary = ( props ) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return <StyledListItem key={igKey}><span>{igKey}</span>: {props.ingredients[igKey]}</StyledListItem>
  });
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <StyledList>
        {ingredientSummary}
      </StyledList>
      <p>Continue to Checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
