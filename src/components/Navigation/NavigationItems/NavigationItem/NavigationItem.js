import React from 'react';
import styled from 'styled-components';

const StyledNavigationItem = styled.li`
  margin: 0.5em 0;
  box-sizing: border-box;
  width: 100%;
  display: block;

  ${props => props.theme.media.medium`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  `};
`;

const StyledAnchor = styled.a`
  color: ${props => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;
  display: block;
  background-color: ${props => props.active ? props.theme.colors.azureDisabled : '' };
  transition: all 0.3s;
  padding: 1em;
  z-index: 100;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${props => props.active ? props.theme.colors.ruby : props.theme.colors.yellowOrange};
  }

  &:active {
    background-color: ${props => props.active ? props.theme.colors.rubyActive : props.theme.colors.yellowOrangeActive};
  }

  ${props => props.theme.media.medium`
    color: ${props => props.theme.colors.white};
    height: 100%;
    padding: 1em;
    border-bottom: 4px solid ${props => props.active ? props.theme.colors.green : 'transparent'};
    background-color: ${props => props.active ? props.theme.colors.azureDisabled : '' };
  `};
`;

const navigationItem = ( props ) => {
  return(
    <StyledNavigationItem>
      <StyledAnchor
        href={props.link}
        active={props.active}>
        {props.children}</StyledAnchor>
    </StyledNavigationItem>
  );
};

export default navigationItem;
