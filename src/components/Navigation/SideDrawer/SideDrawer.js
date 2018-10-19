import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: ${props => props.theme.colors.sapphireBlue};
  padding: 2em 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;


  ${props => props.theme.media.medium`
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
  let status = 'close';

  if (props.open) {
    status = 'open';
  } else {
    status = 'close';
  }
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <StyledSideDrawer status={status}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </StyledSideDrawer>
    </Aux>
  );
};

export default sideDrawer;
