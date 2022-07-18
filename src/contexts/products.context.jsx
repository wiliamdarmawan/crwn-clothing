import { createContext, useState, useEffect } from "react";
import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  });

  return (
    <ProductContext.Provider value={value}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};
