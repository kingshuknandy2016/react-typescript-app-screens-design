import React from 'react';
import { Container } from '@mui/material';
import Post from './Post';

export const Feed = () => {
  return (
    <Container>
      <Post
        title="First Post"
        imagePath="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Post
        title="First Post"
        imagePath="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <Post
        title="First Post"
        imagePath="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </Container>
  );
};
