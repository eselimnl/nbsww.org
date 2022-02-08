import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";

const LinearGradient = (props) => {
  const { data } = props;
  const boxStyle = {
    maxWidth: "24vw",
    minWidth: "280px",
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20,
    width: "24vw",
  };
  return (
    <Box>
      <Box style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span style={{ float: "right" }}>{data.max}</span>
      </Box>
      <Box style={{ ...boxStyle, ...gradientStyle }} className="mt8"></Box>
      <Typography sx={{ textAlign: "center" }}>Screened Conditions</Typography>
    </Box>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinearGradient;
