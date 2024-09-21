import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import { products } from '../data/FeaturedProducts.data';
import { Link } from 'react-router-dom';

const FeaturedProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, 12).map((product) => (
        <Link
          to={`/pdp?optionId=${product.id}`}
          className="block"
          key={product.id}
        >
          <div className="h-full">
            <FeaturedProduct {...product} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProductsList;
