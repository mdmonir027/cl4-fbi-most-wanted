import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid, Container, Divider } from "@material-ui/core";
import Header from "./components/header/Header";
import Criminal from "./components/Criminal/Criminal";
import Control from "./components/controll/Control";
import { useDataLayer } from "./store/DataLayer";
import { fetchCriminal } from "./store/action/action";

const App = () => {
  const [criminals, setCriminals] = useState([]);

  const [state, dispatch] = useDataLayer();

  useEffect(() => fetchCriminal()(dispatch), [dispatch]);
  useEffect(() => setCriminals(state.filteredCriminal), [state]);
  return (
    <div className="App">
      <Header />
      <Container minwidth="lg">
        <Control />
        <Divider />
        <Grid container spacing={4}>
          {criminals.map((criminal) => (
            <Grid item md="3">
              <Criminal />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
