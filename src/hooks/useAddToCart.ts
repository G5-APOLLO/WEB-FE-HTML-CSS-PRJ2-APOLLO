import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cart.slice';
import { Product } from '../types/CartProduct.type';

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      ...product,
      quantity: 1,
      shippingMethod: 'standard',
    }));
  };

  return { handleAddToCart };
};
