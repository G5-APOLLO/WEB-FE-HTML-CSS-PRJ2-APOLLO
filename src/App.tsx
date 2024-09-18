import React from 'react';
import './styles/index.css'; // Puedes usar Tailwind si decides integrarlo
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="bg-blue-200 p-6 border-2 border-gray-700">
        <h1>Header (Placeholder)</h1>
      </header>

      <section className="bg-green-200 p-6 border-2 border-gray-700">
        <h2>Subheader (Placeholder)</h2>
      </section>

      <main className="bg-red-200 p-6 border-2 border-gray-700">
        <p>Content (Placeholder)</p>
        <HomePage />
      </main>
     

      <footer className="bg-gray-300 p-6 border-2 border-gray-700">
        <p>Footer (Placeholder)</p>
      </footer>
    </div>
  );
};

export default App;