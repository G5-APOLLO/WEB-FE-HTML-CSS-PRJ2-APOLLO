import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/ErrorComponent';
import { Main } from '../layout/Main';
import TechnicalSpecifications from '../components/TechnicalSpecifications';
import { ProductProps } from '../types/Product.type'; 
import RelatedProducts from '../components/RelatedProducts';
import { formatCurrency } from '../utils/formatCurrency';


const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState<ProductProps | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Función para obtener el ID del producto de la URL
  const getProductIdFromQuery = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const optionId = queryParams.get('optionId');
    return optionId ? parseInt(optionId) : null;
  };

  // Función para obtener los detalles del producto
  const fetchProductDetail = async () => {
    const productId = getProductIdFromQuery();
    if (productId === null) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`https://web-fe-prj2-api-apollo.onrender.com/plp/${productId}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const productDetail: ProductProps = await response.json(); 
      setProduct(productDetail);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar los detalles del producto:', error);
      setError(true);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorComponent message="Error al cargar los detalles del producto." />;
  }

  if (product) {
    return (
      <Main>
        {/* Contenedor del nombre del producto */}
        <div className="  text-center lg:text-center">
          <h1 className="text-3xl font-bold ">{product.name}</h1> 
        </div>
        
        {/* Contenedor de la imagen y la descripción */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center ">
          <div className="w-full md:w-[35%] mb-5 md:mb-0 md:mr-6 transform transition-transform duration-300 ease-in-out group-hover:scale-110" >
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
        <div className=" w-auto  mx-auto flex flex-col lg:flex-row items-center justify-center p-2">
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
  }

  return <div>No se encontró el producto.</div>;
};

export default ProductDetailPage;
