import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Account from '../../atoms/Account/Account';
import CssBaseline from '@mui/material/CssBaseline';
//import Dropdown from '../../atoms/Dropdown/Dropdown';
// import Logo from '../../atoms/Logo/Logo';
//import IconButtonComponent from '../../atoms/Icons/IconButtonComponent';
import { Button, Typography} from '@mui/material';
//import Logos from '../../atoms/Logos/Logos';
//import Blinklist from '../../atoms/Logos/Logos';
import Blinklist from '../../../images/Blinklist.svg'
import A from '../../../images/A.svg';
import Vector from '../../../images/Vector.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typog from '../../atoms/Typography/Typog';
import Logos from '../../atoms/Logos/Logos'
import Drop from '../../../images/Drop.svg'

const Appbar=()=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      
        <AppBar  
          style={{
            boxShadow:"none", 
            background:"#ffffff",
            // position:"fixed",
            top:"auto",
            margin:"auto",
            padding:"10px"
            }}>
          <Toolbar>
            
            <Grid container spacing={3} style={{marginLeft:"20.32%"}}>
              <Grid item xs={1} style={{flexDirection:"column"}}>
                <Logos image={Blinklist}/>
                
              </Grid>
              <Grid item xs={1} style={{marginLeft:"70px"}}>
                <Logos image={Vector}/>
              </Grid>

              <Grid item sm={1} style={{display:"flex", color:"#03314B", width:"57px", height:"20px"}}>
                
                {/* <Typog children="Explore" variant="h6" color="#03314B"/>
                <Logos image={Drop}/> */}
                
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Explore
                </Button>
                <Logos image={Drop}/>


              </Grid>

              <Grid item sm={2} style={{marginLeft:"40px", color:"#03314B", width:"78px", height:"10px"}}>
                {/* <Typography color="#03314B" variant="h6" component="div" gutterBottom>
                        My Library
                  </Typography> */}
                  <Typog children="My Library" variant="h6" color="#03314B"/>
              </Grid>

              <Grid item sm={1} style={{display:"flex", marginLeft:"12.8%"}}>
                <Account/>
                {/* <Dropdown/> */}
                <Logos image={Drop}/>

              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      <Toolbar />

    </React.Fragment>
  );
}

export default Appbar;

