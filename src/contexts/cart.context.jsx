import { createContext, useState, useEffect } from "react";

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
  itemsQty: 0,
  setCartOpen: () => {},
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpened, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsQty, setItemsQty] = useState(0);

  useEffect( () => {
    const itemsCount = cartItems.reduce( (total, cartItem) => total + cartItem.quantity , 0);
    setItemsQty(itemsCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpened,
    setCartOpen,
    cartItems,
    addItemToCart,
    itemsQty,
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
