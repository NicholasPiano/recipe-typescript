
type parametersType = {
  [key: string]: any,
};

const convertUrlParameters = (parameters: parametersType) => Object.keys(parameters).reduce(
  (acc: Object | null, key: string) => {
    const parameter = parameters[key];

    if (!parameter) {
      return acc;
    }

    const separator = acc ? '&' : '?';
    const existing = acc ? acc : '';

    return `${existing}${separator}${key}=${parameter}`;
  },
  null,
);

export default convertUrlParameters;
