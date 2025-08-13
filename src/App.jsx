import { useState } from 'react'
import './App.css'
import Product from './component/Product'
import Header from './component/Header'
import { Box } from '@mui/material'
import Banner from './component/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{display:"flex" ,flexDirection:"column", gap:"10px"}}>
    <Header/>
    <Banner/>
    <Product/>
    </Box>
  )
}

export default App
