import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      fontWeight: 400,
      textTransform: 'capitalize',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#FFF',
      contrastText: '#A1A1AA',
    },
    secondary: {
      light: '#A1A1AA',
      main: '#A1A1AA',
      dark: '#A1A1AA',
      contrastText: '#A1A1AA',
    },
    background: {
      default: '#202124',
    },
  },
});
