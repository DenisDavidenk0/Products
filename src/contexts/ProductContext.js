import { createContext, useEffect, useState } from "react";
import { GOODS } from "../components/Goods";

export const ProductContext = createContext({
  products: undefined,
  pickedProducts: undefined,

  toogleProduct: () => undefined,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(GOODS);
  let [pickedProducts, setPickedProducts] = useState([]);

  const toogleProduct = (id) => {
    if (!pickedProducts.includes(id)) {
      pickedProducts.push(id);
    } else {
      pickedProducts = pickedProducts.filter((el) => el !== id);
    }

    setPickedProducts([...pickedProducts]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        pickedProducts,
        toogleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
