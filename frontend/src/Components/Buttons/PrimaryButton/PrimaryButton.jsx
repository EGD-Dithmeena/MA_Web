import React from "react";
import { createTheme } from '@mui/material/styles';

import { Button } from "@mui/material";

import "./PrimaryButton.css";

export const PrimaryButton = ({ label = "Click Me", onClick }) => {

    return (
    <Button 
      className="primary-button" 
      variant="contained" 
      color="#248FEF"
      onClick={onClick} // Allows passing custom functionality on click
    >
      {label} {/* The label for the button */}
    </Button>
  );
};
