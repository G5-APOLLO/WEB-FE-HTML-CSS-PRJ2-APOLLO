import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  updateQuantity: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  maxQuantity,
  updateQuantity,
}) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      updateQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrement}
          className="bg-gray-800 text-white rounded-full w-8 h-8 flex justify-center items-center"
          disabled={quantity === 1}
        >
          <span className="text-lg">−</span>
        </button>

        <span className="text-lg font-medium">{quantity}</span>

        <button
          onClick={handleIncrement}
          className="bg-gray-800 text-white rounded-full w-8 h-8 flex justify-center items-center"
          disabled={quantity === maxQuantity}
        >
          <span className="text-lg">+</span>
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">Máx {maxQuantity} unidades</p>
    </div>
  );
};

export default QuantitySelector;
