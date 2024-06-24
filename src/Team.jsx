import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Team() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image=".\member.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{fontFamily:'Ysabeau Infant'}} gutterBottom variant="h5" component="div">
            Swati Tiwari
          </Typography>
          <Typography variant="body2" style={{fontFamily:'Ysabeau Infant',fontSize:'18px'}} color="text.secondary">
            Computer Science and Engeneering
          </Typography>
          <Typography variant="body2" style={{fontFamily:'Ysabeau Infant'}} color="text.secondary">
            Btech, Junior year
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}