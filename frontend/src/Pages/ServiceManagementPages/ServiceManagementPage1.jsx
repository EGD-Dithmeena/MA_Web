import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

export const ServiceManagementPage1 = () => {
  const [services, setServices] = useState([
    { name: 'International Roaming', active: false },
    { name: 'Ring-in Tone', active: true },
    { name: 'Data Top-ups', active: false },
  ]);

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleToggle = (index) => {
    const updatedServices = [...services];
    updatedServices[index].active = !updatedServices[index].active;
    setServices(updatedServices);

    // Show notification based on the toggle action
    setNotification({
      open: true,
      message: `${updatedServices[index].name} has been ${
        updatedServices[index].active ? 'activated' : 'deactivated'
      }.`,
      severity: 'success',
    });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ mb: 4 }}>
        Manage Your Services
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Service Name */}
                <Typography variant="h6">{service.name}</Typography>

                {/* Toggle Switch */}
                <Switch
                  checked={service.active}
                  onChange={() => handleToggle(index)}
                  color="primary"
                  inputProps={{ 'aria-label': `Activate/Deactivate ${service.name}` }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
  );
};
