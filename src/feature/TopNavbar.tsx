import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SocialNetworkApp } from './SocialNetworkApp/SocialNetworkApplication';
import LoginPage from './EmployeeManagement/pages/LoginPage';
import EmployeeManagement from './EmployeeManagement';
import RegistrationPage from './EmployeeManagement/pages/RegistrationPage';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
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
        <Box sx={{ padding: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const tabProps = (index: number): { id: string; 'aria-controls': string } => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{ backgroundColor: '#ddf2f9' }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login Page Employee App" {...tabProps(0)} />
          <Tab label="Registration Page Employee App" {...tabProps(1)} />
          <Tab label="Employee Page" {...tabProps(2)} />
          <Tab label="Social Networking App" {...tabProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoginPage></LoginPage>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegistrationPage></RegistrationPage>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EmployeeManagement></EmployeeManagement>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SocialNetworkApp></SocialNetworkApp>
      </CustomTabPanel>
    </Box>
  );
}
