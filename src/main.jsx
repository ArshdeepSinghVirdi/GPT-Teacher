import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
)
