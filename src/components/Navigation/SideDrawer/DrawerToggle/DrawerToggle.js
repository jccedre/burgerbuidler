import React from 'react';
import styled from 'styled-components';

const StyledDrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;


  & div {
    width: 90%;
    height: 3px;
    background-color: white;
    transition: background 0.3s;
  }


  &:hover,
  &:focus {
    & div {
      background-color: ${props => props.theme.colors.ruby};
    }
  }

  &:active {
    & div {
      background-color: ${props => props.theme.colors.rubyHover};
    }
  }

  ${props => props.theme.media.medium`
    display: none;
  `};
`;



const drawerToggle = ( props ) => {
  return(
    <StyledDrawerToggle onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </StyledDrawerToggle>
  );
};

export default drawerToggle;
