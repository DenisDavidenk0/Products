import { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { BasketContext } from "../../context/BasketContext";
import Basket from "../Basket";

function StaticBasket() {
  const { products, hasProduct } = useContext(BasketContext);

  return (
    <>
      <Container>
        {hasProduct() ? (
          <Basket
            products={products.filter((product) => product.addedToCart)}
          />
        ) : (
          <Card.Img
            className="img"
            src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
          />
        )}
      </Container>
    </>
  );
}

export default StaticBasket;
