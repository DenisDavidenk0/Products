import "./Basket.css";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useContext } from "react";
import { BackgroundContecst } from "./context/BackgroundContext ";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./components/static/AboutUs";
import Contacts from "./components/static/Contacts";
import NotFound from "./components/static/NotFound";

import Profile from "./components/Profile";
import { ProfileContext } from "./context/ProfileContext";
import SingleProduct from "./components/SingleProduct";
import StaticBasket from "./components/static/StaticBasket";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

function App() {
  const { thema } = useContext(BackgroundContecst);
  useContext(ProfileContext);

  return (
    <div className={` ${thema} `} id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/basket" element={<StaticBasket />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
