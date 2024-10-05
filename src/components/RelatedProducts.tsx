import React from 'react';
import Spinner from './Spinner'; 
import ErrorComponent from './ErrorComponent'; 

import { formatCurrency } from '../utils/formatCurrency';
import { useRelatedProducts } from '../hooks/useRelatedProducts';

interface RelatedProductsProps {
  optionId: number; 
  currentProductId: number; 
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ optionId, currentProductId }) => {
  const { data: relatedProducts, error, isLoading } = useRelatedProducts(optionId, currentProductId);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorComponent message="Error al cargar productos relacionados." />;

  // Verificar si `relatedProducts` está definido
  if (!relatedProducts || relatedProducts.length === 0) {
    return <p className="text-center">No se encontraron productos relacionados.</p>;
  }

  return (
    <div className="related-products-container mt-6">
      <h2 className="text-center text-3xl font-bold mb-4">Te podría interesar...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map(product => (
          <a
            href={`/pdp?optionId=${product.id}&productName=${product.name}`} 
            key={product.id}
            className="block"
          >
            <div className="relative p-4 bg-zinc-100 border border-gray-100 rounded-lg shadow-lg hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 transform">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-t-lg" />
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 line-through">{formatCurrency(product.normalPrice)}</p>
                <p className="text-red-600 font-bold">{formatCurrency(product.discountedPrice)}</p>
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">-40%</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
