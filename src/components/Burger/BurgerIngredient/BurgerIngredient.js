import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledBreadBottom from './StyledIngredients/StyledBreadBottom';
import StyledBreadTop from './StyledIngredients/StyledBreadTop';
import StyledSeeds1 from './StyledIngredients/StyledSeeds1';
import StyledSeeds2 from './StyledIngredients/StyledSeeds2';
import StyledMeat from './StyledIngredients/StyledMeat';
import StyledCheese from './StyledIngredients/StyledCheese';
import StyledSalad from './StyledIngredients/StyledSalad';
import StyledBacon from './StyledIngredients/StyledBacon';



class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch(this.props.type) {
      case ('bread-bottom'):
        ingredient = <StyledBreadBottom />;
        break;
      case ('bread-top'):
        ingredient = (
          <StyledBreadTop>
            <StyledSeeds1 />
            <StyledSeeds2 />
          </StyledBreadTop>
        );
        break;
      case ('meat'):
        ingredient = <StyledMeat />;
        break;
      case ('cheese'):
        ingredient = <StyledCheese />;
        break;
      case ('salad'):
        ingredient = <StyledSalad />;
        break;
      case ('bacon'):
        ingredient = <StyledBacon />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient;
