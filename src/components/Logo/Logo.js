import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../../assets/images/burger-logo.png';

const StyledLogo = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 0.5em;
  height: ${props => props.height ? props.height : '100%'};
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  & img {
    height: 100%;
  }

  ${props => props.theme.media.medium`
    padding: 0.5em;
    max-width: 100%;
    display: block;
  `};
`;

const logo = ( props ) => {
    return(
        <StyledLogo height={props.height}>
          <img src={burgerLogo} alt="MyBurgerLogo" />
        </StyledLogo>
    );
};

export default logo;
