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
    fontWeight: '700',
  },
  '.hovered-img': {
    position: 'relative',
    cursor: 'pointer',
    '&::before': {
      transition: 'opacity 0.3s ease-in-out',
      opacity: 0,
      content: ' ',
      background: 'rgb(255 214 10)',
      position: 'absolute',
      inset: '0px 0px -2px 7px',
      borderRadius: '17px',
      width: '100%',
      clipPath: 'polygon(100% 77%, 79% 100%, 100% 100%)',
    },
    '&::after': {
      transition: 'opacity 0.3s ease-in-out',
      opacity: 0,
      content: ' ',
      background: 'rgb(255 214 10 / 47%)',
      position: 'absolute',
      inset: '0px 0px -2px 1px',
      width: '100%',
      clipPath: 'polygon(100% 65%, 68% 100%, 100% 100%)',
    },
    '&:hover:before': { opacity: 1 },
    '&:hover:after': { opacity: 1 },
  },
});
