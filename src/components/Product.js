import { useContext, useMemo } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { ProductContext } from "../contexts/ProductContext";

function Product({ product }) {
  const { pickedProducts, toogleProduct } = useContext(ProductContext);

  const isPicked = useMemo(
    () => pickedProducts.includes(product.id),
    [pickedProducts, product]
  );

  return (
    <Col xs={12} sm={6} mb={4} lg={3} className={"mt-3 d-flex"}>
      <Card>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
          <Card.Title>
            {product.brand} {product.model}
          </Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            variant={isPicked ? "success" : "danger"}
            onClick={() => toogleProduct(product.id)}
          >
            {isPicked ? "Remove" : "Add"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
