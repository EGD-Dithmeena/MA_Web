import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { LandingPage } from './Pages';
import { LoginPage } from './Pages';
import { SignupPage1, SignupPage2, SignupPage3, SignupPage4, SignupConfirmationPage } from './Pages';

import { UserDashboardPage1 } from './Pages';
import { ServiceManagementPage1 } from './Pages';
import { BillingAndPaymentsPage1 } from './Pages';
import { NotificationPage1 } from './Pages';
import { UserProfilePage } from './Pages';

import { ForgetPasswordPage1, ForgetPasswordPage2, ForgetPasswordConfirmationPage } from './Pages';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#248FEF', // Primary color
    },
    secondary: {
      main: '#F2A365', // Secondary color
    },
  },

  typography: {
    fontFamily: 'Poppins, sans-serif', // Apply Poppins globally
    h1: {
      fontWeight: 700, // Custom weight for h1
    },
    h2: {
      fontWeight: 600, // Custom weight for h2
    },
    body1: {
      fontWeight: 400, // Regular body text weight
      fontSize: '0.8rem', // Custom font size for body1
    },
    body2: {
      fontWeight: 300, // Regular body text weight
    },
    button: {
      textTransform: 'none', // Disable uppercase transformation for buttons
      fontWeight: 500,
      fontSize: '1rem', // Custom font size for body1
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '0.7rem', // Custom font size for contained buttons
          backgroundColor: '#248FEF', // Custom background color for contained buttons
          color: '#ffffff', // Custom font color for contained buttons
          borderRadius: '8px', // Custom border radius for contained buttons
          '&:hover': {
            backgroundColor: '#ffffff', // Darker background on hover
            border: '1px solid #248FEF',
            color: '#248FEF', // Darker font color on hover
          },
        },
        outlined: {
          fontSize: '0.7rem', // Custom font size for contained buttons
          border: '1px solid #248FEF', // Custom border for outlined buttons
          color: '#248FEF', // Custom font color for outlined buttons
          borderRadius: '8px', // Custom border radius for outlined buttons
          '&:hover': {
            border: '1px solid #248FEF', // Darker border on hover
            color: '#ffffff', // Darker font color on hover
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Use the custom CSS variable
          boxShadow: 'none', // Remove the default box 
        },
      },
    },

    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       padding: '0', // Remove default padding
    //     },
    //   },
    // },

  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            {/* Landing Page */}
            <Route index element={<LandingPage />} />

            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Sign Up Page 1 */}
            <Route path="/signup/email&password" element={<SignupPage1 />} />

            {/* Sign Up Page 2 */}
            <Route path="/signup/mobile" element={<SignupPage2 />} />

            {/* Sign Up Page 3 */}
            <Route path="/signup/otp" element={<SignupPage3 />} />

            {/* Sign Up Page 4 */}
            <Route path="/signup/personalinfo" element={<SignupPage4 />} />
            
            {/* Sign Up Success Page */}
            <Route path="/signup/success" element={<SignupConfirmationPage />} />

            {/* User Dashboard Page 1 */}
            <Route path="/userDashboard/home" element={<UserDashboardPage1 />} />

            {/* Service Management Page 1*/}
            <Route path="/serviceManagement/home" element={<ServiceManagementPage1 />} />

            {/* Billing and Payments Page 1 */}
            <Route path="/billingAndPayments/home" element={<BillingAndPaymentsPage1 />} />

            {/* Notification Page 1 */}
            <Route path="/notification/home" element={<NotificationPage1 />} />

            {/* User Profile Page */}
            <Route path="/userProfile/home" element={<UserProfilePage />} />

            {/* Forget Password Page 1 */}
            <Route path="/forgetPassword/email" element={<ForgetPasswordPage1 />} />

            {/* Forget Password Page 1 */}
            <Route path="/forgetPassword/password" element={<ForgetPasswordPage2 />} />

            {/* Forget Password Success Page */}
            <Route path="/forgetPassword/success" element={<ForgetPasswordConfirmationPage />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
