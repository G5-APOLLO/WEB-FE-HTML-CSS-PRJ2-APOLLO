import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import { products } from '../data/FeaturedProducts.data';
import { Link } from 'react-router-dom';
const FeaturedProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.slice(0, 12).map((product) => (
        <Link
          to={`/pdp?optionId=${product.id}`}
          className="text-[13px] sm:text-base block py-[7px] sm:py-[10px] px-[10px] sm:px-[15px] no-underline text-black hover:bg-[#fcfcfc]"
        >
          <FeaturedProduct key={product.id} {...product} />

        </Link>
      ))}
    </div>
  );
};

export default FeaturedProductsList;
