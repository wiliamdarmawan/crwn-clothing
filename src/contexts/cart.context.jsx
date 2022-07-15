import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpened: false,
  cartItems: [],
  setCartOpen: () => {},
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpened, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = ( productToAdd ) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = {
    isCartOpened,
    setCartOpen,
    cartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
