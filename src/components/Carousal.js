import React from "react";
import Carousal from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 510, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 },
];

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
const useStyles = makeStyles({
  media: {
    height: "100%",
    paddingTop: "56.25%",
  },
  height: {
    height: "25rem",
    marginLeft: "2rem",
    width: "15rem",
  },
});

export default function Carousals() {
  const classes = useStyles();

  return (
    <div>
      <Carousal breakPoints={breakPoints}>
        {items.map((tile) => (
          <Card key={tile.imgPath} className={classes.height}>
            <CardMedia
              className={classes.media}
              image={tile.imgPath}
              title={tile.label}
            />
          </Card>
        ))}
      </Carousal>
    </div>
  );
}
