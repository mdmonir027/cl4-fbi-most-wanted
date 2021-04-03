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

const Criminal = ({ criminal }) => {
  const classes = useStyles();

  const subString = (value, length = 50) => {
    if (!value) return;
    if (value.length > length) return `${value.substr(0, length)}...`;
    return value;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={subString(criminal.title, 18)}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={criminal.images[0].original}
        title={classes.title}
      />
      <CardContent style={{ height: 40 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {subString(criminal.description)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.footer}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => (window.location = criminal.files[0].url)}
        >
          <GetAppIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() =>
            (window.location = `https://www.fbi.gov/${criminal.path}`)
          }
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Criminal;
