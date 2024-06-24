import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Shreya() {
  return (
    <Card sx={{ width: 210 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image=".\images\Shreya.jpg"
          alt="green iguana"
          style={{border:'0',borderRadius:'50%'}}
        />
        <CardContent>
          <Typography style={{fontFamily:'Ysabeau Infant'}} gutterBottom variant="h5" component="div">
            Shreyashi Rai
          </Typography>
          <Typography variant="body2" style={{fontFamily:'Ysabeau Infant',fontSize:'18px'}} color="text.secondary">
            Electronics Engeneering
          </Typography>
          <Typography variant="body2" style={{fontFamily:'Ysabeau Infant'}} color="text.secondary">
            Btech, Final year
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}