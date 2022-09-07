import React, { Component } from "react";

import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container } from "@mui/system";
import { Stack, Grid, TextField, Typography } from "@mui/material";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
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
              <Typography variant="h4">Register</Typography>
              <TextField
                required
                id="firstname"
                type="text"
                label="Firstname"
                placeholder="John"
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                required
                id="lastname"
                type="text"
                label="Lastname"
                placeholder="Doe"
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                required
                id="email"
                type="email"
                label="E-Mail"
                placeholder="youremail@devity.com"
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                required
                id="password"
                type="password"
                label="Password"
                placeholder="yourpassword"
                onChange={this.handleChange}
                InputLabelProps={{ shrink: true }}
              />

              <Button
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon />}
                disableElevation
                type="submit"
              >
                Get started
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <header className="App-header">
              <h1>
                Develop faster <br />
                with devity, your <br />
                project management tools <br />
                Emily
              </h1>
            </header>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Register;
