import React from "react";
import { Container, Grid2 } from "@mui/material";

import "./Header.css";
import { LandingPageNavBar } from "./NavBar";
import { PrimaryButton } from "../Buttons";
import { SecondaryButton } from "../Buttons/SecondaryButton";

export const LandingPageHeader = () => {
  return (
    <Container 
      className="LandingPage-Header-Container" 
      maxWidth="100%" 
      style={{ paddingLeft: 0, paddingRight: 0 }}  // Override left and right padding to 0
    >
      <Grid2 container spacing={1} columns={32} 
        alignItems="center" 
        style={{ 
            height: '100px', 
            paddingLeft: '40px',
            paddingRight: '40px',
        }}
        >  
        <Grid2 item size={26}>
          <img className="header-logo" src="../../../../Assets/Logo/SriTel.png" alt="logo" />
        </Grid2>
        <Grid2 item size={3}>
          <SecondaryButton label="Log In" route="/login" onClick={() => console.log('Log In Button clicked!')} width="120px"/>
        </Grid2>
        <Grid2 item size={3}>
          <PrimaryButton label="Sign Up" route="/signup/email&password" onClick={() => console.log('Sign Up Button clicked!')} width="120px"/>
        </Grid2>
      </Grid2>

      {/* <Grid2 container>  
        <Grid2 item size={12}>
          <LandingPageNavBar />
        </Grid2>
      </Grid2> */}
    </Container>
  );
};
