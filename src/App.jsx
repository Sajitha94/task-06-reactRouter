import { useState } from "react";
import "./App.css";
import Product from "./component/Product";
import Header from "./component/Header";
import { Box } from "@mui/material";
import Banner from "./component/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddtoCart from "./pages/addtoCart";

function App() {
  const [cart, setCart] = useState([]);


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Header cartCount={cart.length} />
              <Banner />
              <Product  cart={cart} setCart={setCart}/>
            </Box>
          }
        />
         <Route path="/addtocart" element={<AddtoCart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
