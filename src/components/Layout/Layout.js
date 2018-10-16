import React from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const StyledMain = styled.main`
  margin-top: calc(1em + 56px);
  padding: 1em;
`;

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <StyledMain>
      {props.children}
    </StyledMain>
  </Aux>
);

export default layout;
