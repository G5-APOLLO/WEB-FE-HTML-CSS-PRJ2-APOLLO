export const fetchRelatedProducts = async (optionId: number) => {
    const response = await fetch(`https://web-fe-prj2-api-apollo.onrender.com/plp?optionId=${optionId}`);
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    const products = await response.json();
    return products;
  };
  