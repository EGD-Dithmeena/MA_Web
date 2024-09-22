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
      <Grid2 item xs={12} md={6} sx={{ backgroundColor: '#248FEF' }} size={3}/>

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
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
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
