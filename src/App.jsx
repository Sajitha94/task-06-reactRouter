import { useState } from "react";
import "./App.css";
import Product from "./component/Product";
import Header from "./component/Header";
import { Box } from "@mui/material";
import Banner from "./component/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddtoCart from "./pages/addtoCart";
import ProductDetails from "./pages/productDetails";
import {  RestaurantProvider } from "./pages/Restaurant";

function App() {
  const [cart, setCart] = useState([]);


  return (
    <Router>
      <RestaurantProvider>
       <Header cartCount={cart.length}  />
      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px",padding:"10px" }} >
             
              <Banner />
              <Product  cart={cart} setCart={setCart}/>
            </Box>
          }
        />
         <Route path="/addtocart" element={<AddtoCart/>}/>
         <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
      </Routes>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
