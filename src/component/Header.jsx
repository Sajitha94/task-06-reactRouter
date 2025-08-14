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

function Header() {
 
  return (
  <>
  <AppBar position="static" sx={{ backgroundColor: '#efebe9' }}>
  <Toolbar variant="dense" sx={{ display: 'flex', justifyContent:'space-between' }}>
 <Box component="img"
          src="src/assets/logo.png"   // <- put your logo image path here
          alt="Logo"
         className='w-18 py-2'
        />
      <Badge
  badgeContent={2}
  sx={{
    '& .MuiBadge-badge': {
      backgroundColor: '#424242',
      color: 'white' // 
    }
  }}
>
  <ShoppingCartRoundedIcon sx={{ height: 35, width: 35, color: '#795548' }} />
</Badge>

    
  </Toolbar>
</AppBar></>
  );
}

export default Header