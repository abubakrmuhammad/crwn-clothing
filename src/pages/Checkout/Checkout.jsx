import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotalCost
} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss';

const Checkout = ({ cartItems, totalCost }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {['Product', 'Description', 'Price', 'Quantity', 'Remove'].map(text => (
        <div key={text} className="header-block">
          {text}
        </div>
      ))}
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}

    <div className="total">TOTAL: ${totalCost}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selectCartTotalCost
});

export default connect(mapStateToProps)(Checkout);
