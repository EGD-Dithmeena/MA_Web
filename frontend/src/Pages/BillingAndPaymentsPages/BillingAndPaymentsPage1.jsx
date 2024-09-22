import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid2,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';

import { Header } from '../../Components';

export const BillingAndPaymentsPage1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

  const bills = [
    { date: '2023-09-01', amount: 50, status: 'Paid' },
    { date: '2023-08-01', amount: 60, status: 'Unpaid' },
    { date: '2023-07-01', amount: 45, status: 'Paid' },
  ];

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handlePayNowClick = () => {
    setOpenPaymentDialog(true);
  };

  const handlePaymentSubmit = () => {
    setOpenPaymentDialog(false);
    setOpenSuccessSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Header />

      <Container sx={{ mt: 4 }}>
        {/* Heading */}
        <Typography variant="h4" sx={{ mb: 4 }}>
          Billing and Payments
        </Typography>

        {/* Tabs for Current and Past Bills */}
        <Box sx={{ mb: 4 }}>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="billing-tabs">
            <Tab label="Current Bills" />
            <Tab label="Past Bills" />
          </Tabs>
        </Box>

        {/* Table for Billing Information */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
                {tabIndex === 0 && <TableCell align="right">Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {bills
                .filter((bill) => (tabIndex === 0 ? bill.status === 'Unpaid' : true)) // Only show unpaid bills in the "Current Bills" tab
                .map((bill, index) => (
                  <TableRow key={index}>
                    <TableCell>{bill.date}</TableCell>
                    <TableCell align="right">${bill.amount}</TableCell>
                    <TableCell align="right">{bill.status}</TableCell>
                    {bill.status === 'Unpaid' && tabIndex === 0 && (
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handlePayNowClick}
                        >
                          Pay Now
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Payment Dialog */}
        <Dialog open={openPaymentDialog} onClose={() => setOpenPaymentDialog(false)}>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Card Number"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Expiry Date"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="CVV"
              type="password"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPaymentDialog(false)}>Cancel</Button>
            <Button variant="contained" onClick={handlePaymentSubmit}>
              Pay
            </Button>
          </DialogActions>
        </Dialog>

        {/* Success Snackbar */}
        <Snackbar
          open={openSuccessSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Payment successful! Your bill has been paid.
          </Alert>
        </Snackbar>
      </Container>
    </Box>    

  );
};
