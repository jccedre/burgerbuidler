import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const StyledBurger = styled.div`
  width: 100%;
  margin: auto;
  max-height: 600px;
  height: 100vh;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  ${props => props.theme.media.largeSmall`
    max-width: 500px;
  `}
`;

const burger = ( props ) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (transformedIngredients.length === 0) {
   transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <StyledBurger>
      <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </StyledBurger>
  );
}

export default burger;
