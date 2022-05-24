import  React,{useEffect, useState} from 'react';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import CommonTabs from '../CommonTab/CommonTab';
import { Grid, Link, GridProps } from '@mui/material';

interface ExploreDataDetails{
  path:string;
  name:string;
}
interface IGridProps extends GridProps{

}


const Explore = ({...props}:IGridProps)=> {
  const [exploreData,setExploreData]=useState([]);

  useEffect(()=>{
      fetch('http://localhost:4005/icons')
      .then(res =>res.json())
      .then(data => {
        setExploreData(data)})
  },[])
  
  const ExtendNav=({...props}:IGridProps)=>{
    return(
      <Grid container spacing={2}>
      {exploreData.map((edata:ExploreDataDetails)=>(
        <Grid item xs={12} md={8} lg={4} >
          <Grid container >
            <Grid item>
              <img src={edata.path} alt=''/>
            </Grid>
            <Grid item>
              <Link sx={{marginLeft:1, color:"black"}} underline='none' href='/Entrepreneur'>{edata.name}</Link>
            </Grid>
          </Grid>
        </Grid>
      )
      )}
      </Grid>
    )
  }
    const tabValues=[
      {
        'value':'0',
        'label':'Explore by category',
        'panelData':<ExtendNav/>
      },
      {
        'value':'1',
        'label':'See recently added titles',
        'panelData':''
      },
      {
        'value':'2',
        'label':'See popular titles',
        'panelData':''
      }
    ]
    return (
      <CommonTabs
        child1={tabValues.map((tabValue)=>
        (
          <Tab sx={{width:350, marginLeft:10}} value={tabValue.value} label={tabValue.label}/>
        ))} 
        child2={tabValues.map((tabValue)=>
        (
          <TabPanel sx={{"marginLeft":25}} value={tabValue.value}>{tabValue.panelData}</TabPanel>
        ))} margin={20}> 
       </CommonTabs>
    );
  }
export default Explore;