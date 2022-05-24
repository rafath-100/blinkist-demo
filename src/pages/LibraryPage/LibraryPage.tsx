import { Container, ThemeProvider, Typography, Grid, Button} from '@mui/material';
import React,{useState, useEffect} from 'react';
import Footer from '../../components/organisms/Footer/Footer';
import theme from '../../components/theme/theme';
import Appbar from '../../components/organisms/Appbar/Appbar';
import { useLocation} from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Tab, { TabProps } from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import CommonTabs from '../../components/molecules/CommonTab/CommonTab';

interface BookDetails{
  id:number;
  bookName:string;
  imag:string;
  author:string;
  status:string;
  time:string;

  bookLabel:string;
  added:string;
}
interface LibraryTabs extends TabProps{

}


const LibraryPage=({...props}:LibraryTabs)=> {
  const [book,setBook]=useState({});
  var thisBook:any = book;
  var bookState = thisBook.status;

  const location = useLocation();
  const index:any = location.state;

  const read = ()=>{
    bookState="Finished";
    fetch('http://localhost:4005/library/'+(index.id),{
        method: 'PATCH',
        body: JSON.stringify({
          "status": bookState
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => console.log(json));
  
  }

  const finish = ()=>{
    
    if(bookState!=="Read Again")
      bookState="Read Again";
    else if(bookState!=="Finished")
      bookState="Read Again"; 
    else
      bookState="n";
  fetch('http://localhost:4005/library/'+(index.id),{
      method: 'PATCH',
      body: JSON.stringify({
        "status": bookState
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  
    useEffect(()=>{
        fetch('http://localhost:4005/library/'+(index.id))
        .then(res =>res.json())
        .then((data:BookDetails) => {
                setBook(data)
            }
            )
    },[])
  
  const tabValues=[
    {
      'value':'0',
      'label':'Synopsis',
      'panelData':'Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.'
    },
    {
      'value':'1',
      'label':'Who is it for?',
      'panelData':''
    },
    {
      'value':'02',
      'label':'About the author',
      'panelData':''
    }
  ]
  return (
    <ThemeProvider theme={theme} >
      <Appbar />

      <Container maxWidth="md" sx={{marginTop:3,marginLeft:"22.5%", marginBottom:"4.5%"}}>
        <Typography variant='body1'>Get the key ideas from  </Typography>
        <Grid container sx={{marginTop:3}}>
          <Grid item xs={8}>
            <Typography sx={{'fontWeight':'bold'}} variant="h4" >
              {thisBook.bookName}
            </Typography>
            <Typography sx={{marginTop:2}} variant="h6" >
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant="body1" color="text.secondary" align="left" sx={{"marginTop":2}}>
              {thisBook.author}
            </Typography>
            <Typography variant="body1" color="text.secondary" align="left" sx={{"marginTop":2}}>
              <Grid container>
                <Grid item>
                  <AccessTimeIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                      {thisBook.time}
                  </Typography>
                </Grid>
              </Grid>
            </Typography>

            <Button href="/" onClick={read} sx={{marginRight:1,marginTop:8,color:'#6D787E'}} size='large' variant='outlined' color="secondary">
              Read Now
            </Button>
            
            <Button onClick={finish} href="/" sx={{marginRight:2,marginTop:8, marginLeft:3}} variant='contained' size='large' color="secondary">
              Finished Reading
            </Button>
            
            <Button sx={{marginLeft:2,marginTop:8,color:'#6D787E'}} variant='text' size='large' color="secondary">Send to Kindle</Button>
          </Grid>
          <Grid item xs={4}>
            <img src={thisBook.imag} alt='pic not found'/>
          </Grid>
        </Grid>


      {/* updated code */}
      <Box sx={{ width: '66%', typography: 'body1'}}>
      <CommonTabs child1={tabValues.map((tabValue)=>(
      <Tab value={tabValue.value} label={tabValue.label}/>
      )
      
      )} child2={tabValues.map((tabValue)=>(
        <TabPanel value={tabValue.value}>{tabValue.panelData}</TabPanel>
      ))}> 
     </CommonTabs>
     </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' , marginTop:"8%", marginBottom:"15%", width:"68%"}}></Box>
      </Container>
      
      <Footer />
    </ThemeProvider>
    );
}
export default LibraryPage;