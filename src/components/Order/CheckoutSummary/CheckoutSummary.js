import React from 'react';
import styled from 'styled-components';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const StyledCheckoutSummary = styled.div`
  text-align: center;
  width: 100%;
  margin: auto;

  ${props => props.theme.media.largeSmall`
    width: 500px;
  `}
`;

const StyledBurgerWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const checkoutSummary = ( props ) => {
  return(
    <StyledCheckoutSummary>
      <h1>We hope it tastes well!</h1>
      <StyledBurgerWrapper>
        <Burger ingredients={props.ingredients} />
      </StyledBurgerWrapper>
      <Button
        type="danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button
        type="success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </StyledCheckoutSummary>
  );
}

export default checkoutSummary;
