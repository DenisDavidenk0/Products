import { useContext, useEffect, useState } from "react";
import { Container, Card, Col, Button, Image } from "react-bootstrap";
import "../StylesGorSingleProduct.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { addedToCart, removeToCart, filterById, products, SizeSelection } =
    useContext(BasketContext);

  useEffect(() => {
    setSingleProduct(filterById(productId));
  }, [productId, products]);

  function check(size) {
    console.log(size);
  }
  return (
    <Container>
      <div className="d-flex">
        <div className="d-flex flex-wrap my-4 ">
          <Image src={singleProduct.imgSrc} fluid />

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
              <Button
                key={id}
                onClick={() => SizeSelection(productId, size)}
                className="sizeButton me-2 mb-2"
                variant="light"
              >
                {size}
              </Button>
            ))}
          </Col>
          {singleProduct?.addedToCart ? (
            <Link to="/basket" className="d-flex text-decoration-none  my-1">
              <ShoppingCartCheckoutIcon className="nav-link" />
              <h4 className="nav-link ms-2">Item already in cart</h4>
            </Link>
          ) : (
            <Button
              onClick={() => addedToCart(Number(productId))}
              variant="success"
            >
              Add Bag
            </Button>
          )}
        </Container>
      </div>
    </Container>
  );
}

export default SingleProduct;
