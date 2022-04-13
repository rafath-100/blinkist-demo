import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Account from '../../atoms/Account/Account';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography, Paper, Popover, Modal} from '@mui/material';
import Blinklist from '../../../images/Blinklist.svg'
import A from '../../../images/A.svg';
import Vector from '../../../images/Vector.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Grid, Link} from '@mui/material';
import Typog from '../../atoms/Typography/Typog';
import Logos from '../../atoms/Logos/Logos'
import Drop from '../../../images/Drop.svg'
import Explore from '../../molecules/Explore/Explore';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonComponent from '../../atoms/ButtonCompo/ButtonComponent';
import { KeyboardArrowDown } from '@mui/icons-material';
 

const Appbar=()=> {

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      
        <AppBar  
          style={{
            boxShadow:"none", 
            background:"#ffffff",
            top:"auto",
            margin:"auto",
            padding:"10px"
            }}>
          <Toolbar>
            
            <Grid container spacing={3} style={{marginLeft:"20.32%"}}>
              <Grid item xs={1} style={{flexDirection:"column"}}>
                <Logos image={Blinklist} />
                
              </Grid>
              <Grid item xs={1} style={{marginLeft:"70px"}}>
                <Logos image={Vector}/>
              </Grid>

              
          
              <ButtonComponent variant="text" size="large" onClick={handleOpen} style={{color:"#03314B"}}>Explore<KeyboardArrowDown /></ButtonComponent>
                <Modal
                    open={open}
                    onClose={handleClose}
                    BackdropProps={{style: {top: "70px"}}}
                    disableScrollLock={true}
                >
                    <Paper sx={{position: 'absolute' as 'absolute',"fullwidth":"true",top:'10%',bgcolor:'#F1F6F4'}}>
                            <Explore />
                    </Paper>
                </Modal>


              <Grid item sm={2} style={{marginLeft:"40px", color:"#03314B", width:"78px", height:"10px"}}>
                <Link underline="none" style={{color:"#03314B", fontSize:"20px"}} href="/" sx={{"marginLeft":2,"marginRight":2}}>My Library</Link>
              </Grid>

              <Grid item sm={1} style={{display:"flex", marginLeft:"12.8%"}}>
                <Account/>
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


