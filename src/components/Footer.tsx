// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { importImage } from '../utils/importImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-radial-header text-white p-6">
      <div className="footer-top flex flex-col md:flex-row justify-between items-center border-b border-white pb-4 mb-4">
        <div className="footer-info mb-4 md:mb-0">
          <p>© 2022 CLICKY S.A.S.</p>
          <p>NIT: 123456789-0</p>
        </div>
        <div className="footer-social flex mb-4 md:mb-0">
          <a href="#" className="mx-2">
            <img src={importImage('facebook-svgrepo-com.svg')} alt="Facebook" width="40" height="40" />
          </a>
          <a href="#" className="mx-2">
            <img src={importImage('twitter-svgrepo-com.svg')} alt="Twitter" width="40" height="40" />
          </a>
          <a href="#" className="mx-2">
            <img src={importImage('instagram-svgrepo-com.svg')} alt="Instagram" width="40" height="40" />
          </a>
        </div>
        <div className="footer-payment flex mb-4 md:mb-0">
          <img src={importImage('pse.png')} alt="Pse" width="60" height="40" className="mx-2" />
          <img src={importImage('visa-svgrepo-com.svg')} alt="Visa" width="40" height="40" className="mx-2" />
          <img src={importImage('paypal-svgrepo-com.svg')} alt="PayPal" width="40" height="40" className="mx-2" />
        </div>
      </div>
      <div className="footer-bottom py-2">
        <ul className="site-map list-none flex flex-wrap justify-center space-x-5 m-0 p-0">
          <li>
            <Link to="/" className="text-white no-underline">Inicio</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-500 no-underline">Productos</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-500 no-underline">Servicios</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-500 no-underline">Contacto</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-500 no-underline">Sobre Nosotros</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
