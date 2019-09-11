import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((_, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;