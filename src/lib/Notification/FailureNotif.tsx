import { Report } from 'notiflix';

export const FailureNotif = () =>
  Report.failure(
    'Something Went Wrong',
    'There could be something wrong with the server or your network connection.',
    'Try Again',
    () => {
      window.location.reload();
    },
    {
      titleFontSize: '18px',
      borderRadius: '8px',
      svgSize: '85px',
      messageFontSize: '16px',
      backgroundColor: 'rgb(15, 23, 43)',
      failure: {
        titleColor: '#fff',
        messageColor: '#fff',
      },
    },
  );
