import { useContext, useEffect, useState } from "react";
import { Container, Card, Col, Button } from "react-bootstrap";
import "../StylesGorSingleProduct.css";
import { useParams } from "react-router-dom";
import { GOODS } from "./Goods";
import { BasketContext } from "../context/BasketContext";

function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { addedToCart } = useContext(BasketContext);
  useEffect(() => {
    setSingleProduct(GOODS.filter((el) => el.id === +productId)[0]);
  }, [productId]);

  return (
    <Container>
      <div className="d-flex">
        <div className="d-flex flex-wrap my-4 ">
          {singleProduct?.imgs?.map((img, id) => (
            <Card.Img
              key={id}
              className={"mx-2 my-2 img"}
              src={img}
              variant="top"
            />
          ))}
        </div>

        <Container>
          <div>
            <h2 className=" my-4 txtMontserrat ">
              {singleProduct.brand} {singleProduct.model}
            </h2>
            <h5 className=" my-4 txtMontserrat ">${singleProduct.price}</h5>
            <h6 className="txtRoboto description">
              {singleProduct.description}
            </h6>
          </div>
          <Col>
            <h5 className="txtRoboto">Select Size</h5>
            {singleProduct?.dimensions?.map((size, id) => (
              <Button key={id} className="sizeButton me-2 mb-2" variant="light">
                {size}
              </Button>
            ))}
          </Col>

          <Button
            onClick={() => addedToCart(Number(productId))}
            variant="success"
          >
            Add Bag
          </Button>
        </Container>
      </div>
    </Container>
  );
}

export default SingleProduct;
