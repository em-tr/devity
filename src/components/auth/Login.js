import React, { Component } from "react";

import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container } from "@mui/system";
import {
  Stack,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

class Login extends Component {
  state = {
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
              <Typography variant="h4">Login</Typography>
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
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Remember me"
                />
              </FormGroup>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon />}
                disableElevation
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <header className="App-header">
              <h1>
                Welcome back, <br />
                Emily
              </h1>
            </header>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
