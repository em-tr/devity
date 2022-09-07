import React, { Component } from "react";

import ProjectPriority from "./ProjectPriority";

import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container } from "@mui/system";
import { Stack, Grid, TextField, Typography } from "@mui/material";

class NewProject extends Component {
  state = {
    title: "",
    description: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <Container maxWidth="xl" sx={{ paddingTop: "20px" }}>
        <Grid container spacing={4}>
          <Grid item sm={4}>
            <Stack
              component="form"
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="off"
              spacing={2}
              mr={10}
            >
              <Typography variant="h4">New Project</Typography>
              <TextField
                required
                id="title"
                type="text"
                label="Title"
                placeholder="Project title"
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                id="description"
                label="Description"
                placeholder="Project description"
                multiline
                rows={2}
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <ProjectPriority handleChange={this.handleChange} />
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon />}
                disableElevation
                type="submit"
              >
                NewProject
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default NewProject;
