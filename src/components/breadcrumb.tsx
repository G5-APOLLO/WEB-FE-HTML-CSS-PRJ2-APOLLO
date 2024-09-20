import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  baseLabel?: string; // Texto para la página base, como "Inicio"
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ baseLabel = 'Inicio' }) => {
  const location = useLocation();

  // Generar las migas de pan dinámicamente según la ruta actual
  const breadcrumbItems: BreadcrumbItem[] = location.pathname.split('/').filter(Boolean).map((path, index, arr) => {
    const routeTo = `/${arr.slice(0, index + 1).join('/')}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);
    return { label, path: routeTo };
  });

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-md mb-4 mt-4 inline-block mx-4"> {/* Margen simétrico en ambos lados */}
      <ul className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">{baseLabel}</Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">{'>'}</span>
            {index !== breadcrumbItems.length - 1 ? (
              <Link to={item.path} className="text-blue-500 hover:text-blue-700 font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
