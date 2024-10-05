import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbItem, BreadcrumbProps } from '../types/BreadCrumbs.type';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ baseLabel = 'Inicio' }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  // Obtener los parámetros de la URL
  const optionCategory = query.get('optionCategory');
  const optionIds = query.getAll('optionId'); // Obtener todos los valores de optionId
  const subcategoryId = query.get('subcategoryId'); // Obtener el subcategoryId
  const optionName = query.get('optionName'); // Obtener el nombre de la subcategoría o producto

  const isCartPage = location.pathname === '/cart';
  const isPdpPage = location.pathname.includes('/pdp'); // Verificar si es PDP
  const isHomeProduct = !subcategoryId && optionIds.length > 0 && optionName; // Verificar si es un producto del home

  // Construir la jerarquía de rutas dinámicamente basada en los parámetros
  const breadcrumbItems: BreadcrumbItem[] = [];

  // Agregar la categoría al breadcrumb
  if (optionCategory) {
    breadcrumbItems.push({ label: optionCategory, path: `` });
  }

  // Agregar subcategoría si existe
  if (subcategoryId && optionCategory && optionName) {
    breadcrumbItems.push({
      label: optionName,  // Mostrar el nombre de la subcategoría
      path: `/plp?optionCategory=${optionCategory}&optionId=${subcategoryId}&optionName=${optionName}`  // Ruta a la subcategoría en el PLP
    });
  }

  // Agregar lógica para PDP
  if (isPdpPage && optionIds.length > 1) {
    const productId = optionIds[1]; // Tomar el segundo optionId (nombre del producto)
    breadcrumbItems.push({
      label: optionName || productId,  // Si tiene nombre, lo mostramos, si no, el ID
      path: `/pdp?optionId=${optionIds[0]}&optionId=${productId}&subcategoryId=${subcategoryId}`  // Ruta del PDP
    });
  }

  // Manejar productos que vienen del Home (sin subcategoría)
  if (isHomeProduct) {
    breadcrumbItems.push({
      label: optionName,  // Nombre del producto
      path: `/pdp?optionId=${optionIds[0]}&optionName=${optionName}`  // Ruta del PDP
    });
  }

  // Manejar el carrito
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
