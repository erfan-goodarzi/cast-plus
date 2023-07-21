import { Loading } from '@nextui-org/react';

export const Loader = ({ ...rest }) => {
  return <Loading {...rest} css={{ width: 'auto', mx: 'auto', my: 'auto' }} />;
};
