// src/components/Footer.tsx
import React from 'react';
import { importImage } from '../utils/importImage';

type FooterProps = {
  companyName: string;
  year: number;
  nit: string;
};

const Footer: React.FC<FooterProps> = ({ companyName, year, nit }) => {
  return (
    <footer className="bg-custom-radial-header text-white p-5">
      {/* Footer Top */}
      <div className="footer-top flex flex-col md:flex-row justify-between items-center border-b border-white pb-4 mb-4">
        {/* Footer Info */}
        <div className="footer-info text-center md:text-left mb-4 md:mb-0">
          <p className="m-0">© {year} {companyName}</p>
          <p className="m-0">NIT: {nit}</p>
        </div>

        {/* Footer Social */}
        <div className="footer-social flex justify-center md:justify-start mb-4 md:mb-0">
          <a href="#" className="mx-2"><img src={importImage('facebook-svgrepo-com.svg')} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" /></a>
          <a href="#" className="mx-2"><img src={importImage('twitter-svgrepo-com.svg')} alt="Twitter" className="w-8 h-8 md:w-10 md:h-10" /></a>
          <a href="#" className="mx-2"><img src={importImage('instagram-svgrepo-com.svg')} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" /></a>
        </div>

        {/* Footer Payment */}
        <div className="footer-payment flex justify-center md:justify-start">
          <img src={importImage('pse.png')} alt="Pse" className="w-10 h-8 md:w-14 md:h-10 mx-2.5" />
          <img src={importImage('visa-svgrepo-com.svg')} alt="Visa" className="w-8 h-8 md:w-10 md:h-10 mx-2.5" />
          <img src={importImage('paypal-svgrepo-com.svg')} alt="PayPal" className="w-8 h-8 md:w-10 md:h-10 mx-2.5" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-4">
        <ul className="site-map flex flex-wrap justify-center space-x-5 md:space-x-8 m-0 p-0 list-none">
          <li><a href="/index.html" className="text-white no-underline">Inicio</a></li>
          <li><a href="#" className="text-gray-500 no-underline pointer-events-none">Productos</a></li>
          <li><a href="#" className="text-gray-500 no-underline pointer-events-none">Servicios</a></li>
          <li><a href="#" className="text-gray-500 no-underline pointer-events-none">Contacto</a></li>
          <li><a href="#" className="text-gray-500 no-underline pointer-events-none">Sobre Nosotros</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
