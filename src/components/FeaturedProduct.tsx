import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbItem, BreadcrumbProps } from '../types/BreadCrumbs.type';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ baseLabel = 'Inicio' }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Obtener los parámetros de la URL
  const optionCategory = query.get('optionCategory');
  const optionName = query.get('optionName');
  const optionIds = query.getAll('optionId'); // Obtener todos los valores de optionId
  const singleOptionId = query.get('optionId'); // Usar para el PDP con optionId único
  const subcategoryId = query.get('subcategoryId'); // Obtener el subcategoryId

  const isCartPage = location.pathname === '/cart';
  const isPdpPage = location.pathname.includes('/pdp'); // Verificar si es PDP

  // Construir la jerarquía de rutas dinámicamente basada en los parámetros
  const breadcrumbItems: BreadcrumbItem[] = [];

  if (optionCategory) {
    breadcrumbItems.push({ label: optionCategory, path: `` });
  }

  if (subcategoryId && optionCategory) {
    // Mostrar subcategoría y enlazar al PLP correspondiente
    breadcrumbItems.push({
      label: `Subcategoría ${subcategoryId}`, // Puedes ajustar cómo se muestra el nombre
      path: `/plp?subcategoryId=${subcategoryId}&category=${optionCategory}` // Enlace al PLP de la subcategoría
    });
  }

  if (optionCategory && optionName) {
    breadcrumbItems.push({
      label: optionName,
      path: `/${optionCategory.toLowerCase()}/${optionName.toLowerCase().replace(/\s+/g, '-')}/plp`
    });
  }

  // Agregar lógica para PDP con el formato de PLP
  if (isPdpPage && optionIds.length > 1) {
    const productId = optionIds[1]; // Tomar el segundo optionId
    breadcrumbItems.push({
      label: productId,
      path: `/pdp?optionId=${optionIds[0]}&optionId=${productId}` // Ruta del PDP con los dos optionId
    });
  }

  // Agregar lógica para PDP con el formato de Featured Products
  if (isPdpPage && singleOptionId && optionName) {
    breadcrumbItems.push({
      label: optionName,
      path: `/pdp?optionId=${singleOptionId}&optionName=${optionName}&subcategoryId=${subcategoryId}` // Ruta del PDP con optionId y optionName
    });
  }

  if (isCartPage) {
    breadcrumbItems.push({ label: 'Carrito de Compras', path: `/cart` });
  }

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-md mb-4 mt-4 inline-block mx-4"> {/* Margen simétrico en ambos lados */}
      <ul className="flex flex-wrap items-center space-y-1 md:space-y-0 md:space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">{baseLabel}</Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">{'>'}</span>
            {index !== breadcrumbItems.length - 1 ? (
              <Link to={item.path} className="text-blue-500 hover:text-blue-700">
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
