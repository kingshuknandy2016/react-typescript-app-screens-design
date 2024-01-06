import {
  Alert,
  Box,
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import theme from '../../EmployeeManagement/Theme';

const ItemStyled = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
const AddComponent = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
    setOpen(false);
  };
  return (
    <Container>
      <Tooltip
        title="Add"
        aria-label="add"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Fab
          sx={{
            backgroundColor: '#c58dcd',
            position: 'fixed',
            bottom: 30,
            right: 30,
          }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container
          sx={{
            width: 500,
            height: 550,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
              width: '100vh',
              height: '100vh',
            },
          }}
        >
          <Box
            component="form"
            autoComplete="off"
            sx={{ padding: theme.spacing(2) }}
          >
            {/* <Box sx={{ marginBottom: theme.spacing(3) }}></Box> */}
            <ItemStyled>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                size="small"
                sx={{ width: '100%' }}
              ></TextField>
            </ItemStyled>
            <ItemStyled>
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                size="small"
                rows={4}
                defaultValue="Tell Your story"
                variant="outlined"
              />
            </ItemStyled>
            <ItemStyled>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted"></MenuItem>
              </TextField>
            </ItemStyled>
            <ItemStyled>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can Comment?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </ItemStyled>
            <ItemStyled>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginRight: '20px' }}
                onClick={() => {
                  setOpenAlert(true);
                }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </ItemStyled>
          </Box>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddComponent;
