import React, { useState } from 'react'
import { useEffect } from 'react'
import { Url } from 'url';
import axios from 'axios';
import { Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

interface Types {
  read: string;
  id: number,
  author: string,
  title: string,
  state: string,
  image: string,
  time: string
}
const Cards = () => {
  const [data, setData] = useState([] as Types[])
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const cards = await axios.get(' http://localhost:4005/library');
    setData(cards.data);
    console.log(cards)
  }

  return (
    <Container>

      <Grid container spacing={3}>

        {data.map(cards => (
          <Grid item key={cards.id} xs={12} sm={6} lg={4}>

            <Card>
              <CardMedia component="img" image={cards.image}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div' color="#03314B">{cards.title}</Typography>
                <Typography component='div' color="#6D787E">{cards.author}</Typography>

              </CardContent>


              <Stack direction='row' spacing={2}>

                <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
                <Typography color="#6D787E">{cards.time}</Typography>


                <PersonOutlineOutlinedIcon />
                <Typography color="#6D787E">{cards.read}</Typography>

              </Stack>

              <Button variant="text" style={{color:"#0365F2", position:"static", left:"22px", top:"14px"}}>
                Finished
              </Button>
            </Card></Grid>
        ))}

      </Grid>
    </Container>
  );
}

export default Cards