import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Tabs, Tab, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert, IconButton } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../../Components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const bill_URL = 'http://localhost:8222/api/bill-retrieval/pending-bills';

export const BillingAndPaymentsPage1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [Data, setResponseData] = useState([]); // For fetched bills
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch pending bills from the API
    axios.get(bill_URL)
      .then(response => {
        const data = response.data;
        setResponseData(data);
      })
      .catch(error => {
        console.error('Error fetching bills:', error);
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handlePayNowClick = (billData) => {
    // Navigate to the pay-now.js page and pass the billData as state
    navigate('/pay-now', { state: { billData } });
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          {/* Back Arrow Button */}
          <Link to={"/userDashboard/home"} style={{ textDecoration: "none" }}>
            <IconButton>
              <ArrowBackIosNewIcon style={{color:'black'}} />
            </IconButton>
          </Link>

          {/* Heading */}
          <Typography variant="h4" sx={{ ml: 2 }}>
            Billing & Payments
          </Typography>
        </Box>

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
                <TableCell>Bill Number</TableCell>
                <TableCell>Bill Name</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Amount (LKR)</TableCell>
                <TableCell>Status</TableCell>
                {tabIndex === 0 && <TableCell>Action</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.length > 0 ? (
                Data.filter((bill) => (tabIndex === 0 ? bill.status === 'Unpaid' : true)) // Filter based on tab
                  .map((bill, index) => (
                    <TableRow key={index}>
                      <TableCell>{bill.billNumber}</TableCell>
                      <TableCell>{bill.billName}</TableCell>
                      <TableCell>{bill.dueDate}</TableCell>
                      <TableCell>{bill.amount}</TableCell>
                      <TableCell>{bill.status}</TableCell>
                      {bill.status === 'Unpaid' && tabIndex === 0 && (
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handlePayNowClick(bill)}
                          >
                            Pay Now
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No Bills to Pay available
                  </TableCell>
                </TableRow>
              )}
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
