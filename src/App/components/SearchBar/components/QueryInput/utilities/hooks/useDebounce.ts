
import { useState, useEffect } from 'react';

type valueType = string | null;

const useDebounce = (value: valueType, timeout: number) => {
  const [state, setState] = useState<valueType>(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
};

export default useDebounce;
