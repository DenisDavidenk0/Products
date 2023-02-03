import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
// import { BackgroundContecst } from "../context/BackgroundContext ";
import { BasketContext } from "../context/BasketContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  const { profile } = useContext(ProfileContext);
  const { hasProduct } = useContext(BasketContext);
  return (
    <>
      <header className="header bg-warning p-3">
        <Container className="d-flex justify-content-between ">
          <Navbar expand="lg">
            <Navbar.Brand>Best Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className={"navbar-brand"} to="/products">
                  Goods
                </Link>
                <Link className={"nav-link"} to="/about-us">
                  About Us
                </Link>
                <Link className={"nav-link"} to="/contacts">
                  Contacts
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="d-flex  ">
            <Link className={"navbar-brand mx-2"} to="/basket">
              {hasProduct() ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
            </Link>
            {profile?.name ? (
              profile?.name
            ) : (
              <Link className={"navbar-brand"} to="/profile">
                <PersonIcon fontSize="large" />
              </Link>
            )}
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
