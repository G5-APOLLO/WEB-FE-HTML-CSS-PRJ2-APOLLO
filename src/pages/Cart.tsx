import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores/cart.store';
import { removeFromCart, decrementFromCart, clearCart, addToCart } from '../slices/cart.slice'; // Redux actions
import { formatCurrency } from '../utils/formatCurrency';
import { Link } from 'react-router-dom'; // Assuming Link for navigation

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);


  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="mb-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-right">Price</th>
                  <th className="py-2 px-4 text-right">Total</th>
                  <th className="py-2 px-4 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover mr-4"
                      />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {formatCurrency(item.discountedPrice)}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center">
                        <button
                          className="bg-gray-300 text-gray-600 px-2 py-1 rounded"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="bg-gray-300 text-gray-600 px-2 py-1 rounded"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-right">
                      {formatCurrency(item.discountedPrice)}
                    </td>
                    <td className="py-2 px-4 text-right">
                      {formatCurrency(item.discountedPrice * item.quantity)}
                    </td>
                    <td className="py-2 px-4 text-right">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center border-t py-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-bold">Total: {formatCurrency(totalPrice)}</p>
              <Link
                to="/checkout"
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded inline-block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
