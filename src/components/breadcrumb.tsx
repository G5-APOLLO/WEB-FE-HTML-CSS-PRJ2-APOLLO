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
  const query = new URLSearchParams(location.search);

  // Obtener los parámetros de la URL
  const optionCategory = query.get('optionCategory');
  const optionName = query.get('optionName');

  // Construir la jerarquía de rutas dinámicamente basada en los parámetros
  const breadcrumbItems: BreadcrumbItem[] = [];

  if (optionCategory) {
    breadcrumbItems.push({ label: optionCategory, path: `/${optionCategory.toLowerCase()}` });
  }

  if (optionCategory && optionName) {
    breadcrumbItems.push({
      label: optionName,
      path: `/${optionCategory.toLowerCase()}/${optionName.toLowerCase().replace(/\s+/g, '-')}/plp`
    });
  }

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
