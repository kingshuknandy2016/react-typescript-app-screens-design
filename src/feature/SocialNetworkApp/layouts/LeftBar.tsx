import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  Bookmark,
  Home,
  List,
  Logout,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@mui/icons-material';
import theme from '../../EmployeeManagement/Theme';
import { styled } from '@mui/material/styles';

const sxContainer = {
  paddingTop: theme.spacing(10),
  backgroundColor: '#c58dcd',
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'white',
    color: '#d81bcd',
    border: '1px solid #999',
  },
  color: 'white',
  position: 'sticky',
  top: 0,
};

const StyledItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const sxIcon = {
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
};

export const LeftBar = () => {
  return (
    <Container sx={sxContainer}>
      <StyledItemBox>
        <Home sx={sxIcon}></Home>
        <StyledTypography>Homepage</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Person sx={sxIcon}></Person>
        <StyledTypography>Friends</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <List sx={sxIcon}></List>
        <StyledTypography>Lists</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <PhotoCamera sx={sxIcon}></PhotoCamera>
        <StyledTypography>Photo Camera</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <PlayCircleOutline sx={sxIcon}></PlayCircleOutline>
        <StyledTypography>Videos</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <TabletMac sx={sxIcon}></TabletMac>
        <StyledTypography>Apps</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Bookmark sx={sxIcon}></Bookmark>
        <StyledTypography>Collections</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Storefront sx={sxIcon}></Storefront>
        <StyledTypography>Market Place</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Settings sx={sxIcon}></Settings>
        <StyledTypography>Settings</StyledTypography>
      </StyledItemBox>
      <StyledItemBox>
        <Logout sx={sxIcon}></Logout>
        <StyledTypography>Logout</StyledTypography>
      </StyledItemBox>
    </Container>
  );
};
