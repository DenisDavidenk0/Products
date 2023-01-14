import { ListGroup } from "react-bootstrap";

function Basket({ products }) {
  return (
    <div className="cart-block p-4 bg-white">
      <h3 className="text-center">Cart</h3>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            {product.brand}
            {product.model}
            (${product.price})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Basket;
