import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  decreaseItemQuantity
} from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({
  cartItem,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>

      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  increaseItemQuantity: item => dispatch(addItem(item)),
  decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
