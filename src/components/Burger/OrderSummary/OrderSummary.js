import React, { Component } from 'react';
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

class OrderSummary extends Component {
  // This could be a functional component. Setup this way to debug.
  componentWillUpdate() {
    console.log('OrderSummary will update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return <StyledListItem key={igKey}><span>{igKey}</span>: {this.props.ingredients[igKey]}</StyledListItem>
    });
    return(
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <StyledList>
          {ingredientSummary}
        </StyledList>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button type="danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button type="success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
