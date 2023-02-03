import { Container, Row } from "react-bootstrap";
import Product from "./Product";

import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

function Products() {
  const { products, removeToCart } = useContext(BasketContext);

  return (
    <>
      <Container className="mx-auto">
        <Row>
          <Outlet context={products} />
        </Row>

        <Row md={4}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              removeToCart={() => removeToCart(product.id)}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
