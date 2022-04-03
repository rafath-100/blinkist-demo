import React from 'react'
import {Container, Grid, Box, Typography} from '@mui/material'
import Logos from '../../atoms/Logos/Logos'
import Blinklist from '../../../images/Blinklist.svg'
//import {Typog} from '../../atoms/Typography/Typog'
import { fontFamily } from '@mui/system'

function Footer() {
  return (
    <footer>
        <Box bgcolor="#F1F6F4">
            <Container maxWidth="lg">
                <Grid container spacing={4} marginLeft="40px">

                    <Grid item xs={12} sm={4.5}>
                        <Box style={{color:"#03314B"}}></Box>
                            <Box>
                                <Logos image={Blinklist}/>
                            </Box><br />
                            <Box>
                                <Typography gutterBottom variant='h5' color="#0365F2" fontFamily="Cera Pro" fontStyle="normal" fontSize="24px" fontWeight={500}
                                >
                                    Big ideas in small packages <br />Start learning now
                                </Typography>
                            </Box>

                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                        <Box style={{color:"#03314B", fontSize:"16px"}}>Editorial</Box><br />
                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Book lists</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">What is Nonfiction?</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">What to read next?</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Benefits of reading</Typography>
                            </Box>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                        <Box style={{color:"#03314B", fontSize:"16px"}}>Useful links</Box><br />
                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Pricing</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Blinkist business</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Gift cards</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">blinkist magaine</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Contact & help</Typography>
                            </Box>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                        <Box style={{color:"#03314B", fontSize:"16px"}}>Company</Box><br />
                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">About</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Careers</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">partners</Typography>
                            </Box>

                            <Box>
                                <Typography gutterBottom variant='h6' color="#6D787E">Code of Conduct</Typography>
                            </Box>
                            <br />
                    </Grid><br /><br />
                    
                    <Typography gutterBottom variant='subtitle1' color="#6D787E" component="div">© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
                    <br /><br />
                </Grid>
                <br />
            </Container>
        </Box>
    </footer>
  )
}

export default Footer