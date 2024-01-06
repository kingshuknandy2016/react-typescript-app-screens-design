import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import theme from '../../EmployeeManagement/Theme';

interface PostProps {
  title: string;
  imagePath: string;
}
const Post = (props: PostProps) => {
  return (
    <Card sx={{ marginBottom: theme.spacing(5) }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: '250px',
            [theme.breakpoints.down('sm')]: {
              height: 150,
            },
          }}
          image={props.imagePath}
          title="My Post"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed
            eum distinctio, at sapiente quam asperiores nemo quaerat, eaque nisi
            fugit molestiae aut iste delectus culpa doloremque vel quia
            suscipit? Aperiam atque, consequuntur incidunt omnis numquam
            recusandae commodi vero maxime eos asperiores iusto autem expedita,
            quo id, nam voluptate. Dignissimos nam excepturi quo laborum tempora
            eaque ipsa molestiae repellendus. Suscipit! Nemo, ex asperiores amet
            minima velit dolor quasi ab ipsum quidem nulla aut. Eius earum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
