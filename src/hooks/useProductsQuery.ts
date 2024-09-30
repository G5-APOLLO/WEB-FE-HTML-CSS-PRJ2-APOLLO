
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchProducts } from '../services/apiService-plp';

export const useProducts = () => {
    return useQuery<any[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: 5 * 60 * 1000, 
        cacheTime: 10 * 60 * 1000,
    } as UseQueryOptions<any[], Error>);
};
