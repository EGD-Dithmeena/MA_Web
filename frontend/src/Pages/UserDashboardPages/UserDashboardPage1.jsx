import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

export const UserDashboardPage1 = ({ userName }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#248FEF' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Dashboard
          </Typography>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {/* Welcome Message */}
        <Typography variant="h4" sx={{ mb: 4 }}>
          Welcome, {userName}!
        </Typography>

        {/* Action Cards */}
        <Grid2 container spacing={4}>
          {/* Manage Services Card */}
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Manage Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Activate or deactivate your services.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/manage-services" style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="contained" sx={{ backgroundColor: '#248FEF' }}>
                    Manage
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>

          {/* View Bills Card */}
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  View Bills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check your billing details.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/view-bills" style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="contained" sx={{ backgroundColor: '#248FEF' }}>
                    View Bills
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>

          {/* Payment Options Card */}
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Payment Options
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your payment options.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/payment-options" style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="contained" sx={{ backgroundColor: '#248FEF' }}>
                    Payments
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>

          {/* Notifications Card */}
          <Grid2 item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Notifications
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View your recent notifications.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/notifications" style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="contained" sx={{ backgroundColor: '#248FEF' }}>
                    View Notifications
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
