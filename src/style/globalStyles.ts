import { globalCss } from '@nextui-org/react';

export const GlobalStyles = globalCss({
  body: { color: '#fff', fontFamily: "'Quicksand', sans-serif !important" },
  a: { color: '#fff !important' },
  '.MuiSlider-thumb': {
    color: '#000',
    width: '10px !important',
    height: '10px !important',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  },
  '.MuiSlider-root,.MuiButtonBase-root':{
    color: '#000 !important'
  }
});
