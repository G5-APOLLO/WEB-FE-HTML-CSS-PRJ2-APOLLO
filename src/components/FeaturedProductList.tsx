import React from 'react';
import FeaturedProduct from './FeaturedProduct';
//import { products } from '../data/FeaturedProducts.data';

import { Link } from 'react-router-dom';
import { ProductProps } from '../types/Product.type';
import Spinner from './Spinner';
import ErrorComponent from './ErrorComponent';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts';


const FeaturedProductsList: React.FC = () => {

  const { data, error, isLoading } = useFeaturedProducts();


  if (isLoading) return <Spinner />;
  if (error) return <ErrorComponent message="Failed to load featured products." />;
  const filteredProducts = data.filter((product: ProductProps) => product.id >= 87);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {filteredProducts.slice(0, 12).map((product: ProductProps) => (
        <Link
          to={`/pdp?optionId=${product.id}&optionName=${product.name}`}
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
