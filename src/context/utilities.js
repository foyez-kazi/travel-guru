export function addItemToCart(cartItems, cartItemToAdd) {
  const existingItem = cartItems.find((item) => item.key === cartItemToAdd.key)

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.key === cartItemToAdd.key
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export function removeItemFromCart(cartItems, cartItemToRemoveKey) {
  return cartItems.filter((item) => item.key !== cartItemToRemoveKey)
}
