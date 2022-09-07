import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Chip
        label="important"
        size="small"
        color="warning"
        icon={<PriorityHighIcon />}
      />
      <Typography variant="h5" component="div">
        Project title
      </Typography>
      <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
        Project Id: sdkf94ri9ksdf
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        asperiores voluptate
      </Typography>
      <Typography sx={{ mt: 2, fontSize: 12 }} color="text.secondary">
        Created by Emily Truong
        <br />
        1st August 2022, 4 pm
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Project() {
  return (
    <Box sx={{ minWidth: 190 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
