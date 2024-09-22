import React from 'react';

import { Box, Container, Grid2, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Divider } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './LoginPage.css';

import { PrimaryButton } from '../../Components/Buttons';

export const LoginPage = () => {
  return (
    <Grid2 container sx={{ height: '100vh' }} columns={5}>
      {/* Left Section with Background Color */}
      <Grid2 item xs={12} md={6} size={3} 
        sx={{ 
          position: 'relative', // Position relative to use overlay properly
          backgroundColor: '#248FEF',
          backgroundImage: `url("../../../../Assets/LoginPage/LoginPage-Image1.png")`, 
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
              rgba(35, 86, 151, 0.8) 0%,
              rgba(35, 86, 151, 0.8) 50%,
              rgba(35, 86, 151, 0.8) 100%
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img className="page-logo" src="../../../../Assets/Logo/SriTel.png" alt="SriTel Logo" />
          </Box>

          {/* Welcome Back */}
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Welcome Back!
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Log in to your account
          </Typography>

          {/* Email Input */}
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
          />

          {/* Password Input */}
            <TextField
                label="Password"
                variant="standard"
                type='password'
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
                InputProps={{
                endAdornment: (
                    <Button sx={{ minWidth: 0 }}> {/* Add eye icon here if needed */}<VisibilityIcon /></Button>
                ),
                }}
          />

          {/* Remember Me & Forgot Password */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </Box>

          {/* Login Button */}
            <PrimaryButton label="Log In" route="/login" onClick={() => console.log('Log In Button clicked!')} fullWidth/>

          {/* Divider */}
          <Divider sx={{ my: 2 }}>Or</Divider>

          {/* Google Login Button */}
          <Button className='google-button' variant="outlined" fullWidth startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>

          {/* Sign Up Link */}
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don't have an account?{' '}
            <Link href="/signup/email&password" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Container>
      </Grid2>
    </Grid2>
  );
};
