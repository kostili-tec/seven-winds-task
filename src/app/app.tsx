import '@fontsource/roboto/400.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/Header/Header';
import { theme } from './theme/theme';
import MainLayout from '../components/MainLayout/MainLayout';

export default function app() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainLayout />
    </ThemeProvider>
  );
}
