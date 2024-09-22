import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./PrimaryButton.css";

export const PrimaryButton = ({ label = "Click Me", route = "/", onClick }) => {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button 
        className="primary-button" 
        variant="contained" 
        sx={{ backgroundColor: "#248FEF", color: "#fff" }}
        onClick={onClick} // Allows passing custom functionality on click
        fullWidth
      >
        {label} {/* The label for the button */}
      </Button>
    </Link>

  );
};

