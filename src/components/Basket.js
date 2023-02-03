import { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import BasketItem from "./BasketItem";
import Total from "./Total";

// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Basket({ products }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      products.reduce((acc, product) => acc + product.price * product.count, 0)
    );
  }, [products]);
  return (
    <Container>
      <h3 className="text-center">Bag</h3>
      <ListGroup>
        {products.map((product) => (
          <BasketItem product={product} key={product.id} />
        ))}
      </ListGroup>
      <div className="text-end">
        <h4>
          <Total className={"p-3"} total={total.toFixed(2)} />
        </h4>
        <Button variant="success">Buy</Button>
      </div>
    </Container>
  );
}

export default Basket;
