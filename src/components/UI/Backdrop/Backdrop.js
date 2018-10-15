import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.colors.backdrop};
`;

const backdrop = ( props ) => {
  return (
    props.show ? <StyledBackdrop onClick={props.clicked}></StyledBackdrop> : null
  );
};

export default backdrop;
