import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { filterCriminal } from "../../store/action/action";
import { useDataLayer } from "../../store/DataLayer";

const useStyle = makeStyles(() => ({
  control: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const Control = () => {
  const classes = useStyle();
  const [search, setSearch] = useState("");
  const dispatch = useDataLayer()[1];
  useEffect(() => {
    filterCriminal(search)(dispatch);
  }, [search, dispatch]);
  return (
    <div className={classes.control}>
      <Grid container justify="space-between">
        <Grid>
          <h2>FBI Wanted Criminals</h2>
        </Grid>
        <Grid>
          <TextField
            placeholder="Search Here"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Control;
