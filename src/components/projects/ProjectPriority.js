import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProjectPriority = ({ handleChange }) => {
  const [age, setAge] = React.useState("");

  // const _handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="project-priority-label">Project priority</InputLabel>
        <Select
          labelId="project-priority-label"
          id="project-priority"
          value={age}
          label="Project priority"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProjectPriority;
