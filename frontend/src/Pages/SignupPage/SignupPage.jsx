import React, { useState } from 'react';

import { Box, Container, Grid2, Typography, TextField, Button, Checkbox, FormControlLabel, Divider, IconButton } from '@mui/material';
import { Link } from "react-router-dom";

import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

import './SignupPage.css';

import { PrimaryButton } from '../../Components/Buttons';

export const SignupPage = ({ to = "/" }) => {
    const [phone, setPhone] = useState('');
  
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

          {/* Form Heading */}
          <Typography variant="h5"  mb={3}
            style={{
                marginBottom: '0',
            }}
          >
            Get started with your account!
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

        {/* Phone Number Input with Flags and Country Code */}
        <PhoneInput
            country={'lk'} // Set default country (Sri Lanka in this case)
            value={phone}
            onChange={phone => setPhone(phone)}
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
            style={{
            //   marginBottom: '200px',
              marginTop: '20px'
            }}
          />

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

            {/* Confirm Password Input */}
            <TextField
                label="Confirm Password"
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


          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2" color="textSecondary">
                I have read and I understand Swift Pay Bank's{' '}
                <Link href="#" underline="hover">
                  Terms and conditions
                </Link>{' '}
                and{' '}
                <Link href="#" underline="hover">
                  Privacy Policy
                </Link>
              </Typography>
            }
            style={{
                margin: '20px 0 20px 0',
            }}
          />

          {/* Login Button */}
            <PrimaryButton label="Register" route="/login" onClick={() => console.log('Log In Button clicked!')} fullWidth/>
          
          {/* Sign Up Link */}
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Already have an account?{' '}
            <Link route="/login" onClick={() => console.log('Log In Button clicked!')} underline="hover">
              Log In
            </Link>
          </Typography>
        </Container>
      </Grid2>
    </Grid2>
  );
};
