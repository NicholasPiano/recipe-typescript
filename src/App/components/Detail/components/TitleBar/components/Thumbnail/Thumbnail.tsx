
import React, { FunctionComponent } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import isNull from 'lodash/isNull';

import StyledThumbnail from './Thumbnail.style';

type ThumbnailProps = {
  thumbnail?: string,
};

const Thumbnail:FunctionComponent<ThumbnailProps> = ({ thumbnail }) => {
  if (!thumbnail) {
    return null;
  }

  const renderThumbnail = () => {
    if (thumbnail !== '') {
      return <Image src={thumbnail} />;
    }

    return <Icon size="huge" name="food" />;
  };

  return (
    <StyledThumbnail>
      {renderThumbnail()}
    </StyledThumbnail>
  );
};

export default Thumbnail;
