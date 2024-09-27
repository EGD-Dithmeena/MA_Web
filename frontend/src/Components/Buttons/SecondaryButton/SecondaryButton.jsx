import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./SecondaryButton.css";

export const SecondaryButton = ({ label = "Click Me", route = "/", onClick, width = '150px' }) => {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button 
        className="secondary-button" 
        variant="outlined" 
        sx={{ backgroundColor: "#ffffff", color: "#248FEF", fontSize:"0.7rem" , width: width }} // Custom styling for the button
        onClick={onClick} // Allows passing custom functionality on click
      >
        {label} {/* The label for the button */}
      </Button>
    </Link>
  );
};
