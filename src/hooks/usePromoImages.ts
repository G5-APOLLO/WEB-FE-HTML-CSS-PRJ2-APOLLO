
import { useQuery } from '@tanstack/react-query';
import { fetchPromoImages } from '../services/promoImages.service';

export const usePromoImages = () => {
    return useQuery({
        queryKey: ['promoImages'],
        queryFn: fetchPromoImages,
    });
};
