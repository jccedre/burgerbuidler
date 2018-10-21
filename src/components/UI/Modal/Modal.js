import React, { Component } from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: ${props => props.theme.colors.white};
  width: 70%;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 1px 1px 1px ${props => props.theme.colors.black};
  padding: 1em;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${props => props.show ? '1' : '0'};

  ${props => props.theme.media.largeSmall`
    max-width: 500px;
    width: 100%;
    left: calc(50% - 250px);
  `}
`;

const StyledCloseIcon = styled.div`
  border-radius: 30px;
  border: 2px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  right: -1em;
  top: -1em;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s;


  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.gray};
  }

  &::before {
    content: '';
    height: 80%;
    background-color: ${props => props.theme.colors.black};
    width: 2px;
    transform: rotate(45deg);
    position: absolute;
    left: 50%;
    margin-top: 10%;
  }

  &::after {
    content: '';
    height: 80%;
    background-color: ${props => props.theme.colors.black};
    width: 2px;
    transform: rotate(-45deg);
    position: absolute;
    left: 50%;
    margin-top: 10%;
  }
`;

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('Modal Will Update');
  }

  render() {
    return (
      <Aux>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
        <StyledModal show={this.props.show}>
          <StyledCloseIcon onClick={this.props.modalClosed}/>
          {this.props.children}
        </StyledModal>
      </Aux>

    );
  }
}

export default Modal;
