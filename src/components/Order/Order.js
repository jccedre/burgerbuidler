import React from 'react';
import styled from 'styled-components';

const StyledOrder = styled.div`
    width: 100%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1em;
    margin: 1em auto;
    box-sizing: border-box;;
`;

const StyledIngredient = styled.span`
    text-transform: capitalize;
    display: inline-block;
    margin: 0 0.5em;
    border: 1px solid #ccc;
    padding: 0.3em;
`;

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <StyledIngredient key={ig.name}>{ig.name} ({ig.amount})</StyledIngredient>
  })
  return(
    <StyledOrder>
      {}
      <p>Ingredients: {ingredientOutput}</p>
      <p> Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </StyledOrder>
  );
}

export default order;
