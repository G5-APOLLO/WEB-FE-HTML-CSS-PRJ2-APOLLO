import React from 'react';
import FeaturedProduct from './FeaturedProduct';
//import { products } from '../data/FeaturedProducts.data';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts';
import { Link } from 'react-router-dom';
import { ProductProps } from '../types/Product.type';


const FeaturedProductsList: React.FC = () => {

  const { data, error, isLoading } = useFeaturedProducts();
  console.log(data);
  if (isLoading) return (<p> Cargando </p>);
  if (error) return (<p>Error</p>);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {data.slice(0, 12).map((product: ProductProps) => (
        <Link
          to={`${product.pdpLink}?optionId=${product.id}`}
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
