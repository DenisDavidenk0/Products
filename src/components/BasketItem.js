import { useContext, useState } from "react";
import { ListGroup, Badge, Button, Card } from "react-bootstrap";
import { BasketContext } from "../context/BasketContext";
import ProductRemuver from "./ProductRemuver";

function BasketItem({ product }) {
  const { removeToCart, addCount, reduceCount } = useContext(BasketContext);
  const [productRemuver, setProductRemuver] = useState(false);
  function handleClick() {
    setProductRemuver(!productRemuver);
  }
  return (
    <>
      <ListGroup.Item key={product.id}>
        {"  "}
        <div className="d-flex justify-content-between">
          <Card.Img className="imgBasket" src={product.imgSrc} />

          <h4 className="txtMontserrat my-3">
            <div>{product.brand}</div>
            {product.model}
          </h4>
          <h5 className="txtMontserrat">${product.price.toFixed(2)}</h5>
          <div>
            <Button
              variant="danger"
              className={"mx-2 p-2 cursor-pointer text-white"}
              disabled={product.count === 1}
              onClick={() => reduceCount(product.id)}
            >
              -
            </Button>
            {product.count}
            <Button
              variant="success"
              className={"mx-2 p-2 cursor-pointer text-white"}
              onClick={() => addCount(product.id)}
            >
              +
            </Button>{" "}
            {productRemuver ? <ProductRemuver product={product.id} /> : null}
            {productRemuver ? null : (
              <Button onClick={() => handleClick()}>Open</Button>
            )}
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
}

export default BasketItem;
