import React from 'react';
import { Product } from '../types/CartProduct.type';

interface CartSummaryProps {
  cartItems: Product[];
}

const shippingRates: { [key: string]: number } = {
  estándar: 5000,
  express: 10000,
  overnight: 15000,
};

const calculateSubtotal = (cartItems: Product[]): number => {
  return cartItems.reduce((acc, item) => {
    const quantity = item.quantity || 1; 
    const normalPrice = item.normalPrice || item.discountedPrice;
    return acc + normalPrice * quantity;
  }, 0);
};

const calculateDiscounts = (cartItems: Product[]) => {
  const discountsArray = cartItems
    .filter(item => item.normalPrice > item.discountedPrice) // Filtrar productos con descuento
    .map(item => {
      const discount = (item.normalPrice - item.discountedPrice) * (item.quantity || 1);
      return { name: item.name, discount };
    });

  const totalDiscounts = discountsArray.reduce((acc, item) => acc + item.discount, 0);

  return { discountsArray, totalDiscounts };
};

const calculateShippingCost = (cartItems: Product[]): number => {
  return cartItems.reduce((acc, item) => {
    const method = item.shippingMethod ? item.shippingMethod.toLowerCase() : 'estándar';
    const shippingCostForItem = shippingRates[method] || 0;
    const quantity = item.quantity || 1;
    return acc + shippingCostForItem * quantity;
  }, 0);
};

const calculateTax = (beforeTax: number, taxRate: number): number => {
  return beforeTax * taxRate;
};

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const subtotal = calculateSubtotal(cartItems);
  const { discountsArray, totalDiscounts } = calculateDiscounts(cartItems);
  const shippingCost = calculateShippingCost(cartItems);
  const taxRate = 0.19; // 19% de IVA
  const tax = calculateTax(subtotal - totalDiscounts, taxRate);
  const total = subtotal + tax + shippingCost - totalDiscounts;

  return (
    <aside className="order-summary bg-white p-5 border">
      <h3 className="text-xl mb-4 text-blue-900">Resumen de Compra</h3>

      <div className="mb-3">
        <span>Subtotal:</span>
        <span> ${subtotal.toLocaleString()}</span>
      </div>

      {discountsArray.length > 0 && (
        <div className="mb-3">
          <span>Descuentos:</span>
          <ul>
            {discountsArray.map((item, index) => (
              <li key={index}>
                {item.name}: -${item.discount.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-3">
        <span>Total Descuentos:</span>
        <span> ${totalDiscounts.toLocaleString()}</span>
      </div>

      <div className="mb-3">
        <span>Costo envió:</span>
        <span> ${shippingCost.toLocaleString()}</span>
      </div>

      <div className="mb-3">
        <span>IVA ({(taxRate * 100).toFixed(0)}%):</span>
        <span> ${tax.toLocaleString()}</span>
      </div>

      <div className="flex justify-between mt-5 font-bold text-lg border-t pt-3">
        <span>Total:</span>
        <span> ${total.toLocaleString()}</span>
      </div>

      <button className="bg-gray-800 text-white w-full mt-5 py-3 rounded hover:bg-gray-300 hover:text-black">
        Iniciar Pago
      </button>
    </aside>
  );
};

export default CartSummary;
