import React from 'react'
import {Container, Grid, Box, Link, Typography, Tabs, Tab} from '@mui/material'
import Logos from '../../atoms/Logos/Logos'
import entreprenuer from '../../../images/entreprenuer.svg'
import career from '../../../images/career.svg'
import communication from '../../../images/communication.svg'
import corporate from '../../../images/corporate.svg'
import economics from '../../../images/economics.svg'
import education from '../../../images/education.svg'
import health from '../../../images/health.svg'
import history from '../../../images/health.svg'
import marketing from '../../../images/marketing.svg'
import money from '../../../images/money.svg'
import motivation from '../../../images/motivation.svg'
import nature from '../../../images/nature.svg'
import personal from '../../../images/personal.svg'
import politics from '../../../images/politics.svg'
import productivity from '../../../images/productivity.svg'
import psychology from '../../../images/psychology.svg'
import relationship from '../../../images/relationship.svg'
import science from '../../../images/science.svg'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Explore = ()=> {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    }
    return (
        <div>
            <Box
              px={{ xs: 3, sm: 10 }}
              py={{ xs: 5, sm: 10 }} 
              bgcolor="#F1F6F4"
              color="white"
              height={440}
              width="100%"
        
            >
            <Container maxWidth="lg">
              <Grid container spacing={4}>
              <Box sx={{ width: '915px'}} style={{marginLeft:"2%"}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Explore by category" {...a11yProps(0)} sx={{marginRight:"190px", padding:"0px"}}/>
                        <Tab label="See recently added titles" {...a11yProps(1)} sx={{marginRight:"130px"}}/>
                        <Tab label="See popular titles" {...a11yProps(2)} />
                
                    </Tabs>
                </Box>
                </Box>
                <Grid item xs={12} sm={4} >
                  {/* <Box color="#116BE9">Explore by category</Box> */}
                  <Box style={{display:"flex"}}>
                    <Logos image={entreprenuer}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    
                    Entrepreneurship
                    </Link>
                  </Box>
                  <br />

                  <Box style={{display:"flex"}}>
                    <Logos image={science}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Science
                    </Link>
                  </Box>
                  <br />

                  <Box style={{display:"flex"}}>
                    <Logos image={economics}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Economics
                    </Link>
                  </Box>
                  <br />

                  <Box style={{display:"flex"}}>
                  <Logos image={corporate}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Corporate Culture
                    </Link>
                  </Box>
                  <br />

                  <Box style={{display:"flex"}}>
                  <Logos image={psychology}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Psychology
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={nature}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Nature & Environment
                    </Link>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={4} >
                  {/* <Box color="#03314B">See recently added titles</Box>
                  <br /> */}
                  <Box style={{display:"flex"}}>
                  <Logos image={politics}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Politics
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={health}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Health & Nutrition
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={history}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    History
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={motivation}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Motivation & Inspiration
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={productivity}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Productivity
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={career}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Career & Success
                    </Link>
                  </Box>

                </Grid>

                <Grid item xs={12} sm={4} >
                  {/* <Box color="#03314B">See popular titles</Box>
                  <br /> */}
                  <Box style={{display:"flex"}}>
                  <Logos image={marketing}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Marketing & Sales
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={personal}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Personal Development
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={communication}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Communication Skills
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={money}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Money & Investments
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={relationship}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Sex & Relationship
                    </Link>
                  </Box>
                  <br />
                  <Box style={{display:"flex"}}>
                  <Logos image={education}/>
                    <Link href="/" color="#6D787E" underline="none" marginLeft={1}>
                    Education
                    </Link>
                  </Box>
                  <br />
                </Grid>
                </Grid>
            </Container>
          </Box>
        </div>
    );
}
export default Explore;