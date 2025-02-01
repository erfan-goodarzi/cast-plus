import { globalCss } from '@nextui-org/react';

export const GlobalStyles = globalCss({
  'body': {
    color: '#fff',
    background: '#0F172B',
    boxSizing: 'border-box',
    margin: 0,
    fontFamily: "'Quicksand', sans-serif !important",
  },
  '.nextui-tooltip-button': {
    mx: 'auto',
    width: '100% !important',
  },

  '::-webkit-scrollbar': { width: 8 },
  '::-webkit-scrollbar-track': {
    background: '#fff',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgb(179 179 179)',
    outline: '0',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'rgb(103 103 103)',
  },
  'a': { color: '#fff !important' },

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
    'position': 'relative',
    'cursor': 'pointer',
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
  // tab styles
  '.react-tabs__tab-list': { margin: '0', padding: '0' },
  '.react-tabs__tab': {
    'display': 'flex',
    'outline': 'none',
    'padding': '10px 21px',
    'color': '#fff',
    'fontSize': '16px',
    'fontWeight': 600,
    'cursor': 'pointer',
    'border': 'none',
    'backgroundColor': 'transparent',
    'transition': 'all 0.2s ease-in-out 0s',
    '&:hover': {
      background: '#ffd60a',
      color: '#00254d',
    },
    '&--selected': {
      background: '#ffd60a',
      color: '#00254d',
    },
  },
  '.embla': {
    position: 'relative',
    background: 'linear-gradient(1deg, #ffffffd1, transparent)',
    padding: '24px',
    maxWidth: "'auto'",
    height: '264px',
    zIndex: 2,
    borderRadius: '12px',
    marginTop: '1rem',
  },
  '.embla__viewport': { overflow: 'hidden', width: '102.3%' },
  '.embla__viewport.is-draggable': { cursor: 'grab' },
  '.embla__viewport.is-dragging': { cursor: 'grabbing' },
  '.embla__container': {
    display: 'flex',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: '57px',
  },
  '.embla__slide': {
    position: 'relative',
    paddingLeft: '65px',
    minWidth: '21%',
  },
  '.embla__slide__inner': {
    position: 'relative',
    overflow: 'hidden',
    height: '35vh',
    right: '6rem',
  },
  '.embla__slide__img': {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    width: 'auto',
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none',
    transform: 'translate(-50%, -50%)',
  },
  '@media (max-width: 767px)': {
    '.embla': { height: '280px' },
    '.embla__slide': { minWidth: '100%' },
  },
  '@media (min-width: 768px) and (max-width: 991px)': {
    '.embla__slide': { minWidth: '45%' },
  },
  '@media (min-width: 992px) and (max-width: 1199px)': {
    '.embla__slide': { minWidth: '27%' },
  },
  '@media (min-width: 1411px) and (max-width: 1600px)': {
    '.embla__slide': { minWidth: '30%' },
  },
});
