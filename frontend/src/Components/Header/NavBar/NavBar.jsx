import React from "react";

import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

import "./NavBar.css";

export const NavBar = () => {

  return (
    <AppBar 
      position="static" 
      className="nav-bar"
      color="#248FEF"
    >
      <Toolbar className="navbar-toolbar">
        <Container className="menu-container" >
          <Button className="menu-item">
            <Typography variant="body" >
              Home
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body">
              Home
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body">
              Home
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body">
              Home
            </Typography>
          </Button>
          <Button className="menu-item">
            <Typography variant="body">
              Home
            </Typography>
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};