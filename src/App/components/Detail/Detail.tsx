
import React, { FunctionComponent } from 'react';

import { DetailInterface } from '../../interfaces';
import StyledDetail from './Detail.style';
import { TitleBar, IngredientsList } from './components';

const Detail:FunctionComponent<DetailInterface> = ({ href, title, ingredients, thumbnail }) => (
  <StyledDetail>
    <TitleBar title={title} thumbnail={thumbnail} href={href} />
    <IngredientsList ingredients={ingredients} />
  </StyledDetail>
);

export default Detail;
