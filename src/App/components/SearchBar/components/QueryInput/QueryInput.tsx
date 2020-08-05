
import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { hooks } from './utilities';
import StyledQueryInput from './QueryInput.style';

type QueryInputProps = {
  setQuery: Function,
};

const QueryInput:FunctionComponent<QueryInputProps> = ({ setQuery }) => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    { value: inputValue }: { value: string },
  ) => setValue(inputValue);
  const debouncedValue = hooks.useDebounce(value, 300);

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue]);

  return (
    <StyledQueryInput
      onChange={handleChange}
      placeholder="Search for recipes..."
    />
  );
};

QueryInput.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default QueryInput;
