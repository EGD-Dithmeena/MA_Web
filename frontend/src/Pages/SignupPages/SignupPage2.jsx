import React, { useState } from 'react';

import { Box, Container, Grid2, Typography, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import 'react-phone-input-2/lib/style.css';
import './SignupPages.css';

import { PrimaryButton } from '../../Components/Buttons';

export const SignupPage2 = ({ to = "/" }) => {
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

          {/* Step Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Link to={"/signup/email&password"} style={{ textDecoration: "none" }}>
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Link>
            <Typography variant="body2" color="textSecondary">
              Step 2 / 4
            </Typography>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ height: 4, backgroundColor: '#f0f0f0', mb: 3 }}>
            <Box sx={{ width: '50%', height: '100%', backgroundColor: '#248FEF' }} />
          </Box>

          {/* Form Heading */}
          <Typography variant="h5"  mb={3}
            style={{
                marginBottom: '5px',
            }}
          >
            What’s your mobile number
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={3}
            style={{
                marginBottom: '0',
            }}
          >
            We’ll use this as your SriTel account number
          </Typography>

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
              marginBottom: '200px',
              marginTop: '50px'
            }}
          />

            {/* Description */}
            <Typography variant="body2" color="textSecondary" mb={3}>
                By providing your phone number, you agree that we may contact you by SMS/text messaging. Carrier messaging and data rates may apply.
            </Typography>


          {/* Login Button */}
            <PrimaryButton label="Next" route="/signup/otp" onClick={() => console.log('Log In Button clicked!')} fullWidth/>

        </Container>
      </Grid2>
    </Grid2>
  );
};
