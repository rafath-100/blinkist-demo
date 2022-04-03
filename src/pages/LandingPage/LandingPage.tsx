import React from 'react'
import Appbar from '../../components/organisms/Appbar/Appbar'
//import SearchBar from '../../components/molecules/SearchBar/SearchBar'
//import AddButton from '../../components/molecules/AddButton/AddButton'
import Cards from '../../components/molecules/Card/Card'
import { Typography } from '@mui/material'
import Reading from '../../components/molecules/Reading/Reading'
import Footer from '../../components/organisms/Footer/Footer'
import Explore from '../../components/organisms/Explore/Explore'

const LandingPage= () =>  {
  return (
    <React.Fragment>
      <Appbar/>
      <Explore/>
      <br/><br/>
      <Typography font-size="36px" color="#03314B" variant="h3" component="div" style={{marginLeft:"23%"}}>My Library</Typography>
      <br/>
      <Reading/>
      <br/>
      <Cards/><br /><br /><br />
      <Footer/>
    </React.Fragment>
  );
}

export default LandingPage
// json-server --watch src/data/db.json --port 4005



