import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Adc from './Adc';
import Slider from './Slider'
import PrimarySearchAppBar from './Navbar';
import Arun from './Arun';
import Vagm from './Vagm';
import Abhi from './Abhi';
import Spell from './Spell';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Labs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <>
   <Box sx={{ display: 'flex' }} ><Slider/>
      <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Annual Debate Competion" style={{fontFamily:"serif"}} {...a11yProps(0)} />
          <Tab label="ARUNUDAY"style={{fontFamily:"serif"}} {...a11yProps(1)} />
          <Tab label="VAGMITA" style={{fontFamily:"serif"}} {...a11yProps(2)} />
          <Tab label="SPELLCZAR"style={{fontFamily:"serif"}} {...a11yProps(3)} />


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
        <Adc/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Arun/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
         <Vagm/>
      </CustomTabPanel>
     
      <CustomTabPanel value={value} index={3}>
        <Spell/>
      </CustomTabPanel>
     
     
    </Box></Box>
   </>
    
  )
}
