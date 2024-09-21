import React from 'react';
import { ProductProps } from '../types/ProductPlp.type';


const Product: React.FC<ProductProps> = ({ image, name, rating, description, normalPrice, discountedPrice }) => {
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
                src={i < rating ? '/img/plp/star-1-svgrepo-com.svg' : '/img/plp/star-slash-svgrepo-com.svg'}
                alt="star"
                className="w-8 h-8 mr-7 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            ))}
            <span className="ml-2">{rating}.0</span> 
            </div>
            <p className="mb-4">{description}</p> 
            <p className="text-xl mb-4">
            <span className="line-through text-gray-500 mr-2">{normalPrice}</span>
            <span className="text-red-600 font-bold text-2xl">{discountedPrice}</span> 
            </p>
            <button className="bg-[#36382E] text-white w-full py-3 mt-6 rounded-lg text-xl">Agregar al carrito</button> 
        </div>
        </div>
    );
};

export default Product;