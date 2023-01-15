import { useContext, useEffect, useMemo, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { ProductContext } from "../contexts/ProductContext";

function Basket() {
  const { products, pickedProducts } = useContext(ProductContext);
  const [visible, setVisible] = useState(false);

  const basket = useMemo(
    () => products.filter(({ id }) => pickedProducts.includes(id)),
    [products, pickedProducts]
  );

  useEffect(() => {
    if (!basket.length) setVisible(false);
  }, [basket]);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="cart-block p-4 bg-white"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <h3 className="text-center">Cart</h3>
      <ListGroup>
        {visible &&
          basket.map((el) => (
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
