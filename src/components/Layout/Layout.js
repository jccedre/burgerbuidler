import React from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 1em;
`;

const layout = ( props ) => (
  <Aux>
    <div>toolbar, sidedrawer, backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
