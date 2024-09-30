export const fetchProducts = async () => {
    const response = await fetch('https://web-fe-prj2-api-apollo.onrender.com/plp');
    if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
    }
    return response.json();
};
