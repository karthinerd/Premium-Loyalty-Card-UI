import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const MyTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#000000",
  },
});

const MyTab = styled(Tab)({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "12px",
  color: "#000000",
  "&.Mui-selected": {
    color: "#ffffff",
    backgroundColor: "#000000",
  },
});

function CenteredTabs(props) {
  const { value, tabs, onChange } = props;

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MyTabs value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <MyTab key={index} label={tab.label} />
        ))}
      </MyTabs>
    </Box>
  );
}

CenteredTabs.propTypes = {
  value: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CenteredTabs;
