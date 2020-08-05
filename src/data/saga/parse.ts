
interface responseInterface {
  ok: boolean,
  json: Function,
}

const parse = (response: responseInterface) => {
  const isOk = response.ok;

  if (isOk) {
    return response.json();
  }

  return {};
}

export default parse;
