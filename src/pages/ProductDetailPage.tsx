import React from 'react';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/ErrorComponent';
import { Main } from '../layout/Main';
import TechnicalSpecifications from '../components/TechnicalSpecifications';
import { useProductDetail } from '../hooks/useProductDetail';

import RelatedProducts from '../components/RelatedProducts';
import { formatCurrency } from '../utils/formatCurrency';

const ProductDetailPage: React.FC = () => {
  // Obtener el ID del producto desde la query
  const getProductIdFromQuery = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const optionId = queryParams.get('optionId');
    return optionId ? parseInt(optionId) : null;
  };

  const productId = getProductIdFromQuery();
  
  // Utilizar el hook para cargar los detalles del producto
  const { data: product, error, isLoading } = useProductDetail(productId);

  if (isLoading) {

    return ( 
      <Main>
       <Spinner />;
      </Main>
    )
  }


  if (!isLoading && error) {
    return ( 
      <Main>
       <ErrorComponent message="Error al cargar los detalles del producto." />;
      </Main>
    )
  }

  if ( !isLoading && !product ) {
    return (
      <Main>
        <ErrorComponent message="Error al cargar los detalles del producto." />;
      </Main>
    )
  }
 

  if (!isLoading && !error && product) {return (
    <Main>
      {/* Contenedor del nombre del producto */}
      <div className="text-center lg:text-center">
        <h1 className="text-3xl font-bold ">{product.name}</h1>
      </div>
      
      {/* Contenedor de la imagen y la descripción */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
        <div className="w-full md:w-[25%] mb-5 md:mb-0 md:mr-6 ">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="bg-gray-100 p-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg mb-2">{product.description}</p>

          <p className="text-2xl font-semibold mb-2">
            Precio Normal: <span className="line-through">{formatCurrency(product.normalPrice)}</span>
          </p>
          <p className="text-2xl font-semibold mb-2 text-red-600">
            Precio con Descuento: {formatCurrency(product.discountedPrice)}
          </p>
          <button className="mt-2 bg-zinc-600 text-white px-3 py-1 rounded hover:bg-neutral-700">
            Agregar a Carrito
          </button>
        </div>
      </div>
      
      {/* Especificaciones técnicas */}
      <div className="w-auto mx-auto flex flex-col lg:flex-row items-center justify-center p-2">
        <div className="w-full">
          <TechnicalSpecifications specifications={product.specifications} />
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="related-products-section">
        <RelatedProducts optionId={product.optionId} currentProductId={product.id} />
      </div>
    </Main>
  );
};
};
export default ProductDetailPage;
