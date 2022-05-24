import React from 'react'
import Appbar from '../../components/organisms/Appbar/Appbar'
import {Link, Box} from '@mui/material'
import Footer from '../../components/organisms/Footer/Footer'
import SearchBar from '../../components/molecules/SearchBar/SearchBar'
import Banner from '../../components/molecules/Banner/Banner'
import Typog from '../../components/atoms/Typography/Typog'
import RenderBooks from '../../components/organisms/RenderBooks/RenderBooks'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  heading:{
    fontFamily:"Cera Pro",
    fontSize:"24px",
    fontWeight:"700",
    lineHeight:"30px",
    fontStyle:"normal"
    
    
  }
})

const EntrepreneurPage= () =>  {
  const style = useStyles();
  return (
    <React.Fragment>
      

      <Appbar/>
      
      <br />
      <Banner/><br />
      
      <SearchBar/>
      

      <Box sx={{ width: '880px'}} style={{marginLeft:"22.3%",marginTop:"1.5%", marginBottom:"200px"}}>
       
        <Box>
        <Typog children="Trending blinks" variant="h5" color="#03314B" className={style.heading}/>
        
          <RenderBooks  bookLabel="+ Add to Library" status='' trending='yes' justAdded='' featured=''/>
        </Box>
      
        <Box style={{marginTop:"70px"}}>
        <Typog children="Just added" variant="h5" color="#03314B" className={style.heading} />
        <Link href="/library" underline="none">
          <RenderBooks  bookLabel="+ Add to Library" status=''trending="" justAdded="yes" featured=""/>
          </Link>
        </Box>
      
        <Box style={{marginTop:"70px"}}>
        <Typog children="Featured audio blinks" variant="h5" color="#03314B" className={style.heading}/>
          <RenderBooks  bookLabel="+ Add to Library" status='' trending="" justAdded="" featured="yes"/> 
          
        </Box>
        
      </Box>
      
      <Footer/>
    </React.Fragment>
  );
}

export default EntrepreneurPage;
