
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';
import selectors from '../../selectors';
import createId from './createId';

type useQueryType = {
  query: string | null,
  ingredients: Array<string>,
  page: number,
}

const useQuery = ({ query, ingredients = [], page = 0 }: useQueryType) => {
  const dispatch = useDispatch();
  const id = createId({ query, ingredients, page });
  const result = useSelector(selectors.querySelector)(id);
  const shouldFetch = !result && (query || (ingredients && ingredients.length));

  useEffect(() => {
    if (shouldFetch) {
      dispatch(actions.fetch({ id, query, ingredients, page }));
    }
  }, [id]);

  return result;
};

export default useQuery;
