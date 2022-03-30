import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Account from '../../atoms/Account/Account';
import CssBaseline from '@mui/material/CssBaseline';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import Logo from '../../atoms/Logo/Logo';
import IconButtonComponent from '../../atoms/Icons/IconButtonComponent';
import { Typography} from '@mui/material';
import Logos from '../../atoms/Logos/Logos';
//import Blinklist from '../../atoms/Logos/Logos';
import Blinklist from '../../../images/Blinklist.svg'
import A from '../../../images/A.svg';
import Vector from '../../../images/Vector.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Appbar=()=> {
  return (
    <React.Fragment>
      <CssBaseline />
      
        <AppBar  
          style={{
            boxShadow:"none", 
            background:"transparent",
            position:"fixed",
            top:"auto",
            margin:"auto",
            padding:"10px"
            }}>
          <Toolbar>
            
            <Grid container spacing={3} style={{marginLeft:"16%"}}>
              <Grid item xs={1} style={{flexDirection:"column"}}>
                <Logo/>
                
              </Grid>
              <Grid item xs={1} style={{marginLeft:"70px"}}>
                <IconButtonComponent/>
              </Grid>

              <Grid item sm={1}>
                
                <Typography color="#03314B" variant="h6" component="div" gutterBottom>
                      Explore
                      <Dropdown/>
                </Typography>
              </Grid>

              <Grid item sm={1} style={{marginLeft:"40px"}}>
                <Typography color="#03314B" variant="h6" component="div" gutterBottom>
                        My Library
                  </Typography>
              </Grid>

              <Grid item sm={1} style={{display:"flex", marginLeft:"32%"}}>
                <Account/>
                <Dropdown/>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      <Toolbar />

    </React.Fragment>
  );
}

export default Appbar;

