import React from 'react'
import Slider from './Slider'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Labs from './Labs';
import Stack from '@mui/material/Stack';
import PrimarySearchAppBar from './Navbar';


function Admin() {
  return (
    <>
    <Box sx={{ display: 'flex' }}><Slider/>
     <Stack direction="column" spacing={0.01}>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
       <h2 style={{fontFamily:"serif",color:"rgb(10, 110, 189)"}}>Publications</h2>
       </Box>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
      <Labs/>
      </Box>
      </Stack>
    </Box>
    </>
    
  )
}
export default Admin