import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FormElement, NormalSizes } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import React from 'react';

import { Loader } from './Loader';

interface Props {
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<FormElement>) => void;
  size: NormalSizes;
  isLoading: boolean;
  width: string;
}

export const SearchInput = React.forwardRef<FormElement, Props>(
  (
    {
      placeholder,
      changeHandler,
      size,
      width,
      isLoading,

      ...rest
    },
    ref,
  ) => {
    return (
      <Input
        {...rest}
        ref={ref}
        onChange={changeHandler}
        aria-label="search"
        clearable
        underlined
        status="primary"
        color="primary"
        width={width}
        size={size}
        placeholder={placeholder}
        css={{
          '@xs': {
            pl: 80,
          },
          '@sm': {
            pl: 0,
          },
          '@lg': {
            pl: 0,
          },
          'input': {
            'fontSize': 16,
            '@lg': {
              fontSize: 18,
            },
          },
          '::placeholder': {
            'color': '#fff',
            'fontSize': 14,
            '@lg': {
              fontSize: 16,
            },
          },
        }}
        contentLeft={
          isLoading ? <Loader size="xs" /> : <FontAwesomeIcon icon={faSearch} />
        }
      />
    );
  },
);
