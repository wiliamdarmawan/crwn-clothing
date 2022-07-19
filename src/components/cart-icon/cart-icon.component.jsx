import "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpened, setCartOpen, itemsQty } = useContext(CartContext);

  const toggleCartOpen = () => setCartOpen(!isCartOpened);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{itemsQty}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
