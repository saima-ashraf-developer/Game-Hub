import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import images from "../assets/images.jpeg";
import imagess from "../assets/img.jpeg";
import pic from "../assets/pic.jpeg";

const useStyles = makeStyles({
  root: {
    width: "30rem",
    backgroundColor: "black",
  },
  media: {
    height: 150,
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={images}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h5" color="primary" component="p">
                  Champions Crowned
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary" variant="outlined">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imagess}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h5" color="primary" component="p">
                  Winnings Paid
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary" variant="outlined">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pic}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h5" color="primary" component="p">
                  Active Tournaments
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary" variant="outlined">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
