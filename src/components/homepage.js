import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Box,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Image from "../assets/image.png";
import Menus from "./Menu";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Carousals from "./Carousal";
import Cards from "./Card";
import hockey from "../assets/hockey.jpg";
import download from "../assets/download.jpeg";
import down2 from "../assets/down2.jpeg";
import down from "../assets/down.jpeg";
import Championscard from "./Championscard";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/saima-ashraf-821a7a208/"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 15,
    color: "white",
    flexGrow: 1,
    display: "flex",
    "@media (max-width: 699px)": {
      display: "none",
    },
  },

  spacing: {
    marginLeft: theme.spacing(5),
  },
  flex: {
    marginLeft: theme.spacing(45),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    "@media (max-width: 699px)": {
      display: "none",
    },
  },
  appbar: {
    backgroundColor: "black",
    color: "white",
  },

  img: {
    flexGrow: 1,
    fontFamily: "Viaoda Libre",
  },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 885,
    opacity: 0.8,
    zIndex: -3,
  },
  textbody: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    fontSize: "3.8rem",
    fontWeight: "bolder",
    lineHeight: 1.4,
  },
  menu: {
    // "@media (max-width: 700px)": {
    //   display: "none",
    // },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  component: {
    backgroundColor: "black",
    height: "80%",
  },
  body: {
    color: "white",
    textAlign: "center",
    fontSize: "3.8rem",
    fontWeight: "bolder",
    lineHeight: 1.4,
    paddingTop: 90,
    marginBottom: "1rem",
  },
  some: {
    marginTop: "4rem",
  },
  gridDisplay: {
    margin: "0 0 0 10rem",
  },
  internalGridDisplay: {
    marginTop: "1rem",
 
  },
  threec: {
    backgroundImage: "linear-gradient(to right, #616161, #9e9e9e, #212121)",
  },
  championspage: {
    backgroundImage: `url(${hockey})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "3rem",
    // height: 885,
    opacity: 0.9,
    zIndex: -3,
  },
  paper: {
    backgroundImage: `url(${download})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    height: 300,
    opacity: 0.9,
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: "5rem",
    justifyContent: "space-between",
    position: "relative",
    // width: '100%'
  },
  div1: {
    width: "50%",
    background: "#000",
    opacity: 0.7,
    zIndex: 1,
    height: "90%",
    color: "white",
    paddingTop: "3rem",
  },
  button:{
    [theme.breakpoints.up('sm')]: {
        paddingLeft: '30rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5rem'
  },
  marginTop: "5rem"
  }
}));
const items = [
  {
    label: "game hub",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZs42nCLaIKw79P_2cZaOlU5ru8QO0ZQX0g&usqp=CAU",
  },
  {
    label: "Tournment",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU-7b2Rq5npsD6pvbyRh9ZS5n58kfdJsp9A&usqp=CAU",
  },
  {
    label: "game show",
    imgPath:
      "https://graphicriver.img.customer.envatousercontent.com/files/303685303/Image-Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=81d13160d6b9df339a3e1d3b4a942970",
  },
  {
    label: "Power of game",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlX2-QK84i-lnuh3Z7pJd5FNVuKN2tGYvkCjFuegYTW6818BIpd17SBNSXDUF2L99jwU&usqp=CAU",
  },
  {
    label: "Play game",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q-2eQF0N1UmmUOJBl1gYVdkstoDL_SdtF3GQSdYVB3GBz331SnVblJmVO1QBSeWpHG0&usqp=CAU",
  },
  {
    label: "Just Games",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7XGGbpyAPqjaKJVnFyNa-sxmV9fmYKBGdtiRClDc2CfSwkb2TGoD3LPHLOBNC2l9ITE&usqp=CAU",
  },
];

