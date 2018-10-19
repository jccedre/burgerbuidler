import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const StyledMain = styled.main`
  margin-top: calc(1em + 56px);
  padding: 1em;
`;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false,
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }


  render() {
      return(
        <Aux>
          <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
          <SideDrawer closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer} />
          <StyledMain>
            {this.props.children}
          </StyledMain>
        </Aux>
      );
  }
}

export default Layout;
