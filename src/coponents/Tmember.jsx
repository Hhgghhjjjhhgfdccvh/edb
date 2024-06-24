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
import Abhi from './Abhi';
import Final from './Final';

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
        <Box sx={{ p: 4 }}>
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

export default function Tmember() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <>
   <Box sx={{ display: 'flex' }} ><Slider/>
      <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 0, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} sx={{boxShadow:2,fontWeight:'fontWeightLight'}}>
          <Tab  label="Final Year" className='fy' {...a11yProps(0)} />
          <Tab label="Third Year" className='ty' {...a11yProps(1)} />
          <Tab label="Second Year" className='sy' {...a11yProps(2)} />
          


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
        <Final/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Arun/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='event'>
          <h1 className='abou1'>sdjfkjd otioprt ccvbnb wefg poeujgkdng vcbnkjdfgiu skdfjiur wojekgn lklfk wioueioj</h1>
        </div>
      </CustomTabPanel>
     
      <CustomTabPanel value={value} index={3}>
        <div className='event'>
          <h1 className='abou1'>sdjfkjd otioprt ccvbnb wefg poeujgkdng vcbnkjdfgiu skdfjiur wojekgn lklfk wioueioj</h1>
        </div>
      </CustomTabPanel>
     
     
    </Box></Box>
   </>
    
  )
}
