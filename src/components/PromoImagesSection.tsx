import React from 'react';
import PromoImage from './PromoImage';
import { promoImages } from '../data/PromoImages.data';

const PromoImagesSection: React.FC = () => {
  return (
    <section className="promo-images flex flex-col gap-5 mb-10 px-0">
      {promoImages.map((promo) => (
        <PromoImage
          key={promo.id}
          image={promo.image}
          imageResponsive={promo.imageResponsive}
          alt={promo.alt}
        />
      ))}
    </section>
  );
};

export default PromoImagesSection;
