import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";

function AddtoCart({ cart, setCart }) {
  function RemoveItem(item) {
    setCart((pre) => {
      return pre.filter((cartItem) => cartItem.itemID !== item.itemID);
    });
  }

  return (
    <Box sx={{ py: 18 }}>
      {cart.length >0 ?(
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
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
                    border: "1px solid blue",
                    color: "blue",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  onClick={()=>{
                    setCart([])
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
                    style={{ width: 60, objectFit: "cover", borderRadius: 8 }}
                  />
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>
                  {item.itemPrice}
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>
                  {item.quantity}
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>
                  ₹
                  {(item.itemPrice * (item.quantity || 1)).toLocaleString(
                    "en-IN"
                  )}
                </TableCell>
                <TableCell align="center"  style={{ width: "100px" }}>
                  <Button
                    sx={{
                      border: "1px solid red",
                      color: "red",
                      paddingTop: 0,
                      paddingBottom: 0,
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
                sx={{ fontWeight: "bold",color:"gray" }}
                style={{ width: "100px" }}
              >
                Grand Total
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", padding: "10px",color:"gray" }}
                style={{ width: "100px" }}
              >
                ₹{" "}
                {cart
                  .reduce(
                    (acc, item) => acc + item.itemPrice * (item.quantity || 1),
                    0
                  )
                  .toLocaleString("en-IN")}
              </TableCell>
              <TableCell align="center"  sx={{  padding: "10px", color:"#795548", fontSize:"13px",fontWeight:'bold' }}
                style={{ width: "100px" }} > 10% Discount: ₹{cart
                  .reduce(
                    (acc, item) => {
                      return  acc + (item.itemPrice * (item.quantity || 1) * 0.9)
                      },0 ).toLocaleString("en-IN")}
                 
                   </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      ) :(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Typography sx={{ fontSize: '24px', fontWeight: 600 ,color:"gray",paddingTop:"70px"}}>Your Cart is Empty</Typography>
        </Box>
      )
    }
    </Box>
  );
}

export default AddtoCart;
