import { useQuery } from '@tanstack/react-query';

const fetchFeaturedProducts = async () => {
  const response = await fetch('https://web-fe-prj2-api-apollo.onrender.com/featuredProducts');
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return response.json();
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
  });
};
