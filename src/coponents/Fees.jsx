import React from 'react'
import PrimarySearchAppBar from './Navbar';
import Box from '@mui/material/Box';
import Form from './Form';
import Slider from './Slider'
import FileUpload from './Fileupload';
function Fees() {
  return (
    <Box sx={{ display: 'flex' }}><Slider/>
    
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}><PrimarySearchAppBar/>
   
      <Form/>
      </Box>
    </Box>
    
  )
}

export default Fees