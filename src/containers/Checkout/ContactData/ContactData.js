import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

const StyledContactData = styled.div`
  margin: 1em auto;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  padding: 1em;
  box-sizing: border-box;

  input {
    display: block;
  }

  ${props => props.theme.media.largeSmall`
    width: 80%;
  `}
`;

class ContactData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: {
        street: '',
        postalCode: '',
      },
      loading: false,
    }
  }

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Jean Carlos Cedre',
        address: {
          street: 'Web at Posture Ave',
          zipCode: '12345',
          country: 'USA',

        },
        email: 'web@web.com',
      },
      deliveryMethod: 'fastest',
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    }).catch(error => {
      this.setState({loading: false});
    });
  }

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Input inputtype="input" type="text" name="email" placeholder="Your Mail" />
        <Input inputtype="input" type="text" name="street" placeholder="Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
        <Button
          type="success"
      clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return(
      <StyledContactData>
        <h4>Enter your Contact Data</h4>
        {form}
      </StyledContactData>
    );
  }
}

export default ContactData;
