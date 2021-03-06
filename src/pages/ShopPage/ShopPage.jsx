import React, { Component } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './shopdata';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
