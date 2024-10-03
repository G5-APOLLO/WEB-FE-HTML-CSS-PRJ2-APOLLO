import React from 'react';
import { Product } from '../types/CartProduct.type';

interface CartSummaryProps {
  cartItems: Product[];
}

// Fixed shipping rates based on the shipping method
const shippingRates: { [key: string]: number } = {
  estándar: 5000, // Default shipping rate for "Estándar"
  express: 10000,
  overnight: 15000,
};

// Helper function to parse price strings into numbers
const parsePrice = (price: string): number => {
  return parseInt(price.replace(/[.$]/g, ''), 10);
};

// Function to calculate the subtotal
const calculateSubtotal = (cartItems: Product[]): number => {
  return cartItems.reduce((acc, item) => {
    const quantity = item.quantity || 1; 
    const normalPrice = item.normalPrice || item.discountedPrice;
    return acc + parsePrice(normalPrice) * quantity;
  }, 0);
};

// Function to calculate total discounts for items with discounts
const calculateDiscounts = (cartItems: Product[]) => {
  const discountsArray = cartItems
    .filter(item => parsePrice(item.normalPrice || item.discountedPrice) > parsePrice(item.discountedPrice))
    .map(item => {
      const normalPrice = item.normalPrice || item.discountedPrice;
      const discount = (parsePrice(normalPrice) - parsePrice(item.discountedPrice)) * (item.quantity || 1);
      return { name: item.name, discount };
    });
  const totalDiscounts = discountsArray.reduce((acc, item) => acc + item.discount, 0);
  
  return { discountsArray, totalDiscounts };
};

// Function to calculate shipping cost based on the method
const calculateShippingCost = (cartItems: Product[]): number => {
  return cartItems.reduce((acc, item) => {
    const method = item.shippingMethod ? item.shippingMethod.toLowerCase() : 'estándar';
    const shippingCostForItem = shippingRates[method] || 0;
    const quantity = item.quantity || 1;
    return acc + shippingCostForItem * quantity; // Sum the shipping costs for each item
  }, 0);
};

// Function to calculate tax
const calculateTax = (beforeTax: number, taxRate: number): number => {
  return beforeTax * taxRate;
};

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const subtotal = calculateSubtotal(cartItems);
  const { discountsArray, totalDiscounts } = calculateDiscounts(cartItems);
  const shippingCost = calculateShippingCost(cartItems);
  const taxRate = 0.19;
  const tax = calculateTax(subtotal-totalDiscounts, taxRate);
  const total = subtotal + tax + shippingCost - totalDiscounts;

  return (
    <aside className="order-summary bg-white p-5 border">
      <h3 className="text-xl mb-4 text-blue-900">Order Summary</h3>
      
      <div className="summary-item mb-3">
        <span>Subtotal:</span>
        <span> ${subtotal.toLocaleString()}</span>
      </div>

      {/* Display individual item discounts */}
      {discountsArray.length > 0 && (
        <div className="summary-item mb-3">
          <span>Discounts:</span>
          <ul>
            {discountsArray.map((item, index) => (
              <li key={index}>
                {item.name}: -${item.discount.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="summary-item mb-3">
        <span>Total Discounts:</span>
        <span> ${totalDiscounts.toLocaleString()}</span>
      </div>

      <div className="summary-item mb-3">
        <span>Shipping Cost:</span>
        <span> ${shippingCost.toLocaleString()}</span>
      </div>

      <div className="summary-item mb-3">
        <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
        <span> ${tax.toLocaleString()}</span>
      </div>

      <div className="summary-total flex justify-between mt-5 font-bold text-lg border-t pt-3">
        <span>Total:</span>
        <span> ${total.toLocaleString()}</span>
      </div>

      <button className="checkout-btn bg-gray-800 text-white w-full mt-5 py-3 rounded hover:bg-gray-300 hover:text-black">
        Iniciar Pago
      </button>
    </aside>
  );
};

export default CartSummary;