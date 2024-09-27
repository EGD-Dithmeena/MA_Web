import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Grid2, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { PrimaryButton } from '../../Components/Buttons';

const login_url = 'http://localhost:8222/api/authenticate/login';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post(login_url, { email, password });
      alert("Login success");
      navigate('/userDashboard/home');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const navigateToRegister = () => {
    navigate('/signup');
  };

  const { email, password } = formData;

  return (
    <Grid2 container sx={{ height: '100vh' }} columns={5}>
      {/* Left Section with Background Color */}
      <Grid2
        item
        xs={12}
        md={6}
        size={3}
        sx={{
          position: 'relative',
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
            width: '100%',
            height: '100%',
            background: `linear-gradient(
              rgba(35, 86, 151, 0.8) 0%,
              rgba(35, 86, 151, 0.8) 50%,
              rgba(35, 86, 151, 0.8) 100%
            )`,
            zIndex: 1,
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
            name="email"
            value={email}
            onChange={handleInputChange}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: '#248FEF',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#2367B1',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#2367B1',
              },
            }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            variant="standard"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={password}
            onChange={handleInputChange}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: '#248FEF',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#2367B1',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#2367B1',
              },
            }}
            InputProps={{
              endAdornment: (
                <Button sx={{ minWidth: 0 }}>
                  <VisibilityIcon />
                </Button>
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
          <PrimaryButton label="Log In" onClick={handleSubmit} fullWidth />

          {/* Sign Up Link */}
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don't have an account?{' '}
            <Link onClick={navigateToRegister} underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Container>
      </Grid2>
    </Grid2>
  );
};
