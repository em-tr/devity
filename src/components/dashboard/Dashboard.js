import React, { Component } from "react";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

import { Container, Grid } from "@mui/material";

class Dashboard extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Grid container sx={{ paddingTop: "20px" }} spacing={4}>
          <Grid item sm={12} md={6}>
            <ProjectList />
          </Grid>
          <Grid item sm={12} md={3} mdoffset={3}>
            <Notifications />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
