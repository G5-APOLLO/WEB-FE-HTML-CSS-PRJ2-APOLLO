import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link de React Router
import { Product } from '../types/CartProduct.type';
import QuantitySelector from '../components/QuantitySelector';
import { formatCurrency } from '../utils/formatCurrency'; // Asegúrate de que esté bien importada

interface CartItemListProps {
  cartItems: Product[];
  updateQuantity: (id: number, newQuantity: number) => void;
  updateShippingMethod: (id: number, method: string) => void;
  removeItem: (id: number) => void;
}

const CartItemList: React.FC<CartItemListProps> = ({
  cartItems,
  updateQuantity,
  updateShippingMethod,
  removeItem
}) => {
  return (
    <section className="flex-1">
      {cartItems.map(item => (
        <div className="bg-white p-5 mb-4 border border-gray-200 rounded-md flex flex-col lg:flex-row justify-between items-start lg:items-center" key={item.id}>
          {/* Imagen con enlace al PDP */}
          <Link to={`/pdp?optionId=${item.id}&optionName=${item.name}`} className="w-4/5 h-4/5 lg:w-24 lg:h-24 object-cover mb-4 lg:mb-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </Link>

          <div className="flex-1 ml-0 lg:ml-5">
            {/* Nombre con enlace al PDP */}
            <Link to={`/pdp?optionId=${item.id}&optionName=${item.name}`}>
              <p className="text-lg font-semibold hover:underline">{item.name}</p>
            </Link>

            <p>Selecciona un método de envío:</p>
            <div className="flex space-x-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`shipping${item.id}`}
                  value="standard"
                  checked={item.shippingMethod === 'standard'}
                  onChange={() => updateShippingMethod(item.id, 'standard')}
                  className="mr-1"
                /> Estándar
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`shipping${item.id}`}
                  value="express"
                  checked={item.shippingMethod === 'express'}
                  onChange={() => updateShippingMethod(item.id, 'express')}
                  className="mr-1"
                /> Express
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`shipping${item.id}`}
                  value="overnight"
                  checked={item.shippingMethod === 'overnight'}
                  onChange={() => updateShippingMethod(item.id, 'overnight')}
                  className="mr-1"
                /> Overnight
              </label>
            </div>
            <p>Cantidad:</p>
            <QuantitySelector
              quantity={item.quantity || 1}
              maxQuantity={20}
              updateQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
            />
          </div>

          <div className="text-lg font-bold text-gray-700 mt-4 lg:mt-0">
            {formatCurrency(item.discountedPrice || item.normalPrice)} 
          </div>

          <div className="ml-0 lg:ml-5 mt-4 lg:mt-0">
            <button
              onClick={() => removeItem(item.id)}
              className="text-blue-500 hover:text-blue-700 p-2"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CartItemList;
