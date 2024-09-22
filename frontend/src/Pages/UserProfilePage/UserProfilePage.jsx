import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';

export const UserProfilePage = () => {
  const [profile, setProfile] = useState({
    email: 'user@example.com',
    phoneNumber: '+94 712 345 678',
  });

  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Handle input changes for profile info
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle profile save
  const handleSaveProfile = () => {
    setSnackbarMessage('Profile updated successfully');
    setSnackbarOpen(true);
  };

  // Handle password update
  const handlePasswordUpdate = () => {
    setPasswordDialogOpen(false);
    setSnackbarMessage('Password updated successfully');
    setSnackbarOpen(true);
  };

  // Handle adding/removing payment method
  const handlePaymentMethod = () => {
    setPaymentDialogOpen(false);
    setSnackbarMessage('Payment method saved successfully');
    setSnackbarOpen(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ mb: 4 }}>
        Profile Settings
      </Typography>

      {/* Profile Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Profile Information</Typography>
        <Divider sx={{ my: 2 }} />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleInputChange}
          margin="normal"
        />

        <Button variant="contained" onClick={handleSaveProfile} sx={{ mt: 2 }}>
          Save Profile
        </Button>
      </Box>

      {/* Change Password */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Change Password</Typography>
        <Divider sx={{ my: 2 }} />

        <Button variant="outlined" onClick={() => setPasswordDialogOpen(true)}>
          Change Password
        </Button>
      </Box>

      {/* Payment Methods */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Manage Payment Methods</Typography>
        <Divider sx={{ my: 2 }} />

        <Button variant="outlined" onClick={() => setPaymentDialogOpen(true)}>
          Add/Remove Payment Method
        </Button>
      </Box>

      {/* Logout */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Logout</Typography>
        <Divider sx={{ my: 2 }} />

        <Button variant="contained" color="error">
          Logout
        </Button>
      </Box>

      {/* Change Password Dialog */}
      <Dialog open={passwordDialogOpen} onClose={() => setPasswordDialogOpen(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Current Password"
            type="password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New Password"
            type="password"
            margin="dense"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm New Password"
            type="password"
            margin="dense"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPasswordDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handlePasswordUpdate}>
            Update Password
          </Button>
        </DialogActions>
      </Dialog>

      {/* Payment Method Dialog */}
      <Dialog open={paymentDialogOpen} onClose={() => setPaymentDialogOpen(false)}>
        <DialogTitle>Manage Payment Method</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Card Number"
            type="text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Expiry Date"
            type="text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="CVV"
            type="password"
            margin="dense"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPaymentDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handlePaymentMethod}>
            Save Payment Method
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for success notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};
