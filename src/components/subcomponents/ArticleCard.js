import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography  from '@mui/material/Typography';

export default function ArticleCard(props) {
  return (
   <Box sx={{ flex:'1 0 auto', display: 'flex', flexDirection: 'column', width:'75%',textAlign:"left", mt:5, mb:5}}>
            <Typography component='paragraph' variant="h6">{props.displayname}</Typography>
            <Typography component="paragraph" variant="body">{props.username}</Typography>
         
        <Card sx={{display:'flex', width: 560}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'75%'}}>
                <CardContent sx={{ flex: '1 0 auto',  textAlign: 'left'}}>
                    <Typography component='div' variant='h5'>
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{width: 151, display:'flex', justifyContent:'right'}}
                image={props.imageArticle}
                alt="alt text"
            />
        </Card>
     </Box>
  )
}
