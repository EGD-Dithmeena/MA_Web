import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./SecondaryButton.css";

export const SecondaryButton = ({ label = "Click Me", route = "/", onClick }) => {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button 
        className="secondary-button" 
        variant="outlined" 
        sx={{ backgroundColor: "#ffffff", color: "#248FEF" }}
        onClick={onClick} // Allows passing custom functionality on click
        fullWidth
      >
        {label} {/* The label for the button */}
      </Button>
    </Link>
  );
};
