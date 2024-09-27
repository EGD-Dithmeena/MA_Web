import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./PrimaryButton.css";

export const PrimaryButton = ({ label = "Click Me", route = "/", onClick, width = '150px' }) => {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button 
        className="primary-button" 
        variant="contained" 
        sx={{ backgroundColor: "#248FEF", color: "#fff", fontSize:"0.7rem" , width: width }}
        onClick={onClick} // Allows passing custom functionality on click
      >
        {label} {/* The label for the button */}
      </Button>
    </Link>

  );
};

