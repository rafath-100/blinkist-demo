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
import Logos from '../../atoms/Logos/Logos'
import Typog from '../../atoms/Typography/Typog'

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
    <Container style={{marginLeft:"399px"}}>

      <Grid container spacing={4} width={0.82}>

        {data.map(cards => (
          <Grid item key={cards.id} xs={12} sm={6} lg={4}>

            <Card>
              {/* <CardMedia component="img" image={cards.image}></CardMedia> */}
              <Logos image={cards.image}/>
              <CardContent>
                {/* <Typography gutterBottom variant='h5' component='div' color="#03314B">{cards.title}</Typography>
                <Typography component='div' color="#6D787E">{cards.author}</Typography> */}
                <Typog children={cards.title} variant="h6" color="#03314B"/>
                <Typog children={cards.author} variant="subtitle1" color="#6D787E"/>

              </CardContent>


              <Stack direction='row' spacing={2}>

                <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
                {/* <Typography color="#6D787E">{cards.time}</Typography> */}
                <Typog children={cards.time} variant="body1" />


                <PersonOutlineOutlinedIcon />
                {/* <Typography color="#6D787E">{cards.read}</Typography> */}
                <Typog children={cards.read} variant="body1"/>

              </Stack>

              <Button variant="text" style={{color:"#0365F2", position:"static", left:"22px", top:"14px", marginLeft:"33%", marginTop:"5px", marginBottom:"3px"}}>
                Finished
              </Button>
            </Card>
            <Box
            sx={{
              width: 95,
              height: 15,
              position:"absolute",
              backgroundColor: '#E1ECFC',
              borderRadius:"0px 0px 0px 8px",

            }}
          />
          <Box
          sx={{
              width: 283,
              height: 15,
              backgroundColor: '#F1F6F4',
              borderRadius:"0px 0px 8px 8px",
              border: "1px solid #E1ECFC"
            }}
          />
          </Grid>
            
        ))}

      </Grid>
    </Container>
  );
}

export default Cards