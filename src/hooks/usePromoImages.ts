
import { useQuery } from '@tanstack/react-query';

const fetchPromoImages = async () => {
    const response = await fetch('https://web-fe-prj2-api-apollo.onrender.com/promoImages');
    if (!response.ok) {
        throw new Error('Error fetching promotional images');
    }
    return response.json();
};

export const usePromoImages = () => {
    return useQuery({
        queryKey: ['promoImages'],
        queryFn: fetchPromoImages,
    });
};
