import React from 'react'
import Appbar from '../../components/organisms/Appbar/Appbar'
import { Stack, Typography, Grid } from '@mui/material'

import Footer from '../../components/organisms/Footer/Footer'
import LibTabs from '../../components/organisms/Tabs/Tabs'

const LandingPage= () =>  {
  
  return (
    <React.Fragment>
      <Appbar/>
      
      <br/><br/>
      <Typography font-size="36px" color="#03314B" variant="h3" component="div" style={{marginLeft:"23%"}}>My Library</Typography>
      <br/>
      <LibTabs />
      <br /><br />
      <Footer/> 
    </React.Fragment>
  );
}

export default LandingPage
// json-server --watch src/data/db.json --port 4005



