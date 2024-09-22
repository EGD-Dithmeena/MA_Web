import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

import {LandingPage} from './Pages';

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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
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
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
