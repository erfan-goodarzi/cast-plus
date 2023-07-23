import { createTheme, NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

const queryClient = new QueryClient();
const theme = createTheme({
  type: 'light',

  theme: {
    radii: {
      xs: '5px',
      base: '10px',
    },
    colors: {
      primary: '#ffd60a',
      primarySolidContrast: '#0f172b',
      primaryLightContrast: '#ffd60a',
      primaryLight: '#00254d',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={theme}>
        <App />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
