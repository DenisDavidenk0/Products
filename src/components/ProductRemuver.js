import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { BasketContext } from "../context/BasketContext";
import "../StylesBasket.css";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductRemuver({ product }) {
  const { removeToCart } = useContext(BasketContext);
  return (
    <div className="removeProduct">
      <div
        onClick={() => removeToCart(product)}
        className="cursor-pointer  mx-2 p-2 text-black"
      >
        <DeleteIcon className="me-2" />
        Delete
      </div>
    </div>
  );
}

export default ProductRemuver;
