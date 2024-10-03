import React from 'react';
import FeaturedProduct from './FeaturedProduct';
//import { products } from '../data/FeaturedProducts.data';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts';
import { Link } from 'react-router-dom';
import { ProductProps } from '../types/Product.type';
import Spinner from './Spinner';
import ErrorComponent from './ErrorComponent';


const FeaturedProductsList: React.FC = () => {

  const { data, error, isLoading } = useFeaturedProducts();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorComponent message="Failed to load featured products." />;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {data.slice(0, 12).map((product: ProductProps) => (

          <div className="h-full">
            <FeaturedProduct {...product} />
          </div>

      ))}
    </div>
  );
};

export default FeaturedProductsList;
