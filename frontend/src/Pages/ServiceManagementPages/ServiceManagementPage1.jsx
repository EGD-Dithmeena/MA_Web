import React, { useState } from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch, Snackbar, Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, IconButton, } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { Header } from '../../Components';

export const ServiceManagementPage1 = () => {
  const [services, setServices] = useState([
    { name: 'International Roaming', active: false },
    { name: 'Data Top-ups', active: false },
    { name: 'Other Services', active: false },
    { name: 'Ring-in Tone', active: true, status: 'Test Song1' },
  ]);

  const [selectedSong, setSelectedSong] = useState('');
  const [showSongSelector, setShowSongSelector] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Handle service activation/deactivation
  const handleToggle = async (index) => {
    const updatedServices = [...services];
    updatedServices[index].active = !updatedServices[index].active;
    setServices(updatedServices);

    // Show notification
    setNotification({
      open: true,
      message: `${updatedServices[index].name} has been ${updatedServices[index].active ? 'activated' : 'deactivated'}.`,
      severity: 'success',
    });

    // API calls for each service
    try {
      if (updatedServices[index].name === 'Ring-in Tone') {
        // If deactivating ringtone
        if (!updatedServices[index].active) {
          await axios.post('http://localhost:8222/api/ringing-tone/deactivate-ringing-tone');
        } else {
          setShowSongSelector(true); // Show song selector when activating
        }
      } else {
        // For other services
        const endpoint =
          updatedServices[index].name === 'International Roaming'
            ? 'http://localhost:8092/api/roaming'
            : 'http://localhost:8094/api/topups';

        await axios.post(`${endpoint}/${updatedServices[index].active ? 'subscribe' : 'unsubscribe'}`);
      }
    } catch (error) {
      console.error('Error updating service:', error);
      setNotification({
        open: true,
        message: `Failed to update ${updatedServices[index].name}.`,
        severity: 'error',
      });
    }
  };

  // Handle song selection for ringtone
  const handleSongChange = async () => {
    if (!selectedSong) {
      alert('Please select a song.');
      return;
    }

    const updatedServices = [...services];
    const ringtoneIndex = updatedServices.findIndex((item) => item.name === 'Ring-in Tone');
    if (ringtoneIndex !== -1) {
      updatedServices[ringtoneIndex].status = selectedSong;
      setServices(updatedServices);

      // API call to activate the selected song
      try {
        await axios.post('http://localhost:8093/api/ringing-tone/activate-ringing-tone', {
          service: 'Ringtone',
          status: selectedSong,
        });
        setNotification({
          open: true,
          message: `Ringtone has been set to ${selectedSong}.`,
          severity: 'success',
        });
      } catch (error) {
        console.error('Error activating ringtone:', error);
        setNotification({
          open: true,
          message: 'Failed to activate ringtone.',
          severity: 'error',
        });
      }
    }
    setShowSongSelector(false);
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Header />

      <Container sx={{ mt: 4 }}>
        {/* Heading */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          {/* Back Arrow Button */}
          <Link to={"/userDashboard/home"} style={{ textDecoration: "none" }}>
            <IconButton>
              <ArrowBackIosNewIcon style={{color:'black'}} />
            </IconButton>
          </Link>

          {/* Heading */}
          <Typography variant="h4" sx={{ ml: 2 }}>
            Services
          </Typography>
        </Box>

        {/* Services Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Service</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.active ? (service.name === 'Ring-in Tone' ? service.status : 'Active') : 'Deactive'}</TableCell>
                  <TableCell align="center">
                    <Switch
                      checked={service.active}
                      onChange={() => handleToggle(index)}
                      color="primary"
                      inputProps={{ 'aria-label': `Activate/Deactivate ${service.name}` }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Song Selector Dialog */}
        <Dialog open={showSongSelector} onClose={() => setShowSongSelector(false)}>
          <DialogTitle>Select a Ringtone</DialogTitle>
          <DialogContent>
            <Select fullWidth value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
              <MenuItem value="Test Song1">Test Song1</MenuItem>
              <MenuItem value="Test Song2">Test Song2</MenuItem>
              <MenuItem value="Test Song3">Test Song3</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSongChange} color="primary">
              Confirm
            </Button>
            <Button onClick={() => setShowSongSelector(false)} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar Notification */}
        <Snackbar
          open={notification.open}
          autoHideDuration={3000}
          onClose={handleCloseNotification}
        >
          <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
