import React from 'react';
import './styles/index.css';
import { Home } from "./pages/Home";
import PLP from "./pages/Plp"
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="app">
        <Routes>
            <Route path="/" 
            element= {<Home/>} />
            <Route path="/plp" 
            element= {<PLP/>} />
        </Routes>
        </div>
    );
};

export default App;