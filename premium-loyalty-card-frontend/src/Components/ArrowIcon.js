import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  arrowIcon: {
    fontSize: '35px',
    cursor:"pointer",
    color: '#1B223E',
    paddingTop:'4px',
  },
});

const ArrowIcon = ({ destination }) => {

  const navigate = useNavigate();

  const classes = useStyles();

  const handleClick = () => {
    navigate(destination);
  };

  return (
    <div onClick={handleClick}>
      <ArrowBackIcon fontSize="large" className={classes.arrowIcon} />
    </div>
  );
};

export default ArrowIcon;
