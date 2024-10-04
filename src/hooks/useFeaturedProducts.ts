import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedProducts } from '../services/featuredProduct.service';


export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
  });
};
