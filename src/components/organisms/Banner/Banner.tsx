import React from 'react'
import BannerImage from '../../../images/BannerImage.png'
import Logos from '../../atoms/Logos/Logos'
import {Container, Grid, Box, Link, Tabs, Tab, Typography} from '@mui/material'
import Typog from '../../atoms/Typography/Typog'
import { style } from '@mui/system'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  para1:{
    // position: "absolute",
    left: "4.93%",
    right: "60.09%",
    top: "17.05%",
    bottom: "48.86%",
    color: "#03314B",
    font:"Cera Pro",
    size:"36px",
    fontWeight:"700",

  },
  para2:{
    position: "absolute",
    left: "4.93%",
    right: "44.52%",
    top: "56.82%",
    bottom: "17.05%",
    font:"Cera Pro",
    fontFamily: 'Cera Pro',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "23px",

  },
  bannerImage:{
    position: "absolute",
    left: "67.76%",
    right: "4.93%",
    top: "6.44%",
    bottom: "6.44%",
  }
})
const Banner = () => {
  const style = useStyles();
  return (
    <div>
        <Box
              px={{ xs: 8, sm: 7 }}
              py={{ xs: 8, sm: 2 }} 
              bgcolor="#F1F6F4"
              color="white"
              height={264}
              width={912}
              position="absolute"
              marginLeft="23%"
        
            >
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} >
                  <Box style={{position:"absolute",left: "4.93%", right:"60.09%",top:"17.05%",bottom:"48.86%"}}>
        
                    <Typog children="Explore Books on entrepreneurship" variant="h4" color="#03314B" className={style.para1}/>
                    
                  </Box>

                  <Box>
                    <Typog children="Everything you need to know about thriving on a 
                            shoestring budget, making your first million, and hiring right from the start." 
                            variant="subtitle1" className={style.para2} color="#6D787E"/>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} >
                  <Box style={{display:"flex", marginLeft:"40%"}}>
        
                    <Logos image={BannerImage} className={style.bannerImage}/>
                    
                  </Box>
                </Grid>


              </Grid>
            </Container>
        </Box>

        {/* <Logos image={BannerImage}/> */}
    </div>
  )
}

export default Banner