import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import images from '../assets/images';

const products = [
  {
    id: 1,
    name: 'iPhone 15 128 GB 5G Rosa',
    image: images["iPhone 15"],
    normalPrice: 4599010,
    discountedPrice: 4139010,
    discount: 10,
    pdpLink: '/product/1'
  },
  {
    id: 2,
    name: 'Celular SAMSUNG Galaxy Z Flip6 256GB 5G Plateado + Cover',
    image: images["Samsung Galaxy"],
    normalPrice: 5999990,
    discountedPrice: 4799990,
    discount: 20,
    pdpLink: '/product/2'
  },
  {
    id: 3,
    name: 'Tablet SAMSUNG 11 Pulgadas A9 Plus 128GB WiFi Color Gris',
    image: images["Tablet Samsung"],
    normalPrice: 1299900,
    discountedPrice: 779940,
    discount: 40,
    pdpLink: '/product/3'
  },
  {
    id: 4,
    name: 'Computador Portátil LENOVO 15,6 Pulgadas IdeaPad Slim 3 Táctil',
    image: images["Computador Lenovo"],
    normalPrice: 3599000,
    discountedPrice: 2159400,
    discount: 40,
    pdpLink: '/product/4'
  },
  {
    id: 5,
    name: 'Cámara de Acción GOPRO Hero 12 Black',
    image: images["Cámara GoPro"],
    normalPrice: 1989900,
    discountedPrice: 1392930,
    discount: 30,
    pdpLink: '/product/5'
  },
  {
    id: 6,
    name: 'TV SAMSUNG 60 Pulgadas',
    image: images["TV Samsung"],
    normalPrice: 3599900,
    discountedPrice: 2159940,
    discount: 40,
    pdpLink: '/product/6'
  },
  {
    id: 7,
    name: 'Juego de Sala Exterior MQ Plástico Ratán Capri Comfort Mocca',
    image: images["Juego de Sala"],
    normalPrice: 699950,
    discountedPrice: 629955,
    discount: 10,
    pdpLink: '/product/7'
  },
  {
    id: 8,
    name: 'Combo Comedor Redondo DKO Amaretto 4 Sillas Negras',
    image: images["Combo Comedor"],
    normalPrice: 1159900,
    discountedPrice: 899900,
    discount: 22,
    pdpLink: '/product/8'
  },
  {
    id: 9,
    name: 'Escritorio INVAL París Arena',
    image: images["Escritorio Inval"],
    normalPrice: 439900,
    discountedPrice: 369900,
    discount: 16,
    pdpLink: '/product/9'
  },
  {
    id: 10,
    name: 'Nevera LG No Frost Congelador Inferior 305 Litros Brutos GB33WPT Negro',
    image: images["Nevera LG"],
    normalPrice: 4999900,
    discountedPrice: 2799900,
    discount: 20,
    pdpLink: '/product/10'
  },
  {
    id: 11,
    name: 'Lavadora SAMSUNG Carga Superior 19 kilos WA19CG6441BD Gris',
    image: images["Lavadora Samsung"],
    normalPrice: 2019900,
    discountedPrice: 1799900,
    discount: 11,
    pdpLink: '/product/11'
  },
  {
    id: 12,
    name: 'Aire Acondicionado WHIRLPOOL 12000BTU Tipo split Inverter 220V LWA5060Q Blanco',
    image: images["Aire Whirlpool"],
    normalPrice: 2849900,
    discountedPrice: 1599900,
    discount: 44,
    pdpLink: '/product/12'
  }
];


const FeaturedProductsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.slice(0, 12).map((product) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
