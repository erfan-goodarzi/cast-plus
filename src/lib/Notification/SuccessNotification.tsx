import { Notify } from 'notiflix';

interface Props {
  msg: string;
}
export const SuccessNotification = ({ msg }: Props) =>
  Notify.success(msg, {
    position: 'center-top',
    timeout: 2000,
    fontSize: '15px',
    success: {
      textColor: '#000',
      notiflixIconColor: '#13b569',
      background: '#2cff9e',
    },
  });
