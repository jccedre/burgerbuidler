import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const StyledNavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 100%;
`;

const navigationItems = ( props ) => {
  return(
      <StyledNavigationItems>
        <NavigationItem link="/" active={'true'}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
      </StyledNavigationItems>
  );
};

export default navigationItems;
