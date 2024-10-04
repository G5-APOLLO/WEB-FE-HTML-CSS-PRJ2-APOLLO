export const fetchFeaturedProducts = async () => {
    const response = await fetch('https://web-fe-prj2-api-apollo.onrender.com/plp');
    if (!response.ok) {
      throw new Error('Error fetching products');
    }
    return response.json();
  };