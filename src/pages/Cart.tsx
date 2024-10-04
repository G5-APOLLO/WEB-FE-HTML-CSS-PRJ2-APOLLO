import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItemList from '../components/CartItemList';
import CartSummary from '../components/CartSummary';
import { RootState, AppDispatch } from '../store/cart.store';
import { removeFromCart, updateQuantity, updateShippingMethod } from '../slices/cart.slice';
import { Main } from "../layout/Main";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Main>
      <div className="p-6 max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
          <CartItemList
            cartItems={cartItems}
            updateQuantity={(id, newQuantity) => dispatch(updateQuantity({ id, quantity: newQuantity }))}
            updateShippingMethod={(id, method) => dispatch(updateShippingMethod({ id, method }))}
            removeItem={(id) => dispatch(removeFromCart(id))}
          />
        </div>

        <div className="md:w-1/3 md:ml-4">
          <CartSummary cartItems={cartItems} />
        </div>
      </div>
    </Main>
  );
};

export default CartPage;
