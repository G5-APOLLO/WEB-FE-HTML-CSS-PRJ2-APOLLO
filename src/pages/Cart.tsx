import React, { useState, useEffect } from 'react';
import CartItemList from '../components/CartItemList';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/ErrorComponent';
import { Product } from '../types/CartProduct.type';
import CartSummary from '../components/CartSummary';
import { Main } from '../layout/Main';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://web-fe-prj2-api-apollo.onrender.com/plp');
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();

      const filteredItems = data.filter((item: Product) => {
        return [54, 15].includes(item.id);
      });

      setCartItems(filteredItems);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar los productos del carrito:', error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const updateShippingMethod = (id: number, method: string) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, shippingMethod: method } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Main>
       <div className="p-6 max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <div className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>

          {loading && <Spinner />}

          {error && <ErrorComponent message="Hubo un error al cargar los productos del carrito." />}

          {!loading && !error && (
            <CartItemList
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              updateShippingMethod={updateShippingMethod}
              removeItem={removeItem}
            />
          )}
        </div>

          {/* Order Summary  */}
            <div className="max-w-screen-lg mx-auto md:w-1/3 md:ml-4 mt-[72px]">
          {!loading && !error  && <CartSummary cartItems={cartItems} />}
        </div>
      </div>
    </Main>
  );
};

export default CartPage;
