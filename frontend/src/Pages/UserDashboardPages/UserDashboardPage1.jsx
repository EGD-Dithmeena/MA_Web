import React from 'react';

import { Box, Typography, Grid2, Card, CardContent, CardActions, Container, } from '@mui/material';

import { Header } from '../../Components';
import { PrimaryButton } from '../../Components/Buttons';

export const UserDashboardPage1 = ({ userName }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Header />

      <Container 
        sx={{ marginTop: 4 }} 
        style={{
          marginLeft: "100px",
          maxWidth: "1500px",
          }}
        >
        {/* Welcome Message */}
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          Welcome, {userName}!
        </Typography>

        {/* Action Cards */}
        <Grid2 container spacing={4}>
          {/* Manage Services Card */}
          <Grid2 item xs={12} md={4}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="div">
                  Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Activate or deactivate your services.
                </Typography>
              </CardContent>
              <CardActions>
                <PrimaryButton label="View" route='/serviceManagement/home' fullWidth />
              </CardActions>
            </Card>
          </Grid2>

          {/* View Bills Card */}
          <Grid2 item xs={12} md={4}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="div">
                  Bills & Payments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check your billing & payment details.
                </Typography>
              </CardContent>
              <CardActions>
                <PrimaryButton label="View" route='/billingAndPayments/home' fullWidth />
              </CardActions>
            </Card>
          </Grid2>

          {/* Chat Card */}
          <Grid2 item xs={12} md={4}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="div">
                  Customer Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get in touch with customer care agents.
                </Typography>
              </CardContent>
              <CardActions>
                <PrimaryButton label="View" route='/chatSupport/home' fullWidth />
              </CardActions>
            </Card>
          </Grid2>

          {/* Feedback Card */}
          <Grid2 item xs={12} md={4}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h5" component="div">
                  Feedbacks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Share your feedback to help us improve.
                </Typography>
              </CardContent>
              <CardActions>
                <PrimaryButton label="View" route='/feedback/home' fullWidth />
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
