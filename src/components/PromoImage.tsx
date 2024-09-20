import React from 'react';

type PromoImageProps = {
  image: string;
  alt: string;
};

const PromoImage: React.FC<PromoImageProps> = ({ image, alt }) => {
  return (
    <div className="promo-image w-full rounded-lg overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default PromoImage;
