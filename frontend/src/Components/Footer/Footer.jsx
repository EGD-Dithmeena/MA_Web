import React from "react";

import { Container, Grid2, Typography, Link, Box, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css';

export const Footer = () => {
  return (
      <Container maxWidth="100%" className="Footer-Container">
        <Grid2 container spacing={4} columns={16}>
          <Grid2 item xs={2} size={3}>
          <img className="footer-logo" src="../../../../Assets/Logo/SriTel.svg" alt="logo" />
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Post-Paid</Typography>
            <Typography variant="body2" color="textSecondary">Billing</Typography>
            <Typography variant="body2" color="textSecondary">Call Management</Typography>
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Post-Paid</Typography>
            <Typography variant="body2" color="textSecondary">Billing</Typography>
            <Typography variant="body2" color="textSecondary">Call Management</Typography>
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Post-Paid</Typography>
            <Typography variant="body2" color="textSecondary">Billing</Typography>
            <Typography variant="body2" color="textSecondary">Call Management</Typography>
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Post-Paid</Typography>
            <Typography variant="body2" color="textSecondary">Billing</Typography>
            <Typography variant="body2" color="textSecondary">Call Management</Typography>
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Home</Typography>
            <Link href="#" color="inherit" underline="hover">
              <Typography variant="body2" color="textSecondary">About Us</Typography>
            </Link>
            <Link href="#" color="inherit" underline="hover">
              <Typography variant="body2" color="textSecondary">Contact Us</Typography>
            </Link>
            <Link href="#" color="inherit" underline="hover">
              <Typography variant="body2" color="textSecondary">Privacy Policy</Typography>
            </Link>
            <Link href="#" color="inherit" underline="hover">
              <Typography variant="body2" color="textSecondary">Terms and Conditions</Typography>
            </Link>
          </Grid2>
          <Grid2 item xs={2} size={2}>
            <Typography variant="h6" color="primary">Follow Us</Typography>
            <IconButton component="a" href="https://www.facebook.com" target="_blank" aria-label="Facebook" color="black">
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com" target="_blank" aria-label="YouTube" color="black">
              <YouTubeIcon />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com" target="_blank" aria-label="Instagram" color="black">
              <InstagramIcon />
            </IconButton>
          </Grid2>
        </Grid2>

        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            © SriTel (Pvt) Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
  );
};
