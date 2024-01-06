import { Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import customTheme from '../../Theme';
import { NavBar } from './layouts/Navbar';
import { LeftBar } from './layouts/LeftBar';
import { RightBar } from './layouts/RightBar';
import Add from './layouts/Add';
import { Feed } from './layouts/Feed';

export const SocialNetworkApp = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <NavBar></NavBar>
        <Grid container>
          <Grid item sm={2} xs={2}>
            <LeftBar></LeftBar>
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed></Feed>
          </Grid>
          <Grid
            item
            sm={3}
            sx={{
              [customTheme.breakpoints.down('sm')]: {
                display: 'none',
              },
            }}
          >
            <RightBar></RightBar>
          </Grid>
        </Grid>
        <Add></Add>
      </ThemeProvider>
    </React.Fragment>
  );
};
