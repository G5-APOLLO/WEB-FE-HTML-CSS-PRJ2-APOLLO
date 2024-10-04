import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/cart.store';
import { clearSuccessMessage } from '../slices/cart.slice';

const SuccessMessage: React.FC = () => {
  const successMessage = useSelector((state: RootState) => state.cart.successMessage);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          dispatch(clearSuccessMessage());
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, dispatch]);

  if (!successMessage) return null;

  return (
    <div
      className={`fixed top-16 right-4 px-4 py-2 rounded shadow-md z-50 text-white bg-green-500 transform transition-transform duration-500 ease-in-out ${
        isVisible ? 'animate-slide-in' : 'animate-slide-out'
      }`}
    >
      {successMessage}
    </div>
  );
};

export default SuccessMessage;
