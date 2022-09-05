import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Container } from "@mui/system";

const Register = () => {
  return (
    <Container maxWidth="xl">
      <header className="App-header">
        <h1>
          Develop faster
          <br />
          with devity your
          <br />
          intuitive project <br />
          management tool
        </h1>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosRoundedIcon />}
          disableElevation
        >
          Get started
        </Button>
      </header>
    </Container>
  );
};

export default Register;
