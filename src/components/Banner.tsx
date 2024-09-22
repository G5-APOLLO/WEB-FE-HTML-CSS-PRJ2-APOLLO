import React from 'react';

interface BannerProps {
  image: string;
  imageResponsive: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ image, imageResponsive, alt }) => {
  return (
    <section className="banner w-full rounded-lg overflow-hidden banner mt-6 mb-6">
      {/* Imagen para pantallas pequeñas */}
      <img
        src={imageResponsive}
        alt={alt}
        className="w-full h-full object-cover sm:hidden"
      />
      {/* Imagen para pantallas más grandes */}
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover hidden sm:block"
      />
    </section>
  );
};

export default Banner;
