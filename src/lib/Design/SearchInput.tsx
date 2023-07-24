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
          'fontSize': '40xp',
          '::placeholder': {
            color: '#fff',
          },
        }}
        contentLeft={
          isLoading ? <Loader size="xs" /> : <FontAwesomeIcon icon={faSearch} />
        }
      />
    );
  },
);
