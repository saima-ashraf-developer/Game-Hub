import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Avatar, Grid } from "@material-ui/core";
import img from "../assets/img.jpeg";
import dwn from "../assets/dwn.jpg";
import i from "../assets/i.jpeg";
import intro from "../assets/intro.jpg";
import pz from "../assets/pz.jpeg";
import prize from "../assets/prize.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30rem",
    backgroundColor: "black ",
  },
  media: {
    height: 150,
  },
  card: {
    flexGrow: 1,
    display: "flex",
    // margin: "5rem",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  avator: {
    width: "100px",
    height: "100px",
    position: "absolute",
    top: "-50px",
    left: "40%",
    transform: "translateX(-50%)",
  },
  cards: {
    width: "24rem",
    height: "30rem",
    backgroundColor: "black",
    zIndex: 1,
    borderTop: "10px solid #fff",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "10px 10px 10px #fff",
    marginBottom: "2rem",
    // position: "relative",

    [theme.breakpoints.down('lg')]: {
      marginBottom: "2rem",
    }
  },
}));

export default function Championscard() {
  const classes = useStyles();

  return (
    <Grid container style={{ padding: "6rem 0 0 2rem" }}>
      <Grid item sm={12} lg={4} md={6}>
        <div className={classes.card}>
        <Card className={classes.cards}>
          <Avatar alt="Remy Sharp" src={dwn} className={classes.avator} />
          <CardContent
            style={{
              color: "white",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h4">
              Tommy 457
            </Typography>
            <Typography gutterBottom variant="h5">
              Mwerzone Winner
            </Typography>
            <img
              style={{ height: "70px", width: "70px", marginBottom: "4rem" }}
              src={img} alt=''
            />
            <Typography variant="h4" color="primary">
              $100 WON
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button color="primary" variant="contained">
              View Profile
            </Button>
          </CardActions>
        </Card>
        </div>
      </Grid>

      <Grid item sm={12} lg={4} md={6}>
      <div className={classes.card}>
        <Card className={classes.cards}  style={{ borderTop: "10px solid #f57f17",
      marginTop: '-2rem'}}>
          <Avatar alt="Remy Sharp" src={intro} className={classes.avator} />
          <CardContent
            style={{
              color: "white",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h4">
              Avera
            </Typography>
            <Typography gutterBottom variant="h5">
              Fifa 21 Winner
            </Typography>
            <img
              style={{ height: "70px", width: "70px", marginBottom: "4rem" }}
              src={pz} alt=''
            />
            <Typography variant="h4" color="primary">
              $1000 WON
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button color="primary" variant="contained">
              View Profile
            </Button>
          </CardActions>
        </Card>
        </div>
      </Grid>

      <Grid item sm={12} lg={4} md={6}>
      <div className={classes.card}>
        <Card className={classes.cards} style={{ borderTop: "10px solid #fdd835"}}>
          <Avatar alt="Remy Sharp" src={i} className={classes.avator} />
          <CardContent
            style={{
              color: "white",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h4">
              Dipty Zint
            </Typography>
            <Typography gutterBottom variant="h5">
              Winner
            </Typography>
            <img
              style={{ height: "70px", width: "70px", marginBottom: "4rem" }}
              src={prize} alt=''
            />
            <Typography variant="h4" color="primary">
              $100 WON
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button color="primary" variant="contained">
              View Profile
            </Button>
          </CardActions>
        </Card>
        </div>
      </Grid>
    </Grid>
  );
}