export default function Homepage() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <div className={classes.text}>
            <Typography>
              <Link href="#">HOME</Link>
              <Link href="#" style={{ marginLeft: 50 }}>
                GAMES
              </Link>
              <Link href="#" style={{ marginLeft: 50 }}>
                TOURNAMENTS
              </Link>
            </Typography>
          </div>
          <Menus className={classes.menu} />
          <div className={classes.img}>
            <Typography variant= 'h6'style={{ fontFamily: "Viaoda Libre" }}>
                GAME HUB
            </Typography>
          </div>
          <div className={classes.flex}>
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button>Login</Button>
              <Button variant="contained">JOIN FREE</Button>
            </ButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Paper className={classes.paperContainer}>
          <div className={classes.textbody}>
            <Typography variant="h2">FIND YOUR </Typography>
            <Typography variant="h2"> FAVOURITE TOURNAMENT</Typography>

            <Button variant="contained" color="primary">
              JOIN FREE
            </Button>
          </div>
        </Paper>
      </div>
      <div className={classes.component}>
        <Container>
          <div className={classes.body}>
            <Typography variant="h2">GAMES</Typography>

            <Typography variant="body1">
              Select a game and choose an available tournament
            </Typography>
          </div>
          <div className={classes.some}>
            <Carousals />
          </div>
        </Container>
      </div>
      <div className={classes.threec}>
        <div className={classes.body}>
          <Typography variant="h2">FEATUREd TOURNAMENTS</Typography>

          <Typography variant="h5">Hot and Trending tournaments</Typography>
        </div>
        <Grid container>
          {items.map((tile) => (
            <Grid
              sm={12}
              md={12}
              lg={6}
              item
              className={classes.internalGridDisplay}
              key={tile.label}
            >
              <GridList
                cellHeight={230}
              >
                <GridListTile key={tile.imgPath}>
                  <img src={tile.imgPath} alt={tile.label} />
                  <GridListTileBar
                    title={tile.label}
                    titlePosition="top"
                    actionIcon={
                      <IconButton
                        aria-label={`star ${tile.label}`}
                        className={classes.icon}
                      >
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  />
                </GridListTile>
              </GridList>
            </Grid>
          ))}
           <div className={classes.button}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ fontWeight: "bolder" }}
          >
            Read More
          </Button>
        </div>
        </Grid>
       
        <div style={{ marginLeft: "5rem", marginTop: "7rem", color: "white" }}>
          <Typography variant="h2">STATICS</Typography>
          <div style={{ paddingBottom: "5rem", paddingTop: "2rem" }}>
            <Cards />
          </div>
        </div>
      </div>
      <div>
        <section className={classes.championspage}>
          <Typography variant="h2" className={classes.body}>
            CHAMPIONS OF THE WEEK
          </Typography>
          <div style={{ padding: "0 0 0 8rem" }}>
            <Championscard />
          </div>
        </section>
      </div>
      <div className={classes.threec} style={{ paddingBottom: "10rem" }}>
        <div className={classes.body}>
          <Typography variant="h2">GAME HUBNEWS</Typography>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <div className={classes.div1}>
                  <Typography variant="h5">FIFA FRIDAY EVENTS</Typography>
                  <Typography variant="h6">MAy 2020</Typography>
                  <Typography variant="h6">
                    Prize evenet for winners Killrace tournaments, May 2020
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    style={{ fontWeight: "bolder" }}
                  >
                    Read More
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: `url(${down2})` }}
              >
                <div className={classes.div1}>
                  <Typography variant="h5">FIFA FRIDAY EVENTS</Typography>
                  <Typography variant="h6">MAy 2020</Typography>
                  <Typography variant="h6">
                    Prize evenet for winners Killrace tournaments, May 2020
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    style={{ fontWeight: "bolder" }}
                  >
                    VIEW ALL
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: `url(${down})` }}
              >
                <div className={classes.div1}>
                  <Typography variant="h5">FIFA FRIDAY EVENTS</Typography>
                  <Typography variant="h6">MAy 2020</Typography>
                  <Typography variant="h6">
                    Prize evenet for winners Killrace tournaments, May 2020
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    style={{ fontWeight: "bolder" }}
                  >
                    View All
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          marginTop: "1.5rem",
        }}
      >
        <Grid container justify="space-evenly" spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography varinat="h3">COMPETE COMPANY</Typography>
            <Typography varinat="h5">About Us</Typography>
            <Typography varinat="h5">Contact Us</Typography>
            <Typography varinat="h5">Terms and Conditions</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Typography varinat="h3">COMPANY</Typography>
            <Typography varinat="h5">Create a Ticket</Typography>
            <Typography varinat="h5">Contact Us</Typography>
            <Typography varinat="h5">FAQ</Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
}
