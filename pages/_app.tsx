import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { StyledEngineProvider } from '@mui/styled-engine-sc';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
