import { useQuery } from '@tanstack/react-query';
import { ProductProps } from '../types/Product.type';
import { fetchRelatedProducts } from '../services/relatedProduct.service'; // Asegúrate de tener esta función definida correctamente

// Hook para obtener productos relacionados
export const useRelatedProducts = (optionId: number, currentProductId: number) => {
  return useQuery<ProductProps[], Error>({
    queryKey: ['relatedProducts', optionId], // queryKey como array
    queryFn: async () => {
      const products = await fetchRelatedProducts(optionId);

      // Filtrar los productos que no sean el producto actual
      const filteredProducts = products.filter(
        (product: ProductProps) => product.optionId === optionId && product.id !== currentProductId
      );

      // Barajar y devolver los productos filtrados
      const shuffleArray = (array: ProductProps[]) => array.sort(() => Math.random() - 0.5);
      return shuffleArray(filteredProducts).slice(0, 4);
    },
    staleTime: 5000, // Opcional: cuánto tiempo los datos son considerados frescos
  });
};
