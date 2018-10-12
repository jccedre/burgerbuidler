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

  

  ${props => props.theme.media.large`
    width: 700px;
    height: 600px;
  `}
`;

const burger = ( props ) => {
  return (
    <StyledBurger>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </StyledBurger>
  );
}

export default burger;
