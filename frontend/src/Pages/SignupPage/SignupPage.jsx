import React, { useState } from 'react';

import { Box, Container, Grid2, Typography, TextField, Button, Checkbox, FormControlLabel, } from '@mui/material';
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

import './SignupPage.css';

import { PrimaryButton } from '../../Components/Buttons';

const register_URL = 'http://localhost:8222/api/register/register';

export const SignupPage = ({ to = "/" }) => {

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      password: '',
  });
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
      event.preventDefault();
      const { firstName, lastName, email, password } = formData;

      try {
          const response = await axios.post(register_URL, {
              firstName,
              lastName,
              email,
              contactNumber: phone, // Use phone state for contact number
              password,
          });

          alert(response.data);
          navigate('/userDashboard/home'); // Navigate to login after successful registration
      } catch (error) {
          console.error('Error:', error);
          alert('Registration failed. Please try again.');
      }
  };
  
    return (
      <Grid2 container sx={{ height: '100vh' }} columns={5}>
      {/* Left Section with Background Color */}
      <Grid2 item xs={12} md={6} size={3} 
          sx={{ 
              position: 'relative', 
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
                  zIndex: 1,
              }}
          />
      </Grid2>

      {/* Right Section for Signup Form */}
      <Grid2 item xs={12} md={6} size={2}>
          <Container
              maxWidth="xs"
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}
          >
              {/* Logo */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <img className="page-logo" src="../../../../Assets/Logo/SriTel.png" alt="SriTel Logo" />
              </Box>

              {/* Form Heading */}
              <Typography variant="h5" mb={3}>
                  Get started with your account!
              </Typography>

              <form onSubmit={handleSubmit}>
                  {/* First Name Input */}
                  <TextField
                      label="First Name"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                  />

                  {/* Last Name Input */}
                  <TextField
                      label="Last Name"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                  />

                  {/* Phone Number Input with Flags and Country Code */}
                  <PhoneInput
                      country={'lk'}
                      value={phone}
                      onChange={setPhone}
                      inputStyle={{
                          width: '100%',
                          border: 'none',
                          borderBottom: '1px solid #248FEF',
                          borderRadius: 0,
                          marginBottom: '20px',
                          fontSize: '16px'
                      }}
                      containerStyle={{
                          width: '100%'
                      }}
                      buttonStyle={{
                          border: 'none',
                          background: 'none'
                      }}
                  />

                  {/* Email Input */}
                  <TextField
                      label="Email Address"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                  />

                  {/* Password Input */}
                  <TextField
                      label="Password"
                      variant="standard"
                      type='password'
                      fullWidth
                      margin="normal"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      InputProps={{
                          endAdornment: (
                              <Button sx={{ minWidth: 0 }}>
                                  <VisibilityIcon />
                              </Button>
                          ),
                      }}
                  />

                  {/* Confirm Password Input (optional) */}
                  <TextField
                      label="Confirm Password"
                      variant="standard"
                      type='password'
                      fullWidth
                      margin="normal"
                      required
                  />

                  {/* Terms and Conditions Checkbox */}
                  <FormControlLabel
                      control={<Checkbox />}
                      label={
                          <Typography variant="body2" color="textSecondary">
                              I have read and I understand Swift Pay Bank's{' '}
                              <Link href="#" underline="hover">Terms and conditions</Link> and{' '}
                              <Link href="#" underline="hover">Privacy Policy</Link>
                          </Typography>
                      }
                      style={{ margin: '20px 0' }}
                  />

                  {/* Register Button */}
                  <PrimaryButton label="Register" onClick={handleSubmit} fullWidth />

                  {/* Sign Up Link */}
                  <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                      Already have an account?{' '}
                      <Link to="/login" underline="hover">Log In</Link>
                  </Typography>
              </form>
          </Container>
      </Grid2>
  </Grid2>
  );
};
