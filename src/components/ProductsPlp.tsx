import React from 'react';
import { ProductProps } from '../types/ProductPlp.type';
import { importImage } from '../utils/importImage';
import { formatCurrency } from '../utils/formatCurrency';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cart.slice';

const Product: React.FC<ProductProps> = ({ id, image, name, rating, description, normalPrice, discountedPrice }) => {
    
    const dispatch = useDispatch();

    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const productToAdd = {
            id,
            name,
            image,
            normalPrice,
            discountedPrice,
            quantity: 1,
            shippingMethod: 'estándar'
        };

        dispatch(addToCart(productToAdd));

        console.log(`Producto agregado al carrito: ${name}`);
    };

    return (
        <div className="flex flex-col md:flex-row items-center border p-6 mb-6 group font-poppins"> 
            <img 
                src={image} 
                alt={name} 
                className="w-full md:w-[35%] mb-5 md:mb-0 md:mr-6 transform transition-transform duration-300 ease-in-out group-hover:scale-110" 
            />
            <div className="flex-1">
                <h4 className="font-semibold mb-4">{name}</h4> 
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src={i < rating ? importImage("star-1-svgrepo-com.svg") : importImage("star-slash-svgrepo-com.svg")}
                            alt="star"
                            className="w-8 h-8 mr-7 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    ))}
                    <span className="ml-2 hidden md:inline">{rating}.0</span> 
                </div>
                <p className="mb-4">{description}</p>
                <div className="flex items-center">
                    {normalPrice > 0 && (
                        <span className="text-gray-500 line-through mr-2">
                            {formatCurrency(normalPrice)}
                        </span>
                    )}
                    <span className="text-red-500 font-semibold">
                        {formatCurrency(discountedPrice)}
                    </span>
                </div>
                <button 
                    onClick={handleAddToCart} 
                    className="bg-[#36382E] text-white w-full py-3 mt-6 rounded-lg text-xl"
                >
                    Agregar al carrito
                </button> 
            </div>
        </div>
    );
};

export default Product;
