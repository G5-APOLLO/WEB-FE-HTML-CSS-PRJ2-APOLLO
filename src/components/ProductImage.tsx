import React from 'react';

const ProductImage: React.FC<{ imageUrl: string; altText: string }> = ({ imageUrl, altText }) => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs lg:max-w-md"> 
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full md:w-[35%] mb-5 md:mb-0 md:mr-6 transform transition-transform duration-300 ease-in-out group-hover:scale-110" 
        
      />
    </div>
  );
};

export default ProductImage;
