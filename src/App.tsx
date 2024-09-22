import React from 'react';
import './styles/index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes"; 

const App: React.FC = () => {
    return (
      <div className="app">
        <RouterProvider router={router} />
      </div>
    );
  };

export default App;