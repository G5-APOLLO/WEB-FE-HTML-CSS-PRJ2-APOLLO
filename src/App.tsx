import React from 'react';
import './styles/App.css'; // Puedes usar Tailwind si decides integrarlo

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Header (Placeholder)</h1>
      </header>

      {/* Subheader */}
      <section className="subheader">
        <h2>Subheader (Placeholder)</h2>
      </section>

      {/* Content */}
      <main className="content">
        <p>Content (Placeholder)</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Footer (Placeholder)</p>
      </footer>
    </div>
  );
};

export default App;
