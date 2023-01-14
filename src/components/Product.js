import { Card, Col, Button } from "react-bootstrap";

function Product({ product, addedToCart, removeToCart }) {
  function handleClick() {
    product.addedToCart ? removeToCart(product.id) : addedToCart(product.id);
  }
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
            variant={product.addedToCart ? "success" : "danger"}
            onClick={handleClick}
          >
            {product.addedToCart ? "Remove" : "Add"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
