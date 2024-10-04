import { useQuery } from "@tanstack/react-query";
import { fetchBanner } from "../services/banner.service";

export const usePromoImages = () => {
    return useQuery({
        queryKey: ['promoImages'],
        queryFn: fetchBanner,
    });
};
