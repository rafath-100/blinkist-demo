import React from 'react'
import Appbar from '../../components/organisms/Appbar/Appbar'
//import SearchBar from '../../components/molecules/SearchBar/SearchBar'
//import AddButton from '../../components/molecules/AddButton/AddButton'
import Cards from '../../components/molecules/Card/Card'
import { Typography } from '@mui/material'
import Reading from '../../components/molecules/Reading/Reading'
import Footer from '../../components/organisms/Footer/Footer'
import Explore from '../../components/organisms/Explore/Explore'
import SearchBar from '../../components/molecules/SearchBar/SearchBar'
import Banner from '../../components/organisms/Banner/Banner'
import BannerBlinkCards from '../../components/molecules/BannerBlinkCards/BannerBlinkCards'
import Typog from '../../components/atoms/Typography/Typog'

const EntrepreneurPage= () =>  {
  return (
    <React.Fragment>
      <Appbar/>
      {/* <Explore/> */}
      <br />
      <Banner/>
      
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      
      <SearchBar/>
      <br /><br /><br /><br /><br />
      
      <BannerBlinkCards/>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <Footer/>
    </React.Fragment>
  );
}

export default EntrepreneurPage;
// json-server --watch src/data/entre.json --port 4007



