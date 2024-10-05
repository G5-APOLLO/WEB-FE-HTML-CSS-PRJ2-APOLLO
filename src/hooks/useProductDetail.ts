import { useQuery } from '@tanstack/react-query';
import { fetchProductDetail } from '../services/productDetail.service'

export const useProductDetail = (productId: number | null) => {
  return useQuery({
    queryKey: ['productDetail', productId],
    queryFn: () => fetchProductDetail(productId),
    enabled: !!productId,  // Solo realiza el fetch si hay productId
  });
};
