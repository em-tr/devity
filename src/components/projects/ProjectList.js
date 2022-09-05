import React from "react";

import Project from "./Project";

import { Grid, Typography } from "@mui/material";

const ProjectList = () => {
  return (
    <>
      <Typography variant="h6" sx={{ paddingBottom: "15px" }}>
        Project List
      </Typography>
      <Grid container spacing={3} alignContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <Project />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Project />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Project />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Project />
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectList;
