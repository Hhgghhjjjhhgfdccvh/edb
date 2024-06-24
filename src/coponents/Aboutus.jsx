import React from 'react'
import PrimarySearchAppBar from './Navbar';
import Box from '@mui/material/Box';
import Form from './Form';
import Slider from './Slider'
import FileUpload from './Fileupload';
import Team from '../Team';
import Anoop from './Anoop';
import Animesh from './Animesh';
import Unnati from './Unnati';
import Iffam from './Iffam';
import Dilip from './Dilip';
import Kaushiki from './Kaushiki';
import Shreya from './Shreya';
import Sankalp from './Sankalp';
import Ishita from './Ishita';
import Final from './Final';
import Tmember from './Tmember';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Services from './Services';

const myStyle={
  backgroundImage:
"url('./images/wee.jpg')",
  height:'100vh',
  marginTop:'-70px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Aboutus() {
  return (
    <Box sx={{ display: 'flex' }}><Slider/>
    
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <div className='photoo'>
    <Card sx={{height:100+"vh",width:180+"vh"}}>
      <CardActionArea>
        <CardContent>
       
       <div className='section2' style={{ backgroundImage:`url("./images/weee.jpg")`}}>
         <div className='part1'>
           <div className='part11'>
                    <h1 className='head' style={{fontSize:'60px'}}>About us</h1>
           </div>

           <div className='part12'>
             <p className='para12' style={{fontSize:"25px"}}>We are a dynamic and enthusiastic group of students and faculty who are passionate about literature, art, and the power of storytelling. Our mission is to provide a platform for students and staff to express themselves,and engage in meaningful dialogue.The Editorial Board is nurturing creativity in our college community through magazines, insightful interviews, and literary competitions.</p>

           </div>

         </div>
         <div className='part2'>
           <div className='part21'>
             <h1 className='head11'>65+ <br/>Publications</h1>
             <h1 className='head11'>25+ <br/>Legacy</h1>


           </div>
           <div className='part22'>
           <h1 className='head11'>50+ <br/>Interviews</h1>
             <h1 className='head11'>100+ <br/>Alumnus</h1>

           </div>


         </div>

       </div>
        </CardContent>
      </CardActionArea>
    </Card>
       </div>
       <div className='advisor'>
        <div className='adv2'>
          <img className='imgf' src='./images/faculty.png'></img>
        </div>
        <div className='adv1'>
        <p className='p111' style={{color:"white"}}>Faculty Advisor</p>
        <h3 className='h111'>Dr.Abhijeet Mishra</h3>
        <h4>(HE/HIS)</h4>
        <p className='p6' style={{marginRight:"200px"}}>Dr.Abijeet is the faculty advisor the prestigeousbody ghfgh kfk ojkkh fucking sristi hjit bjk jrn omgjg gj oirh and riih qwet on the bfo  klflf dkfkdkfk fkkfkk fiejiej dnfdn fjnjf fhjd board is doing its great job in grdfh</p>
        </div>
       </div>
    
      </Box>
    </Box>
    
  )
}

export default Aboutus