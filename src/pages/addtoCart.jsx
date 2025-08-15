import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function AddtoCart({ cart, setCart }) {
  console.log(cart, setCart);


  return (
    <Box sx={{ py: 18 }}>
     

 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Item Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Image</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Price&nbsp;(₹)</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Quantity</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Total&nbsp;(₹)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, idx) => (
            <TableRow
              key={item.itemID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.itemName}
              </TableCell>
              <TableCell align="right" sx={{display:"flex",justifyContent:"end"}}><img src={item.imageUrl}
                    alt={item.itemName}
                    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }} /></TableCell>
              <TableCell align="right">{item.itemPrice}</TableCell>
              <TableCell align="right">{item.quantity }</TableCell>
               <TableCell align="right">
                  ₹{(item.itemPrice * ( item.quantity ||1)).toLocaleString('en-IN')}
                </TableCell>
            </TableRow>
            
         ))}

         <TableRow>
           <TableCell colSpan={4} align="right" sx={{ fontWeight: "bold" }}>
          Grand Total
        </TableCell>
         <TableCell align="right" sx={{ fontWeight: "bold",padding:"10px" }}>
           ₹ {cart.reduce((acc,item)=>acc+item.itemPrice * (item.quantity || 1),0).toLocaleString('en-IN')}
         </TableCell>
         </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


    </Box>
  );
}

export default AddtoCart;
