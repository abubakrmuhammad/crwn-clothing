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

export function removeItemFromCart(cartItems, itemToRemove) {
  const cartItem = cartItems.find(item => item.id === itemToRemove.id);

  if (cartItem.quantity === 1)
    return cartItems.filter(item => item.id !== itemToRemove.id);

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: itemToRemove.quantity - 1 }
      : item
  );
}
