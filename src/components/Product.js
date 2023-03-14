import { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";

function Product({ product }) {
  const { addedToCart, removeToCart } = useContext(BasketContext);

  function handleClick(e) {
    e.preventDefault();
    product.addedToCart ? removeToCart(product.id) : addedToCart(product.id);
  }
  return (
    <Col xs={12} sm={6} mb={4} lg={3} className={"mt-3 d-flex"}>
      <Link className="navbar-brand" to={`/products/${product.id}`}>
        <Card>
          <Card.Img variant="top" src={product.imgSrc} />
          <Card.Body>
            <Card.Title>
              <div className="txtMontserrat ">{product.brand}</div>
              <div className="txtMontserrat ">{product.model}</div>
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
      </Link>
    </Col>
  );
}

export default Product;
