
import { CallEffect } from 'redux-saga/effects';

import convertUrlParameters from './convertUrlParameters';
import parse from './parse';

const proxy: string = 'https://cors-anywhere.herokuapp.com/';
const url: string = 'http://www.recipepuppy.com/api';

type fetchType = {
  query?: string,
  ingredients?: Array<string>,
  page?: number,
};

export type fetchFromRecipePuppyType = Promise<{ response: any } | { error: any }>;

function fetchFromRecipePuppy({ query, ingredients = [], page }: fetchType): fetchFromRecipePuppyType {
  const i: string = ingredients.join(',');
  const args: Object | null = convertUrlParameters({ i, q: query, p: page });
  const full: string = `${proxy}${url}${args}`;
  const headers: any | null = { Origin: null };

  return fetch(full, { headers }).then(
    parse,
  ).then(
    response => ({ response }),
  ).catch(
    error => ({ error }),
  );
}

export default fetchFromRecipePuppy;
