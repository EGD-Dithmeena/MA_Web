import React from 'react';

import { Box, Container, Grid2, Typography } from '@mui/material';

import './ForgetPasswordPages.css';

import { PrimaryButton } from '../../Components/Buttons';

export const ForgetPasswordConfirmationPage = () => {
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
                marginBottom: '10px',
            }}
            style={{
                marginBottom: '50px',
            }}
          >
            <img className="page-logo" src="../../../../Assets/Logo/SriTel.png" alt="SriTel Logo" />
          </Box>

        {/* Success Image */}
        <Box 
            sx={{ 
                textAlign: 'center', 
                mb: 4,
                marginBottom: '10px',
            }}
            style={{
                marginBottom: '50px',
            }}
          >
            <img className="success-image" src="../../../../Assets/SignupPages/Success.png" alt="Success-Image" />
          </Box>

          {/* Form Heading */}
          <Typography variant="h5" fontWeight="bold" mb={3}
            style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '100px',
            }}
          >
            Congratulations
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={3} alignItems={'center'}
            style={{
                marginBottom: '50px',
                paddingLeft: '50px',
            }}
            >
            Your password has been updated successfully.
          </Typography>                  


          {/* Login Button */}
            <PrimaryButton label="Log In" route="/login" onClick={() => console.log('Log In Button clicked!')} width='400px'/>
        </Container>
      </Grid2>
    </Grid2>
  );
};
