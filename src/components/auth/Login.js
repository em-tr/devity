import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container } from "@mui/system";

const Login = () => {
  return (
    <Container maxWidth="xl">
      <header className="App-header">
        <h1>
          Welcome back, <br />
          Emily
        </h1>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosRoundedIcon />}
          disableElevation
        >
          Login
        </Button>
      </header>
    </Container>
  );
};

export default Login;
