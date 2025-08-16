import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AddtoCart({ cart, setCart }) {
  console.log(cart);

  function RemoveItem(item) {
    setCart((pre) => {
      return pre.filter((cartItem) => cartItem.itemID !== item.itemID);
    });
  }

  function AddtoCartItem(item) {
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
    <Box sx={{ py: 18 }}>
      {cart.length > 0 ? (
        // large screen
        <Box>
          <TableContainer component={Paper} className="hidden md:flex">
            <Table
              sx={{ minWidth: 550 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    style={{ width: "100px" }}
                  >
                    Item Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    style={{ width: "100px" }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    style={{ width: "100px" }}
                  >
                    Price&nbsp;(₹)
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    style={{ width: "100px" }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    style={{ width: "100px" }}
                  >
                    Total&nbsp;(₹)
                  </TableCell>
                  <TableCell align="center" style={{ width: 100 }}>
                    <Button
                      sx={{
                        border: "1px solid #f87171",
                        color: "#f87171",
                        paddingTop: 0,
                        paddingBottom: 0,
                        "&:hover": {
                          border: "1px solid #ef4444",
                          color: "#ef4444",
                          backgroundColor: "rgba(248, 113, 113, 0.2)",
                        },
                      }}
                      onClick={() => {
                        setCart([]);
                      }}
                    >
                      Clear All
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item, idx) => (
                  <TableRow key={item.itemID}>
                    <TableCell align="center" style={{ width: "100px" }}>
                      {item.itemName}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.itemName}
                        style={{
                          width: 60,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ width: "100px" }}>
                      {item.itemPrice}
                    </TableCell>
                    <TableCell align="center" style={{ width: "100px" }}>
                      <Box className="flex gap-2 items-center justify-center">
                        <Button
                          sx={{
                            backgroundColor: "#6d4c41",
                            minWidth: "10px",
                            borderRadius: "50%",
                            color: "white",
                            paddingTop: "4px",
                          }}
                          onClick={() => {
                            setCart((pre) =>
                              pre.map((cartItem) =>
                                cartItem.itemID == item.itemID
                                  ? {
                                      ...cartItem,
                                      quantity: Math.max(
                                        cartItem.quantity - 1,
                                        1
                                      ),
                                    }
                                  : cartItem
                              )
                            );
                          }}
                        >
                          -
                        </Button>
                        <Typography
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          {
                            cart.find(
                              (cartItem) => cartItem.itemID == item.itemID
                            )?.quantity
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
                            AddtoCartItem(item);
                          }}
                        >
                          {" "}
                          +{" "}
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell align="center" style={{ width: "100px" }}>
                      ₹
                      {(item.itemPrice * (item.quantity || 1)).toLocaleString(
                        "en-IN"
                      )}
                    </TableCell>
                    <TableCell align="center" style={{ width: "100px" }}>
                      <Button
                        sx={{
                          border: "1px solid #f87171",
                          color: "#f87171",
                          paddingTop: 0,
                          paddingBottom: 0,
                          "&:hover": {
                            border: "1px solid #ef4444",
                            color: "#ef4444",
                            backgroundColor: "rgba(248, 113, 113, 0.2)",
                          },
                        }}
                        onClick={() => RemoveItem(item)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="right"
                    sx={{ fontWeight: "bold", color: "gray" }}
                    style={{ width: "100px" }}
                  >
                    Grand Total
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", padding: "10px", color: "gray" }}
                    style={{ width: "100px" }}
                  >
                    ₹{" "}
                    {cart
                      .reduce(
                        (acc, item) =>
                          acc + item.itemPrice * (item.quantity || 1),
                        0
                      )
                      .toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "10px",
                      color: "#795548",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                    style={{ width: "100px" }}
                  >
                    {" "}
                    10% Discount: ₹
                    {cart
                      .reduce((acc, item) => {
                        return (
                          acc + item.itemPrice * (item.quantity || 1) * 0.9
                        );
                      }, 0)
                      .toLocaleString("en-IN")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* // mobile screen */}
          <Box className="flex flex-col gap-4 md:hidden ">
            <Typography
              className="text-end px-2 text-red-400"
              onClick={() => {
                setCart([]);
              }}
            >
              Clear All
            </Typography>
            {cart.map((item, idx) => (
              <Box
                key={idx}
                className="flex gap-5 items-center justify-between px-2 border-b-1 border-gray-300"
              >
                <Box>
                  {" "}
                  <img
                    src={item.imageUrl}
                    alt={item.itemName}
                    className="w-16 h-16 rounded-lg"
                  />
                </Box>
                <Box className="flex flex-col justify-between items-center gap-2">
                  <Typography
                    className="text-[#795548]"
                    sx={{ fontSize: "12px" }}
                  >
                    {item.itemName}
                  </Typography>
                  <Typography
                    className="text-[gray] "
                    sx={{ fontSize: "13px" }}
                  >
                    ₹{item.itemPrice}
                  </Typography>
                  <Typography
                    className="text-[#795548] "
                    sx={{ fontSize: "14px" }}
                  >
                    Total: ₹
                    {(item.itemPrice * (item.quantity || 1)).toLocaleString(
                      "en-IN"
                    )}
                  </Typography>
                </Box>
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
                      AddtoCartItem(item);
                    }}
                  >
                    +
                  </Button>
                </Box>
                <CloseIcon
                  sx={{ color: "#f87171", cursor: "pointer" }}
                  onClick={() => RemoveItem(item)}
                />
              </Box>
            ))}
            <Box className='flex justify-around px-5'>
              <Typography sx={{fontSize:"14px",fontWeight:"bold"}}> Grand Total</Typography>
              <Typography sx={{fontSize:"14px",fontWeight:"bold" ,color:"#795548"}}>
                ₹{" "}
                {cart
                  .reduce(
                    (acc, item) => acc + item.itemPrice * (item.quantity || 1),
                    0
                  )
                  .toLocaleString("en-IN")}
              </Typography>
              </Box>
              <Box className='flex justify-around px-5'>
                <Typography sx={{fontSize:"14px",fontWeight:"bold"}}>10% Discount :</Typography>
              <Typography sx={{fontSize:"14px",fontWeight:"bold" ,color:"#795548"}}>
                {" "}
                 ₹
                {cart
                  .reduce((acc, item) => {
                    return acc + item.itemPrice * (item.quantity || 1) * 0.9;
                  }, 0)
                  .toLocaleString("en-IN")}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "gray",
              paddingTop: "70px",
            }}
          >
            Your Cart is Empty
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AddtoCart;
