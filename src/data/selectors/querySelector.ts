
type stateType = {
  [key: string]: any,
};

const querySelector = (state: stateType) => (id: string): any | null => {
  if (id in state) {
    return state[id];
  }

  return null;
};

export default querySelector;
