import React from "react";
import { useState } from "react";
import { GOODS } from "../components/Goods";

export const BasketContext = React.createContext();
function BasketProvider({ children }) {
  const [products, setProducts] = useState(GOODS);

  function hasProduct() {
    return !!products.filter((product) => product.addedToCart === true).length;
  }
  function addedToCart(id) {
    setProducts(
      products.map((product) => ({
        ...product,
        addedToCart: product.id === id ? true : product.addedToCart,
      }))
    );
  }
  function removeToCart(id) {
    setProducts(
      products.map((product) => ({
        ...product,
        addedToCart: product.id === id ? false : product.addedToCart,
      }))
    );
  }
  const addCount = (id) => {
    setProducts(
      products.map((product) => ({
        ...product,
        count: product.id === id ? product.count + 1 : product.count,
      }))
    );
  };
  const reduceCount = (id) => {
    setProducts(
      products.map((product) => ({
        ...product,
        count: product.id === id ? product.count - 1 : product.count,
      }))
    );
  };

  return (
    <BasketContext.Provider
      value={{
        products,
        setProducts,
        addedToCart,
        removeToCart,
        addCount,
        reduceCount,
        hasProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
