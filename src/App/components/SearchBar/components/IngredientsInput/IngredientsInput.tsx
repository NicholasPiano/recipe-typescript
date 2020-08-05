
import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StyledIngredientsInput from './IngredientsInput.style';

type IngredientsInputProps = {
  setIngredients: Function,
};

const IngredientsInput:FunctionComponent<IngredientsInputProps> = ({ setIngredients }) => {
  const [options, setOptions] = useState<Array<{ text: string, value: string }>>([]);
  const [current, setCurrent] = useState<Array<string> | string>([]);
  const handleAddItem = (
    event: React.MouseEvent<HTMLButtonElement>,
    { value }: { value: string },
  ) => setOptions(
    [...options, { value, text: value }],
  );
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    { value }: { value: string },
  ) => {
    setIngredients(value);
    setCurrent(value);
  };

  return (
    <StyledIngredientsInput
      options={options}
      search
      selection
      multiple
      allowAdditions
      value={current}
      onAddItem={handleAddItem}
      onChange={handleChange}
      placeholder="Add ingredients..."
    />
  );
};

IngredientsInput.propTypes = {
  setIngredients: PropTypes.func.isRequired,
};

export default IngredientsInput;
