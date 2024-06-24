import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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


export default function Final() {
  return (
    <div className='section3'>
         <div className='se' style={{display:"flex",flexDirection:"row"}}>
           <div className='team1'style={{}}>
            <Anoop/>
          </div>
          <div className='team3' style={{paddingLeft:"150px"}}>
          <Dilip/>
          </div>
          <div className='team4' style={{paddingLeft:"200px"}}>
          <Iffam/>
          </div>
          
</div>
<div className='se'> 
          <div className='team2'>
          <Shreya/>
          </div>
          <div className='team3' style={{paddingLeft:"150px"}}>
          <Ishita/>
          </div>
          <div className='team4' style={{paddingLeft:"200px"}}>
          <Sankalp/>
          </div>
</div>
<div className='se'> <div className='team1'>
            <Kaushiki/>
          </div>
          <div className='team5' style={{paddingLeft:"150px"}}>
          <Unnati/>
          </div>
          <div className='team2' style={{paddingLeft:"200px"}}>
          <Animesh/>
          </div>
  
</div>
        </div>
  
  );
}