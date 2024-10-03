import React from 'react';
import { Product } from '../types/CartProduct.type';

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
          <img src={item.image} alt={item.name} className="w-4/5 h-4/5 lg:w-24 lg:h-24 object-cover mb-4 lg:mb-0" />
          <div className="flex-1 ml-0 lg:ml-5">
            <p className="text-lg font-semibold">{item.name}</p>
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
            <select
              name={`quantity${item.id}`}
              value={item.quantity || 1} // Valor por defecto si no tiene cantidad
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="mt-2 p-1 border border-gray-300 rounded-md"
            >
              {[1, 2, 3].map(qty => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>
          </div>
          <div className="text-lg font-bold text-gray-700 mt-4 lg:mt-0">{item.discountedPrice || item.normalPrice}</div>
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
