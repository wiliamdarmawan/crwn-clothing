import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ItemQuantity = ({ id, quantity }) => {
  const { addItemQty, decreaseItemQty } = useContext(CartContext);

  const addItemQuantity = () => addItemQty(id);
  const decreaseItemQuantity = () => decreaseItemQty(id);

  return (
    <div>
      <span onClick={decreaseItemQuantity}>{`<`}</span>
      <span> {quantity} </span>
      <span onClick={addItemQuantity}>{`>`}</span>
    </div>
  );
};

export default ItemQuantity;
