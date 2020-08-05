
import React, { FunctionComponent } from 'react';

import hooks from '../../../../../../../data/hooks';
import StyledPageList from './PageList.style';
import { PageListItem } from './components';

type PageListProps = {
  query: string | null,
  ingredients: Array<string>,
  page: number,
  setDetail: Function,
};

type resultsType = {
  href: string,
  title: string,
  ingredients: string,
  thumbnail: string,
};

const PageList:FunctionComponent<PageListProps> = ({ query, ingredients, page, setDetail }) => {
  const { loading, results } = hooks.useQuery({ query, ingredients, page }) || {};

  if (loading) {
    return <>'Loading...'</>;
  }

  return (
    <StyledPageList celled>
      {results && results.map(({ href, ...rest }: resultsType) => (
        <PageListItem key={href} setDetail={setDetail} href={href} {...rest} />
      ))}
    </StyledPageList>
  );
};

export default PageList;
