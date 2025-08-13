import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


function Product() {
  return (
    <Box className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
    <Card  className='w-60 h-60 flex flex-col  justify-between items-center p-5'>
      <CardMedia
        component="img"
        alt="green iguana"
        
        className=' '
        sx={{width:"100px"}}
        image="src\assets\logo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{padding:"0",margin:"0"}}>
          Lizard
        </Typography>
        
      </CardContent>
      <CardActions>
     <Button sx={{margin:"0",backgroundColor:"#6d4c41",color:'white'}}  >Add To Card</Button>
      </CardActions>
    </Card>

    <Card  className='w-60 h-60 flex flex-col  justify-between items-center p-5'>
      <CardMedia
        component="img"
        alt="green iguana"
        
        className=' '
        sx={{width:"100px"}}
        image="src\assets\logo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{padding:"0",margin:"0"}}>
          Lizard
        </Typography>
        
      </CardContent>
      <CardActions>
     <Button sx={{margin:"0",backgroundColor:"#6d4c41",color:'white'}}  >Add To Card</Button>
      </CardActions>
    </Card>


    <Card  className='w-60 h-60 flex flex-col  justify-between items-center p-5'>
      <CardMedia
        component="img"
        alt="green iguana"
        
        className=' '
        sx={{width:"100px"}}
        image="src\assets\logo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{padding:"0",margin:"0"}}>
          Lizard
        </Typography>
        
      </CardContent>
      <CardActions>
     <Button sx={{margin:"0",backgroundColor:"#6d4c41",color:'white'}}  >Add To Card</Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Product