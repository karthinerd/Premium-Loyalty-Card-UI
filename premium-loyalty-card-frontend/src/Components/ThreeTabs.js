import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const MyTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#EE9179",
  },
});

const MyTab = styled(Tab)(({ isSelected }) => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  fontFamily:"inter",
  padding: "10px",
  color: isSelected ? "#" : "#7B7B7B",
  border: "1px solid white",
  borderRadius: "10px",
  boxShadow: isSelected
    ? "0px 0px 12px rgba(238, 145, 121, 0.4), 0px 0px 0px 4px rgba(255, 255, 255, 0.2)"
    : "none",
  "&.Mui-selected": {
    color: "#000000",
  },
}));

function CenteredTabs(props) {
  const { tabs, tabComponents } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabComponent = tabComponents[selectedTab];

  return (
    <Box sx={{ width: "100%" }}>
      <MyTabs value={selectedTab} onChange={handleTabChange} centered>
        {tabs.map((tab, index) => (
          <MyTab
            key={index}
            label={tab.label}
            isSelected={selectedTab === index}
          />
        ))}
      </MyTabs>
      <TabComponent />
    </Box>
  );
}

CenteredTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  tabComponents: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default CenteredTabs;
