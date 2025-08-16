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
      setCart((pre) =>
        pre.map((cartItem) =>
          cartItem.itemID == item.itemID
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((val) => [...val, { ...item, quantity: 1 }]);
    }
  }

  return (
    <Box className=" p-5" sx={{ pt: 12 }}>
      {productMatch.map((item, idx) => (
        <Card
          className=" flex flex-col  justify-center items-center  p-2"
          key={idx}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            className="  rounded-lg "
            sx={{
              width: "50vw",
              objectFit: "cover",
              height: {
                xs: "25vh",
                md: "100vh",
              },
            }}
            image={item.imageUrl || fallbackImage}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
            onClick={() => {
              navigate(`/product/${item.itemID}`);
            }}
          />
          <CardContent
            className="flex flex-col gap-2 items-center md:w-[50vw]  "
            style={{
              padding: "8px",
              marginTop: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <Box className="flex justify-around items-center gap-2   ">
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
            <Box
              className="flex gap-2  justify-between items-center  "
              sx={{width: "65vw"}}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "gray",
                  fontWeight: 600,
                }}
              >
                {item.itemDescription}
              </Typography>
              </Box>
              <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#795548",
                  fontWeight: 600,
                  width: "50vw",
                   textAlign:"center"
                }}
              >
                {item.restaurantName}
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            className=" flex gap-2 justify-center"
            style={{ padding: "3px", marginBottom: "20px" }}
          >
            {cart.some((cartItem) => cartItem.itemID == item.itemID) ? (
              <Box className="flex gap-2 items-center">
                <Button
                  sx={{
                    backgroundColor: "#6d4c41",
                    minWidth: "10px",
                    borderRadius: "50%",
                    color: "white",
                    paddingTop: "4px",
                  }}
                  onClick={() => {
                    setCart((prev) =>
                      prev.map((cartItem) =>
                        cartItem.itemID === item.itemID
                          ? {
                              ...cartItem,
                              quantity: Math.max(cartItem.quantity - 1, 1),
                            }
                          : cartItem
                      )
                    );
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {
                    cart.find((cartItem) => cartItem.itemID == item.itemID)
                      ?.quantity
                  }
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#6d4c41",
                    minWidth: "10px",
                    borderRadius: "50%",
                    color: "white",
                    paddingTop: "4px",
                  }}
                  onClick={() => {
                    AddtoCart(item);
                  }}
                >
                  +
                </Button>
              </Box>
            ) : (
              <>
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
              </>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default ProductDetails;
