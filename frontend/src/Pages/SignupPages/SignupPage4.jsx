import React from 'react';

import { Box, Container, Grid2, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Divider, IconButton } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './SignupPages.css';

import { PrimaryButton } from '../../Components/Buttons';

export const SignupPage4 = () => {
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              Step 4 / 4
            </Typography>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ height: 4, backgroundColor: '#f0f0f0', mb: 3 }}>
            <Box sx={{ width: '100%', height: '100%', backgroundColor: '#248FEF' }} />
          </Box>

          {/* Form Heading */}
          <Typography variant="h5"  mb={3}
            style={{
                marginBottom: '0',
            }}
          >
            Bit about yourself
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={3}
            style={{
                marginBottom: '0',
            }}
            >
            We need some additional information from you to secure your account
          </Typography>

          {/* First Name Input */}
          <TextField
            label="First Name"
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
          />

          {/* Last Name Input */}
          <TextField
            label="Last Name"
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
          />

          {/* NIC Input */}
          <TextField
            label="NIC"
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
                marginBottom: '100px',
            }}
          />                    


          {/* Login Button */}
            <PrimaryButton label="Submit" onClick={() => console.log('Log In Button clicked!')} fullWidth/>
        </Container>
      </Grid2>
    </Grid2>
  );
};
