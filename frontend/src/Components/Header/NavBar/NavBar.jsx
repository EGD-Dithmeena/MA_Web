import React from "react";

import { Typography, Grid2 } from "@mui/material";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <Grid2 container spacing={2} columns={16}>
        <Grid2 item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body"> Header </Typography>
        </Grid2>
        <Grid2 item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body"> Header </Typography>
        </Grid2>
        <Grid2 item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body"> Header </Typography>
        </Grid2>
        <Grid2 item display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body"> Header </Typography>
        </Grid2>
    </Grid2>
  );
};