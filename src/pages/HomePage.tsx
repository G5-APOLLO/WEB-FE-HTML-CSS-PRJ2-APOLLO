import React from 'react';
import FeaturedProductsList from '../components/FeaturedProductList';

const HomePage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4"> {/* Aquí va el header */}</header>
      <main className="container mx-auto p-4">
        <section className="promo-section">
          {/* Aquí va la sección de imágenes promocionales */}
        </section>
        <section className="featured-products mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
          <FeaturedProductsList />
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center"> {/* Aquí va el footer */}</footer>
    </div>
  );
};

export default HomePage;
