import React from "react";
import { Container, Grid2 } from "@mui/material";

import "./Header.css";

import { NavBar } from "./NavBar";
import { PrimaryButton } from "../Buttons";
import { SecondaryButton } from "../Buttons/SecondaryButton";

export const LandingPageHeader = () => {
  return (
    <Container className="LandingPage-Header-Container" maxWidth="100%">
        <Grid2 container spacing={2} columns={16}>  
            <Grid2 item size={12}>
                <img className="header-logo" src="../../../../Assets/Logo/SriTel.svg" alt="logo" />
            </Grid2>
            <Grid2 item size={2}>
                <SecondaryButton label="Log In" onClick={() => console.log('Log In Button clicked!')} />
            </Grid2>
            <Grid2 item size={2}>
                <PrimaryButton label="Sign Up" onClick={() => console.log('Sign Up Button clicked!')} />
            </Grid2>
        </Grid2>
        <Grid2 container>  
            <Grid2 item size={12}>
                <NavBar />
            </Grid2>
        </Grid2>
        
    </Container>

  );
};