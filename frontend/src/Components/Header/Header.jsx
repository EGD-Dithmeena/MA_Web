import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Container,
} from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { NavBar } from './NavBar';

import './Header.css';

export const Header = () => {
  return (
    <>
        <AppBar position="static" color="default" elevation={0}
            style={{
                padding: '5px 20px',
            }}
        >
            <Toolbar>
                {/* Left Side - Logo */}
                <img
                className="header-logo"
                src="../../../../Assets/Logo/SriTel.png"
                alt="SriTel Logo"
                style={{ 
                    height: '60px', 
                    width: 'auto'
                }} // Adjust the logo size as needed
                />

                {/* Spacer to push items to the right */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Right Side - Notification and User Info */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Notification Icon */}
                <IconButton color="primary">
                    <NotificationsIcon />
                </IconButton>

                {/* User Avatar or Icon */}
                <IconButton color="primary">
                    <AccountCircleIcon />
                </IconButton>

                {/* User Greeting */}
                <Typography variant="body1" color="primary" sx={{ marginLeft: 1, fontWeight: 600 }}
                >
                    Hi, Victor Jimoh
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>

        <NavBar />
    </>
  );
};
