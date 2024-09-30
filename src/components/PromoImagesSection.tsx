import React from 'react';
import PromoImage from './PromoImage';
//import { promoImages } from '../data/PromoImages.data';
import { usePromoImages } from '../hooks/usePromoImages';
import Spinner from './Spinner';
import ErrorComponent from './ErrorComponent';
import { PromoImageProps } from '../types/PromoImage.type';

const PromoImagesSection: React.FC = () => {

  const { data, error, isLoading } = usePromoImages();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorComponent message="Failed to load promotional images." />;
  return (
    <section className="promo-images flex flex-col gap-5 mb-10 px-0">
      {data.map((promo: PromoImageProps) => (
        <PromoImage
          key={promo.id}
          id={promo.id}
          image={promo.image}
          imageResponsive={promo.imageResponsive}
          alt={promo.alt}
        />
      ))}
    </section>
  );
};

export default PromoImagesSection;
