/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  alpha,
} from '@mui/material';
import cover from '../images/employeeManagement.png';
import theme from '../Theme';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Google } from '@mui/icons-material';

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Grid container>
        <Grid item sm={6} xs={2}>
          <Box sx={{ height: '100vh', backgroundImage: `url(${cover})` }}></Box>
        </Grid>
        <Grid item sm={6} xs={10}>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              padding: theme.spacing(2),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '300px',
            }}
          >
            <Avatar
              sx={{
                margin: 1,
                bgcolor: alpha(theme.palette.primary.dark, 0.8),
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              sx={{ textAlign: 'center' }}
              component="h1"
              variant="h5"
            >
              Login
            </Typography>
            <Box
              sx={{
                display: 'flex',
                width: '60%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                rows={5}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                sx={{ borderRadius: '60%' }}
                // value={username}
                // onChange={onChangeHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={password}
                // onChange={onChangeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  width: '60%',
                  backgroundColor: '#7084e8',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#3f5df3',
                  },
                }}
              >
                Sign In
              </Button>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Divider
                  variant="fullWidth"
                  sx={{
                    backgroundColor: '#7084e8',
                    height: '1px',
                    width: '35%',
                  }}
                ></Divider>
                <Typography sx={{ width: '30%', textAlign: 'center' }}>
                  Or login with
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{
                    backgroundColor: '#7084e8',
                    height: '1px',
                    width: '35%',
                  }}
                ></Divider>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  color: '#7084e8',
                  '&:hover': {
                    backgroundColor: '#dfe3f7',
                    color: '#959dbc',
                  },
                }}
              >
                <Google></Google>
                <Typography
                  sx={{
                    marginLeft: '5px',
                  }}
                  variant="button"
                >
                  Login With Google
                </Typography>
              </Button>
              <Typography>
                Don't have an account?{' '}
                <Link sx={{ textDecoration: 'none' }} href="#">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default LoginPage;
