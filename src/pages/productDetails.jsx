import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurant } from "./Restaurant";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import fallbackImage from "../assets/banner3.png";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  console.log(id);
  const { product } = useRestaurant();
  const productMatch = product.filter((val) => val.itemID == id);
  console.log(productMatch);

function AddtoCart(item) {
    const alreadyExist = cart.some((value) => {
      return value.itemID == item.itemID;
    });
    if (alreadyExist) {
      alert("Item already added to the cart");
    } else {
      setCart((val) => [...val, item]);
    }
  }

  return (
    <Box className=" p-5">
      {productMatch.map((item, idx) => (
        <Card
          className=" flex flex-col  justify-center items-center  p-2"
          key={idx}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            className="  rounded-lg "
            sx={{ width: "50vw" }}
            image={item.imageUrl || fallbackImage}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
            onClick={() => {
              navigate(`/product/${item.itemID}`);
            }}
          />
          <CardContent className="flex flex-col gap-1 w-[50vw]  ">
            <Box className="flex justify-between items-center ">
                
            <Typography
              level="title-lg"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#5d4037" }}
            >
              {item.itemName}
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#8d6e63" }}
            >
              ₹{item.itemPrice}
            </Typography>
            </Box>
            <Box className="flex flex-col justify-start ">
                <Typography sx={{ fontSize: "13px", color: "#6d4c41" }}>
                     {item.itemDescription}
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#795548" }}>
                     {item.restaurantName}
                </Typography>
                
            </Box>
            
          </CardContent>
          <CardActions className=" flex justify-center">
            <Button
              sx={{
                margin: "0",
                backgroundColor: "#6d4c41",
                color: "white",
                fontSize: "11px",
              }}
               onClick={() => {
                AddtoCart(item);
              }}
            >
              Add To Card
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default ProductDetails;
