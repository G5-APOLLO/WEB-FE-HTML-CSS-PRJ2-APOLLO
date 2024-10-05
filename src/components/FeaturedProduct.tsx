import React from 'react';
import { ProductProps } from '../types/Product.type';
import { formatCurrency } from '../utils/formatCurrency';
import { Link } from 'react-router-dom';
import { addToCart } from '../slices/cart.slice';
import { useDispatch } from 'react-redux';

const FeaturedProduct: React.FC<ProductProps> = ({ id, name, image, normalPrice, discountedPrice, discount}) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      image,
      normalPrice,
      discountedPrice,
      quantity: 1,
      shippingMethod: 'estándar', 
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-zinc-100 rounded-lg shadow-md flex flex-col justify-between items-center p-4 hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 transform h-full">
      <div>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500 line-through">{formatCurrency(normalPrice)}</p>
        <p className="text-red-500 font-bold">{formatCurrency(discountedPrice)} ({discount}% off)</p>
      </div>


      <Link to="/#">
        <button  onClick={handleAddToCart} className="mt-4 bg-zinc-600 text-white px-4 py-2 rounded hover:bg-neutral-700">
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
