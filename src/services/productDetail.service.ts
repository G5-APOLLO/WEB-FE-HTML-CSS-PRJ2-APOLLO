export const fetchProductDetail = async (productId: number | null) => {
    if (!productId) throw new Error('Invalid Product ID');
    
    const response = await fetch(`https://web-fe-prj2-api-apollo.onrender.com/plp/${productId}`);
    if (!response.ok) {
      throw new Error('Error fetching product details');
    }
    return response.json();
  };
  