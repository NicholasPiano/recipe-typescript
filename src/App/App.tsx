
import React, { FunctionComponent, useState } from 'react';
import { Button } from 'semantic-ui-react';

import StyledApp from './App.style';
import { Detail, SearchBar } from './components';
import { DetailInterface } from './interfaces';

const App:FunctionComponent = () => {
  const [detail, setDetail] = useState<DetailInterface>({});

  return (
    <StyledApp>
      <SearchBar setDetail={setDetail} />
      <Detail {...detail} />
    </StyledApp>
  );
};

export default App;
