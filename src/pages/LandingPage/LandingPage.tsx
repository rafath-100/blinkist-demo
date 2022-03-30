import React from 'react'
import Appbar from '../../components/organisms/Appbar/Appbar'
//import SearchBar from '../../components/molecules/SearchBar/SearchBar'
//import AddButton from '../../components/molecules/AddButton/AddButton'
import Cards from '../../components/molecules/Card/Card'
import { Typography } from '@mui/material'
import Reading from '../../components/molecules/Reading/Reading'

const LandingPage= () =>  {
  return (
    <React.Fragment>
      <Appbar/>
      <br/><br/>
      <Typography font-size="36px" color="#03314B" variant="h3" component="div" style={{marginLeft:"19%"}}>My Library</Typography>
      <br/>
      <Reading/>
      <br/>
      <Cards/>
    </React.Fragment>
  )
}

export default LandingPage
// json-server --watch src/data/db.json --port 4005



