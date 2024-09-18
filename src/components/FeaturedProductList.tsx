import React from 'react';
import FeaturedProduct from './FeaturedProduct';

const products = [
  { id: 1, name: 'Smartwatch X1', image: '/assets/images/smartwatch1.jpg', normalPrice: 199, discountedPrice: 149, discount: 25, pdpLink: '/product/1' },
  { id: 2, name: 'Smartwatch X2', image: '/assets/images/smartwatch2.jpg', normalPrice: 249, discountedPrice: 199, discount: 20, pdpLink: '/product/2' },
  // Añadir más productos aquí...
];

const FeaturedProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
