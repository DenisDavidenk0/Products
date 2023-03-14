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
          <div className="text-center">
            <Card.Img
              className="img"
              src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
            />
            <h4 className="txtRoboto">Cart is empty</h4>
            <h6>But it's never too late to fix it :)</h6>
          </div>
        )}
      </Container>
    </>
  );
}

export default StaticBasket;
