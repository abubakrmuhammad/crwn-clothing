import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
