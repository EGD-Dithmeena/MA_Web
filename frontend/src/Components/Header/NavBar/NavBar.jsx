import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, } from "@mui/material";
import { Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <AppBar 
      position="static" 
      style={{ 
        background: `linear-gradient(
          to right,
          rgba(36, 143, 239, 0.4) 0%,
          rgba(36, 143, 239, 0.6) 25%,
          rgba(36, 143, 239, 0.8) 50%,
          rgba(36, 143, 239, 0.6) 75%,
          rgba(36, 143, 239, 0.4) 100%
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
          <Link to="/userDashboard/home" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Home
              </Typography>
            </Button>
          </Link>          
          <Link to="/serviceManagement/home" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Services
              </Typography>
            </Button>
          </Link>
          <Link to="/billingAndPayments/home" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Bills
              </Typography>
            </Button>
          </Link>
          <Link to="/chat/home" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Chats
              </Typography>
            </Button>
          </Link>
          <Link to="/feedback/home" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Feedback
              </Typography>
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button className="menu-item">
              <Typography variant="body1" color="white">
                Log Out
              </Typography>
            </Button>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
