import React from "react";

import { Chip, Container, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const ProjectDetails = () => {
  return (
    <Container maxWidth="xl">
      <Chip
        label="important"
        size="small"
        color="warning"
        icon={<PriorityHighIcon />}
      />
      <Typography variant="h1">Project title </Typography>
      <Typography variant="h3">Description</Typography>
      <Typography variant="body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi
        atque aliquid blanditiis ipsa cupiditate impedit modi necessitatibus
        minus quod. Iusto nostrum cumque voluptatum quas accusamus earum
        similique et veniam! <br /> Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Debitis neque rem earum suscipit, unde vitae eligendi
        eos magnam culpa vel consequatur eius, id assumenda, in cupiditate
        perferendis! Nesciunt, omnis alias.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Created by Emily Truong <br />
        1st August 2022, 4 pm
      </Typography>
    </Container>
  );
};

export default ProjectDetails;
