import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  control: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const Control = () => {
  const classes = useStyle();
  return (
    <div className={classes.control}>
      <Grid container justify="space-between">
        <Grid>
          <h2>FBI Wanted Criminals</h2>
        </Grid>
        <Grid>
          <TextField placeholder="Search Here" type="search" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Control;
