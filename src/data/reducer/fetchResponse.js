
const fetchResponse = (state, action) => {
  const { id, response: { results } } = action.payload;
  const { [id]: query } = state;

  return {
    ...state,
    [id]: {
      ...query,
      error: false,
      loading: false,
      results,
    },
  };
};

export default fetchResponse;
