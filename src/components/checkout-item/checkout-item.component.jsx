import ItemQuantity from "../item-quantity/item-quantity.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const { deleteItem } = useContext(CartContext);
  const deleteItemFromCart = () => deleteItem(id);

  return (
    <div className="checkout-item-container">
        <div className='checkout-item' style={ {display: "flex", justifyContent: "space-between"} }>
            <img src={imageUrl} alt={`${name}`} style={ {height: "100%", width: "150px"} }/>
            <span>{name}</span>
            <ItemQuantity id={id} quantity={quantity}/>
            <span>{price}</span>
            <span onClick = {deleteItemFromCart}>X</span>
        </div>
        <hr/>
    </div>
  );
};

export default CheckoutItem;
