import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.sapphireBlue};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  box-sizing: border-box;
  z-index: 90;

  & nav {
    height: 100%;
  }
`;

const toolbar = ( props ) => {
  return(
      <StyledToolbar>
        <div>MENU</div>
        <Logo height="80%"/>
        <nav>
          <NavigationItems />
        </nav>
      </StyledToolbar>
  );
};

export default toolbar;
