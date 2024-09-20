import React from 'react';
import { importImage } from '../utils/importImage';
import { PromoImageProps } from '../types/PromoImage.type';

const PromoImage: React.FC<PromoImageProps> = ({ image, imageResponsive, alt }) => {
  return (
    <div className="promo-image w-full rounded-lg overflow-hidden">
      <img
        src={importImage(imageResponsive)}
        alt={alt}
        className="w-full h-full object-cover sm:hidden" // Imagen para pantallas pequeñas
      />
      <img
        src={importImage(image)}
        alt={alt}
        className="w-full h-full object-cover hidden sm:block" // Imagen para pantallas más grandes
      />
    </div>
  );
};

export default PromoImage;
