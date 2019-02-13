import React, { Component } from 'react';
import styled from 'styled-components';

import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const StyledOrders = styled.div`

`;

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/orders.json')
    .then( response => {
      console.log(response.data);
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({
        ...response.data[key],
        id: key
        });
      }
      this.setState({
        loading: false,
        orders: fetchedOrders
      });
    }
  )
  .catch( response => {
    this.setState({loading: false});
  });
  }

  render() {
    return(
      <StyledOrders>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </StyledOrders>
    );
  }
}

export default withErrorHandler(Orders, axios);
