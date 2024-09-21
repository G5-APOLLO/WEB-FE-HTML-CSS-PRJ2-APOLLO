import React from 'react';
import './styles/index.css';
import { Home } from "./pages/Home";
import PLP from "./pages/Plp"
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

const App: React.FC = () => {
  return (
    <div className="app">
        <Routes>
            <Route path="/" 
            element= {<Home/>} />
            <Route path="/plp" 
            element= {<PLP/>} />
            <Route path="/pdp"
            element= {<ComingSoon/>}/>
            <Route path="/cart"
            element= {<ComingSoon/>}/>


        </Routes>
        </div>
    );
};

export default App;