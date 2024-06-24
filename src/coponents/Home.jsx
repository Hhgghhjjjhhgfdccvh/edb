import React from 'react'
import Slider from './Slider'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimarySearchAppBar from './Navbar';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Search from './Search';
import Random from './Random'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CardMedia from '@mui/material/CardMedia';
import Footer from './Footer';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { SocialIcon } from 'react-social-icons';


function Home() {
  return (
   <> 
    <Box  sx={{ display: 'flex' }}>
      <Slider/>
      
    
    <Box component="main"  sx={{ flexGrow: 1, p: 3 }}>
    
    <Grid container spacing={2}>
    <Grid item xs={4}>
    <Stack direction="column" spacing={2}>
    <Card sx={{height:80+"vh",width:180+"vh"}}>
  <CardActionArea>
  <Card sx={{height:5+"vh",width:180+"vh",backgroundColor:"#333"}}>
  <CardActionArea>
    <div className='noti'><CircleNotificationsIcon fontSize='medium'/></div>
    <div className="footer-bottom" style={{alignItems:"center"}}>
        <div className="social-links" style={{display:"flex",flexDirection:"row"}}>
            <div style={{padding:"20px",width:"10px"}} > <SocialIcon  url="www.facebook.com" href='https://instagram.com'/></div>
              
             <div style={{padding:"20px"}} > <SocialIcon url="www.instagram.com" href='https://instagram.com'/>
              </div>
             <div style={{padding:"20px"}} > <SocialIcon url="www.twiter.com" href='https://instagram.com'/>
              </div>
              
            </div>
        </div>
     </CardActionArea>
     </Card>
  <CardMedia
    component="img"
    height="400"
    image=".\images\bg.jpg"
    />
     </CardActionArea>
     </Card>
    
     <Card sx={{height:45+"vh",width:180+"vh",backgroundColor:"#333"}}>
  <CardActionArea>
  <CardContent>
    <Footer/>
  </CardContent>
     </CardActionArea>
     </Card>
  
  </Stack>

</Grid>
  <Grid item xs={4}>
  </Grid>
  <Box height={70}/>
  <Grid item xs={4}>
  
  </Grid>
 
</Grid> 

      </Box>
    </Box></>
    
  )
}

export default Home