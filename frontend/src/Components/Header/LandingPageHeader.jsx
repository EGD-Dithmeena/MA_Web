import React from "react";
import { Container, Typography, Grid2 } from "@mui/material";

import "./Header.css";

import { NavBar } from "./NavBar";

export const LandingPageHeader = () => {
  return (
    <Container className="LandingPage-Header-Container">
        <Grid2 container spacing={2} columns={16}>  
            <Grid2 item md={12}>
                <img className="logo" src="../../../../Assets/Logo/SriTel.svg" alt="logo" />
            </Grid2>
            <Grid2 item md={2}>
                <Typography variant="body"> Header </Typography>
            </Grid2>
            <Grid2 item md={2}>
                <Typography variant="body"> Header </Typography>
            </Grid2>
        </Grid2>
        <NavBar />
    </Container>

  );
};