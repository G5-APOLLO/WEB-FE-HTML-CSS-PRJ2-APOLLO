import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/CartProduct.type';

interface CartState {
  items: Product[];
  successMessage: string | null;
}

const initialState: CartState = {
  items: [],
  successMessage: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.items.push(product);
      }
      state.successMessage = `${product.name} añadido al carrito`;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    updateShippingMethod: (state, action: PayloadAction<{ id: number; method: string }>) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.shippingMethod = action.payload.method;
      }
    },
  },
});

export const { addToCart, clearSuccessMessage, removeFromCart, updateQuantity, updateShippingMethod } = cartSlice.actions;
export default cartSlice.reducer;
