import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const StyledNavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: column;


  ${props => props.theme.media.medium`
    flex-flow: row wrap;
  `};
`;

const navigationItems = ( props ) => {
  return(
      <StyledNavigationItems>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
      </StyledNavigationItems>
  );
};

export default navigationItems;
