import { ThemeProvider } from '@emotion/react';
import theme from './Theme';
import NavBar from './layouts/Navbar';
import { Grid } from '@mui/material';
import SideBar from './layouts/Sidebar';
import EmployeeDashboard from './pages/EmployeePage';

const EmployeeManagement = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar name={'Kingshuk Nandy'}></NavBar>
      <Grid container>
        <Grid item sm={3}>
          <SideBar></SideBar>
        </Grid>
        <Grid item sm={9}>
          <EmployeeDashboard></EmployeeDashboard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default EmployeeManagement;
