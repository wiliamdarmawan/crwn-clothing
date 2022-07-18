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

const decreaseCartItemQuantity = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToDecrease.id
  );
  if (existingCartItem.quantity <= 1)
    return deleteItemFromCart(cartItems, itemToDecrease);

  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItemFromCart = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

export const CartContext = createContext({
  isCartOpened: false,
  cartItems: [],
  itemsQty: 0,
  itemsPriceTotal: 0,
  setCartOpen: () => {},
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpened, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsQty, setItemsQty] = useState(0);
  const [itemsPriceTotal, setItemsPriceTotal] = useState(0);

  useEffect(() => {
    const itemsCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsQty(itemsCount);
  }, [cartItems]);

  useEffect(() => {
    const itemsTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setItemsPriceTotal(itemsTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemQty = (itemToDecrease) => {
    return setCartItems(decreaseCartItemQuantity(cartItems, itemToDecrease));
  };

  const deleteItem = (itemToDelete) => {
    return setCartItems(deleteItemFromCart(cartItems, itemToDelete));
  };

  const value = {
    isCartOpened,
    cartItems,
    itemsQty,
    itemsPriceTotal,
    setCartOpen,
    addItemToCart,
    decreaseItemQty,
    deleteItem,
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
