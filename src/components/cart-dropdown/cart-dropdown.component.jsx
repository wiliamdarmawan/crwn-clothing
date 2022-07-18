import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems, deleteItem} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('checkout');

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return(
              <CartItem key={cartItem.id} cartItem={cartItem}/>
          )
        }
        )}
      </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
