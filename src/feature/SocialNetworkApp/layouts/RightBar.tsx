import {
  Avatar,
  AvatarGroup,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import theme from '../../EmployeeManagement/Theme';

export const RightBar = () => {
  return (
    <Container sx={{ paddingTop: theme.spacing(10) }}>
      <Typography
        sx={{ fontSize: 16, fontWeight: 500, color: '#555' }}
        gutterBottom
      >
        Online Friends
      </Typography>
      <AvatarGroup max={4} sx={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
            alt={''}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Container>
  );
};
