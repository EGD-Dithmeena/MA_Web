import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import "./NavBar.css";

export const LandingPageNavBar = () => {
  return (
    <AppBar 
      position="static" 
      style={{ 
        background: `linear-gradient(
          to right,
          rgba(35, 86, 151, 0) 0%,
          rgba(35, 86, 151, 0.6) 25%,
          rgba(35, 86, 151, 0.8) 50%,
          rgba(35, 86, 151, 0.6) 75%,
          rgba(255, 255, 255, 0) 100%
        )`, // Set custom background color
        width: '100vw', // Ensure full width for AppBar
        maxWidth: "100%",
        height: '70px', // Set a fixed height
      }}
    >
      <Toolbar
        className="navbar-toolbar"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%', // Ensure the toolbar takes the full height of the AppBar
          padding: '0', // Add padding to the toolbar
          height: '70px', // Set a fixed height
        }}
      >
        <Container 
          className="menu-container"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            alignItems: 'center',
            maxWidth: "lg", // Ensure proper spacing for container items
          }}
        >
          <Button className="menu-item">
            <Typography variant="body1" color="white">
              Home
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body1" color="white">
              About Us
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body1" color="white">
              Services
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body1" color="white">
              Contact
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body1" color="white">
              Log In
            </Typography>
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
