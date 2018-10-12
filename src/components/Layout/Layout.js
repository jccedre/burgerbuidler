import React from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 1em;
  padding: 1em;
`;

const layout = ( props ) => (
  <Aux>
    <div>toolbar, sidedrawer, backdrop</div>
    <StyledMain>
      {props.children}
    </StyledMain>
  </Aux>
);

export default layout;
