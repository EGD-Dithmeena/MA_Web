import React from "react";
import { createTheme } from '@mui/material/styles';

import { Button } from "@mui/material";

import "./SecondaryButton.css";

export const SecondaryButton = ({ label = "Click Me", onClick }) => {
  
  // const theme = createTheme(); 

    return (
    <Button 
      className="secondary-button" 
      variant="outlined" 
      color="#ffffff"
      onClick={onClick} // Allows passing custom functionality on click
    >
      {label} {/* The label for the button */}
    </Button>
  );
};
