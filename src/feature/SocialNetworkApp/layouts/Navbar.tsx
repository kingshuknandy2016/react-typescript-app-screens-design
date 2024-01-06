import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { alpha } from '@mui/material/styles';
import theme from '../../EmployeeManagement/Theme';
// import './Navbar.css';
import { Cancel, Search } from '@mui/icons-material';
import image1 from './1.jpg';

const sxToolbar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'secondary.light',
};

const sxSearchbox = (open: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: '8px',
  width: '50%',
  [theme.breakpoints.down('sm')]: {
    display: open ? 'flex' : 'none',
    width: '70%',
  },
});

const sxIcons = (open: boolean) => ({
  display: !open ? 'flex' : 'none',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

const sxBadge = {
  marginRight: theme.spacing(2),
};

const searchButton = {
  marginRight: theme.spacing(2),
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
};

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar sx={sxToolbar}>
          <Typography
            variant="h6"
            sx={{
              display: 'block',
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            }}
          >
            Kingshuk Nandy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: 'none',
              [theme.breakpoints.down('sm')]: {
                display: 'block',
              },
            }}
          >
            K. N
          </Typography>
          <Box sx={sxSearchbox(open)}>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: 'white',
                marginLeft: theme.spacing(2),
                width: '100%',
              }}
            />

            <Cancel
              sx={{
                display: 'none',
                [theme.breakpoints.down('sm')]: {
                  display: 'block',
                },
              }}
              onClick={() => {
                setOpen(false);
              }}
            ></Cancel>
          </Box>
          <Box sx={sxIcons(open)}>
            <Search
              sx={searchButton}
              onClick={() => {
                setOpen(true);
              }}
            ></Search>
            <Badge badgeContent={2} color="secondary" sx={sxBadge}>
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={2} color="secondary" sx={sxBadge}>
              <NotificationsIcon color="action" />
            </Badge>
            <Avatar alt="Kingshuk" src={image1} />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
