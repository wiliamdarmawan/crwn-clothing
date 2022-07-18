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

const addCartItemQuantity = (cartItems, id) => {
  const modifiedItem = cartItems.find((cartItem) => cartItem.id === id);
  const modifiedId = modifiedItem.id;

  return cartItems.map((cartItem) =>
    cartItem.id === modifiedId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const decreaseCartItemQuantity = (cartItems, id) => {
  const modifiedItem = cartItems.find((cartItem) => cartItem.id === id);
  if (modifiedItem.quantity <= 1) return [...cartItems];

  const modifiedId = modifiedItem.id;

  return cartItems.map((cartItem) =>
    cartItem.id === modifiedId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

export const CartContext = createContext({
  isCartOpened: false,
  cartItems: [],
  itemsQty: 0,
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

    const itemsTotal = cartItems.reduce(
      (total, cartItem) => total + (cartItem.price * cartItem.quantity),
      0
    );
    setItemsPriceTotal(itemsTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
  };

  const addItemQty = (id) => {
    return setCartItems(addCartItemQuantity(cartItems, id));
  };

  const decreaseItemQty = (id) => {
    return setCartItems(decreaseCartItemQuantity(cartItems, id));
  };

  const deleteItem = (id) => {
    return setCartItems(deleteItemFromCart(cartItems, id));
  };

  const value = {
    isCartOpened,
    cartItems,
    itemsQty,
    itemsPriceTotal,
    setCartOpen,
    addItemToCart,
    addItemQty,
    decreaseItemQty,
    deleteItem,
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
