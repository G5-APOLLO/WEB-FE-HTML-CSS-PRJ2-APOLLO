import React from 'react';
import { importImage } from '../utils/importImage';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  normalPrice: number;
  discountedPrice: number;
  discount: number;
  pdpLink: string;
}
const formatCurrency = (value: number): string => {
  return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
};

const FeaturedProduct: React.FC<ProductProps> = ({ name, image, normalPrice, discountedPrice, discount, pdpLink }) => {
  return (
    <div className="bg-zinc-100 rounded-lg shadow-md flex flex-col items-center p-4 hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 transform">
      <a href={pdpLink}>
        <img src={importImage(image)} alt={name} className="w-full h-48 object-cover" />
      </a>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500 line-through">{formatCurrency(normalPrice)}</p>
        <p className="text-red-500 font-bold">{formatCurrency(discountedPrice)} ({discount}% off)</p>
      </div>
      <button className="mt-4 bg-zinc-600 text-white px-4 py-2 rounded hover:bg-neutral-700">
        Add to Cart
      </button>
    </div>
  );
};

export default FeaturedProduct;
