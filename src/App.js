import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { main } from './styles/Main';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={main}>
        <Layout>
          <Switch>
            <Route path="/checkout"  component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
