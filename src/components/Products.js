import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import Basket from "./Basket";
import { GOODS } from "./Goods";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(GOODS);
  }, []);

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

  return (
    <>
      <Container className="mx-auto">
        <Row md={4}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addedToCart={addedToCart}
              removeToCart={removeToCart}
            />
          ))}
        </Row>
        <Basket products={products.filter((product) => product.addedToCart)} />
      </Container>
    </>
  );
}

export default Products;
