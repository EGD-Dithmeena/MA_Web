import React from 'react';

import { Box, Container, Grid2, Typography, TextField, IconButton } from '@mui/material';
import { Link } from "react-router-dom";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './ForgetPasswordPages.css';

import { PrimaryButton } from '../../Components/Buttons';

export const ForgetPasswordPage1 = ({ to = "/" }) => {
  return (
    <Grid2 container sx={{ height: '100vh' }} columns={5}>
      {/* Left Section with Background Color */}
      <Grid2 item xs={12} md={6} size={3} 
        sx={{ 
          position: 'relative', // Position relative to use overlay properly
          backgroundColor: '#248FEF',
          backgroundImage: `url("../../../../Assets/SignupPages/SignupPage1-Image1.png")`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} 
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(
              rgba(35, 86, 151, 0.4) 0%,
              rgba(35, 86, 151, 0.7) 50%,
              rgba(35, 86, 151, 0.9) 100%
            )`,
            zIndex: 1, // Ensure overlay is above the background image
          }}
        />
      </Grid2>

      {/* Right Section for Login Form */}
      <Grid2 item xs={12} md={6} size={2}>
        <Container
          maxWidth="xs"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}
        >
          {/* Logo */}
          <Box 
            sx={{ 
                textAlign: 'center', 
                mb: 4,
                marginBottom: '10 px',
            }}
          >
            <img className="page-logo" src="../../../../Assets/Logo/SriTel.png" alt="SriTel Logo" />
          </Box>

          {/* Step Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
            style={{
                marginBottom: '50px',
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none" }}>
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>
          </Box>

          {/* Form Heading */}
          <Typography variant="h5"  mb={3}
            style={{
                marginBottom: '0',
            }}
          >
            Forget Password
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={3}
            style={{
                marginBottom: '0',
            }}
            >
            Enter your email address below to verify your account
          </Typography>

          {/* First Name Input */}
          <TextField
            label="Email Address"
            variant="standard"
            fullWidth
            margin="normal"
            sx={{ 
                '& .MuiInput-underline:before': {
                    borderBottomColor: '#248FEF', // Change the color of the underline before focus
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: '#2367B1', // Change underline color on hover
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#2367B1', // Change the color of the underline after focus
                  },
            }}
            style={{
                marginBottom: '200px',
            }}
          /> 


          {/* Login Button */}
            <PrimaryButton label="Verify" route="/forgetPassword/password" onClick={() => console.log('Log In Button clicked!')} width='400px'/>
        </Container>
      </Grid2>
    </Grid2>
  );
};
