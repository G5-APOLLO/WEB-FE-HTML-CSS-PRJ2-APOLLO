import React from 'react';

interface ProductProps {
image: string;
name: string;
rating: number;
description: string;
normalPrice: string;
discountedPrice: string;
}

const Product: React.FC<ProductProps> = ({ image, name, rating, description, normalPrice, discountedPrice }) => {
return (
    <div className="flex flex-col md:flex-row items-center border p-4 mb-4">
    <img src={image} alt={name} className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4" />
    <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{name}</h4>
        <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
            <img
            key={i}
            src={i < rating ? 'img/star-1-svgrepo-com.svg' : 'img/star-slash-svgrepo-com.svg'}
            alt="star"
            className="w-4 h-4"
            />
        ))}
        <span className="ml-2">{rating}.0</span>
        </div>
        <p className="mb-2">{description}</p>
        <p>
        <span className="line-through text-gray-500 mr-2">{normalPrice}</span>
        <span className="text-red-500 font-bold">{discountedPrice}</span>
        </p>
        <button className="bg-[#36382E] text-white w-full py-2 mt-4 rounded">Agregar al carrito</button>
    </div>
    </div>
);
};

export default Product;