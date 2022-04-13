import React, { useEffect, useState } from 'react';
import Typog from '../../atoms/Typography/Typog';
import {Card, Container, Button} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {makeStyles} from '@mui/styles'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface Props{
  id:number;
  imag:string;
  bookName:string;
  author:string;
  time:string;
  user:string;
  count:string;
  status:string;
  bookLabel:string;
  added:string;

}

const useStyles = makeStyles({
  heading1:{
    position: "static",
    left: "0px",
    width: "174px",
    height:"30px",
    top: "0px",
    bottom: "48.86%",
    color: "#03314B",
    fontFamily:"Cera Pro",
    fontSize:"24px",
    fontWeight:"700",
    lineHeight:"30px",
    fontStyle:"normal",
    margin:"30px 0px"
  },
  input: {
    width: "563.35px",
    fontStyle:"normal",
    fontFamily:"Cera Pro",
    fontSize:"24px",
    lineHeight:"30px",
    fontWeight:"700",
    margin: "0px 24px",
    order:"1",
    border: "white",
    "&:focus": {
      outline: "none",
    },
    Name:{
      fontSize:"18px"

    }
  },
})

const BookCard =({...props}:Props)=>{ 
  const style=useStyles();
  var index = props.id ;
  var bookState = props.status;
  var label=props.bookLabel;
  var add=props.added;
  const handleClick = ()=>{
    if(label ==="+ Add to Library"){
      if(add ==="yes")
      add="no" 
      else if(add ==="no")
      add="yes"  
    }
    if(label === "Finished"){
      bookState = "Read Again"
      label = "Read Again"
    }
    else if(label === "Read Again"){
      bookState = "Finished"
      label = "Finished"
    }
    fetch('http://localhost:4005/library/'+index,{
      method: 'PATCH',
      body: JSON.stringify({
        "status": bookState,
        "added":add
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }

  return (
    <div>
    <>
      <Card sx={{ maxWidth: 345, height: 385 }}>
        <CardMedia
          component="img"
          height="200"
          image={props.imag}
          alt="not found" 
          sx={{width:"100%"}}/>
          
      <Link to="/library" state={{id:index}} onClick={handleClick} style={{textDecoration:"none", color:"#0365F2", marginLeft:"26%", fontSize:"16px"}}>
        <CardContent >
          <Typog children={props.bookName} variant="subtitle1" color="#03314B" />
          <Typog children={props.author} variant="body1" color="#6D787E" />
          <Typography variant="body2" color="text.secondary" align="left" sx={{ "marginTop": 1 }}>
            <Grid container>

              <Grid item style={{ marginLeft: "0%", display: "flex" }}>
                <AccessTimeOutlinedIcon style={{ width: "17px", height: "20px" }} />
                <Typog children={props.time} variant="body2" />
              </Grid>

              <Grid item style={{ marginLeft: "8%", display: "flex" }}>

                {props.count === "" ? null : (
                  <>
                    <PersonOutlineOutlinedIcon style={{ width: "20px", height: "20px" }} />
                    <Typog children={props.count} variant="body2" />
                  </>
                )}
              </Grid>

            </Grid>
          </Typography>

        </CardContent>
      </Link>

        
          
        <CardActions sx={{"margin":0}} > 
                  {props.added==="yes"&&props.bookLabel==="+ Add to Library"?                  
                  <Button fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0,"marginLeft":30}} onClick={handleClick} >                 
                      
                      <MoreHorizIcon style={{color:"#000000"}}/>  
                  </Button> 
                          :(
                  <Button fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}} onClick={handleClick}> 
                    {label} 
                  </Button>  
                  )}         
        </CardActions>

      </Card><Box
          sx={{
            width: 95,
            height: 15,
            position: "absolute",
            backgroundColor: '#E1ECFC',
            borderRadius: "0px 0px 0px 8px",
          }} /><Box
          sx={{
            width: "100%",
            height: 15,
            backgroundColor: '#F1F6F4',
            borderRadius: "0px 0px 8px 8px",
            border: "1px solid #E1ECFC"
          }} />
         
          </>
    </div>
  );
}
export default BookCard;


