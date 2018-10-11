import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { main } from './styles/Main';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={main}>
        <div>
          <Layout>
            <BurgerBuilder>
              
            </BurgerBuilder>
          </Layout>

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
