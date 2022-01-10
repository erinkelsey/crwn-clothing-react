import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.component.jsx';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  collections: selectShopCollections(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
