import { createTheme } from '@nextui-org/react';

export const theme = createTheme({
  type: 'light',
  theme: {
    radii: {
      xs: '5px',
      base: '10px',
    },
    colors: {
      primary: '#ffd60a !important',
      primarySolidContrast: '#0f172b',
      primaryLightContrast: '#ffd60a',
      primaryLight: '#00254d !important',
    },
  },
});
