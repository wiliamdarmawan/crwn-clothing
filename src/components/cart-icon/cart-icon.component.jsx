import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpened, setCartOpen, itemsQty } = useContext(CartContext);

  const toggleCartOpen = () => setCartOpen(!isCartOpened);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsQty}</span>
    </div>
  );
};

export default CartIcon;
