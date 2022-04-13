import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RenderBooks from '../RenderBooks/RenderBooks';
import CommonTabs from '../../molecules/CommonTab/CommonTab';

const LibraryTabs = ()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabValues=[
    {
      'value':'0',
      'label':'Currently Reading',
      'panelData':''
    },
    {
      'value':'1',
      'label':'Finished',
      'panelData':''
    }
  ]
  return (
    <Box sx={{ width: '50%', marginLeft:"23%", typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="primary" indicatorColor="primary">
            <Tab label="Currently Reading" value="1" />
            <Tab label="Finished" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><RenderBooks bookLabel="Finished" status='Finished' trending='' justAdded='' featured=''/></TabPanel>
      <TabPanel value="2"><RenderBooks bookLabel="Read Again" status='Read Again' trending='' justAdded='' featured=''/></TabPanel>
      </TabContext>
    </Box>
  );
}
export default LibraryTabs;