import {createTheme, responsiveFontSizes} from "@mui/material"

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Bleu profond (accent)
    },
    secondary: {
      main: '#10b981', // Vert menthe
    },
    background: {
      default: '#f4f7fa', // Gris clair, légèrement plus doux
      paper: '#ffffff', // Blanc cassé, toujours pur mais plus doux
    },
    text: {
      primary: '#1f2937', // Gris foncé
      secondary: '#6b7280', // Gris moyen
    },
  },
  typography: {
    fontFamily: ['"Inter"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});




export default responsiveFontSizes(theme)