
import React, { FunctionComponent, useState } from 'react';

import StyledSearchBar from './SearchBar.style';
import { QueryInput, IngredientsInput, ResultsList } from './components';

type SearchBarProps = {
  setDetail: Function,
};

const SearchBar:FunctionComponent<SearchBarProps> = ({ setDetail }) => {
  const [query, setQuery] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState([]);

  return (
    <StyledSearchBar>
      <QueryInput setQuery={setQuery} />
      <IngredientsInput setIngredients={setIngredients} />
      <ResultsList query={query} ingredients={ingredients} setDetail={setDetail} />
    </StyledSearchBar>
  );
};

export default SearchBar;
