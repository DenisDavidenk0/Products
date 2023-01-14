import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import Basket from "./Basket";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Products() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Container className="mx-auto">
        <Row md={4}>
          {products.map((product, id) => (
            <Product key={"product" + id} product={product} />
          ))}
        </Row>
        <Basket />
      </Container>
    </>
  );
}

export default Products;
