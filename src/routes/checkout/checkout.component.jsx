import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, itemsPriceTotal } = useContext(CartContext);

  return (
    <div className="checkout-container" style={{ padding: "50px 200px" }}>
      <div
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <hr/>
      <div className="body">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="footer">
        <span>Total: ${itemsPriceTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
