import ItemQuantity from "../item-quantity/item-quantity.component";
import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const { deleteItem, addItemToCart, decreaseItemQty } =
    useContext(CartContext);

  const addItemQuantity = () => addItemToCart(cartItem);
  const decreaseItemQuantity = () => decreaseItemQty(cartItem);
  const deleteItemFromCart = () => deleteItem(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemQuantity}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItemQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
