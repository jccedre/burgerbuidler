import React from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button type="success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
