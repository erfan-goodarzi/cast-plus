import { globalCss } from '@nextui-org/react';

export const GlobalStyles = globalCss({
  body: {
    color: '#fff',
    fontFamily: "'Quicksand', sans-serif !important",
    '::-webkit-scrollbar': {
      width: '9px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '2px',
      backgroundColor: 'rgb(162 162 162)',
      outline: '0',
    },
    '::-webkit-scrollbar-track': {
      width: '11rem',
      background: 'transparent',
    },
  },
  a: { color: '#fff !important' },
  '.MuiSlider-thumb': {
    color: '#000',
    width: '10px !important',
    height: '10px !important',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  },
  '.MuiSlider-root,.MuiButtonBase-root': {
    color: '#000 !important',
  },
  '.nextui-c-eFfoBo': {
    width: '107% !important',
  },
  '.active': {
    color: 'rgb(255, 214, 10) !important',
  },
  // '.carousel-arrow': {
  //   position: 'relative',
  //   left: '-3rem',
  //   zIndex: 2,
  //   top: '5rem',
  //   cursor: 'pointer',
  //   padding: '7px 6px',
  //   background: '#ffd60a',
  //   borderRadius: '7px',
  //   color: '#0f172b',
  // },
});
