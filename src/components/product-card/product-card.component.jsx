import "./product-card.styles.jsx";

import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={handleAddToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
