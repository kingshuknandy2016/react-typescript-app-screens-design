import React, { useEffect, useState } from 'react';
import { Grid, ThemeProvider } from '@mui/material';
// eslint-disable-next-line import/namespace
import { NavBar } from './feature/SocialNetworkApp/layouts/Navbar';
import customTheme from './feature/EmployeeManagement/Theme';
import { LeftBar } from './feature/SocialNetworkApp/layouts/LeftBar';
import { RightBar } from './feature/SocialNetworkApp/layouts/RightBar';
import theme from './feature/EmployeeManagement/Theme';
import { Feed } from './feature/SocialNetworkApp/layouts/Feed';
import Post from './feature/SocialNetworkApp/layouts/Post';
import Add from './feature/SocialNetworkApp/layouts/Add';
import { SocialNetworkApp } from './feature/SocialNetworkApp/SocialNetworkApplication';
import TopNavBar from './feature/TopNavbar';

export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <TopNavBar></TopNavBar>
        {/* <SocialNetworkApp></SocialNetworkApp> */}
      </ThemeProvider>
    </React.Fragment>
  );
};
