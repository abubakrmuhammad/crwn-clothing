export function addItemToCart(cartItems, newItem) {
  const itemExists = cartItems.some(item => item.id === newItem.id);

  if (itemExists)
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...newItem, quantity: 1 }];
}
