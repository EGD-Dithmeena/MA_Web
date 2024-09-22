import React, { useState } from 'react';

import { Box, Container, Grid2, Typography, IconButton, TextField } from '@mui/material';
import { Link } from "react-router-dom";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './SignupPages.css';

import { PrimaryButton } from '../../Components/Buttons';

export const SignupPage3 = ({ to = "/" }) => {

    const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));

    const handleChange = (event, index) => {
      const newCode = [...verificationCode];
      newCode[index] = event.target.value;
      setVerificationCode(newCode);
    };

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
          <Link to={to} style={{ textDecoration: "none" }}>
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Link>
            <Typography variant="body2" color="textSecondary">
              Step 3 / 4
            </Typography>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ height: 4, backgroundColor: '#f0f0f0', mb: 3 }}>
            <Box sx={{ width: '75%', height: '100%', backgroundColor: '#248FEF' }} />
          </Box>

          {/* Form Heading */}
          <Typography variant="h5"  mb={3}
            style={{
                marginBottom: '5px',
            }}
          >
            Verify your mobile number
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={3}
            style={{
                marginBottom: '0',
            }}
            >
            Enter the 6 digit code we sent to your mobile number: <br />
            <strong>+94 71 222 3344</strong>
          </Typography>

          {/* 6-Digit Verification Code Input */}
          <Box 
            sx={{  
                display: 'flex', 
                justifyContent: 'space-between', 
                mb: 3 
            }}
            style={{
                marginTop: '50px',
            }}
          >
            {verificationCode.map((digit, index) => (
              <TextField
                key={index}
                inputProps={{ maxLength: 1, style: { textAlign: 'center'} }}
                value={digit}
                onChange={(event) => handleChange(event, index)}
                variant="standard"
                backgroundColor="#f0f0f0"
                sx={{
                  width: '48px',
                  height: '48px',
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
            ))}
          </Box>

          {/* Resend Code Link */}
          <Typography variant="body2" color="textSecondary" mb={3} textAlign="center"
            style={{
                marginBottom: '200px',
            }}
          >
            Didn’t receive the code?{' '}
            <Link href="#" underline="hover">
              Resend code
            </Link>
          </Typography>


          {/* Login Button */}
            <PrimaryButton label="Next" route="/signup/personalinfo" onClick={() => console.log('Log In Button clicked!')} fullWidth/>

        </Container>
      </Grid2>
    </Grid2>
  );
};
