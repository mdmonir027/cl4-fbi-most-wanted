import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";

import GetAppIcon from "@material-ui/icons/GetApp";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Criminal.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Criminal = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title="Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://images.pexels.com/photos/289323/pexels-photo-289323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.footer}>
        <IconButton aria-label="add to favorites">
          <GetAppIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ArrowForwardIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Criminal;
