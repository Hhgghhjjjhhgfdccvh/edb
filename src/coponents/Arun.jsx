import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Arun() {
  return (
    <Card sx={{ maxWidth: 2000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image=".\images\arun.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{fontFamily:'Ysabeau Infant'}} gutterBottom variant="h5" component="div">
            ARUNODAYA
          </Typography>
          <Typography variant="body2" style={{fontFamily:'Ysabeau Infant',fontSize:'18px'}} color="text.secondary">
          This event provides a platform for students to display their communication prowess, critical thinking acumen, and fervor for substantive discussions. As we gear up for another year of stimulating intellectual exchange, we invite all students to partake in spirited debates covering diverse topics. Whether you're a seasoned debater or a newcomer eager to refine your skills, this competition offers an exceptional opportunity for personal development and networking with fellow enthusiasts of constructive discourse. We eagerly anticipate witnessing the insightful arguments and articulate speeches that will undoubtedly arise during this event. So, prepare yourself, gather your thoughts, and let your voices resonate at this year's Annual Debate Competition. It's your moment to make a difference and enrich the lively intellectual atmosphere of our university. Come join us in celebrating the potency of words and ideas!





          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}