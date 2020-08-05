
import React, { FunctionComponent, useState, useEffect } from 'react';
import { List, Visibility } from 'semantic-ui-react';
import range from 'lodash/range';

import { PageList, ResultsListItem, ResultsListWrapper } from './components';

type ResultsListProps = {
  query: string | null,
  ingredients: Array<string>,
  setDetail: Function,
};

const ResultsList:FunctionComponent<ResultsListProps> = ({ query, ingredients, setDetail }) => {
  const [page, setPage] = useState(0);
  const handleIncrementPage = () => setPage(page + 1);
  const pages = range(page + 1);
  const allIngredients = ingredients.join(',');

  useEffect(() => {
    if (page !== 0) {
      setPage(0);
    }
  }, [query, allIngredients]);

  const shouldDisplay = (query && query !== '') || allIngredients !== '';

  useEffect(() => {
    if (!shouldDisplay) {
      setDetail({});
    }
  }, [shouldDisplay]);

  if (!shouldDisplay) {
    return null;
  }

  return (
    <ResultsListWrapper>
      <Visibility
        as={List}
        once={false}
        onBottomVisible={handleIncrementPage}
      >
        {pages.map(index => (
          <ResultsListItem key={index}>
            <PageList
              query={query}
              ingredients={ingredients}
              page={index}
              setDetail={setDetail}
            />
          </ResultsListItem>
        ))}
      </Visibility>
    </ResultsListWrapper>
  );
};

export default ResultsList;
