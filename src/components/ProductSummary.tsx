import React from 'react';
import { ProductProps } from '../types/Product.type'; 
import { formatCurrency } from '../utils/formatCurrency';

const ProductSummary: React.FC<ProductProps> = ({ name, normalPrice, discountedPrice, discount }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Precio normal: ${formatCurrency(normalPrice)}</p>
      <p>Precio con descuento: ${formatCurrency(discountedPrice)}</p>
      <p>Descuento: {discount}%</p>
    </div>
  );
};

export default ProductSummary;
