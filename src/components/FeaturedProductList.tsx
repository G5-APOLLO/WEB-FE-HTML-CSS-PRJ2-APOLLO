import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import { products } from '../data/FeaturedProducts.data';
const FeaturedProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.slice(0, 12).map((product) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
