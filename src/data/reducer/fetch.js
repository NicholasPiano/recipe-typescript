
const fetch = (state, action) => {
  const { id, ...rest } = action.payload;

  return {
    ...state,
    [id]: {
      parameters: { ...rest },
      loading: true,
    },
  };
};

export default fetch;
