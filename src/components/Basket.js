import { useContext, useMemo } from "react";
import { ListGroup } from "react-bootstrap";
import { ProductContext } from "../contexts/ProductContext";

function Basket() {
  const { products, pickedProducts } = useContext(ProductContext);

  const basket = useMemo(
    () => products.filter(({ id }) => pickedProducts.includes(id)),
    [products, pickedProducts]
  );

  return (
    <div className="cart-block p-4 bg-white">
      <h3 className="text-center">Cart</h3>
      <ListGroup>
        {basket.map((el) => (
          <ListGroup.Item key={el.id}>
            {el.brand}
            {el.model}
            (${el.price})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Basket;
