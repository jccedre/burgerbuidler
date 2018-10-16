import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: ${props => props.theme.colors.white};
  padding: 2em 1em;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;


  ${props => props.theme.media.largeSmall`
    display: none;
  `}

    ${props => {
      if(props.status === 'open') {
        return 'transform: translateX(0)';
      } else if (props.status === 'close') {
        return 'transform: translateX(-100%)';
      }}}
`;

const sideDrawer = ( props ) => {
  return(
      <StyledSideDrawer status={props.status}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </StyledSideDrawer>
  );
};

export default sideDrawer;
