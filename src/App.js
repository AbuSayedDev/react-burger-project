import React from 'react';
import reactDom from 'react-dom';
import './App.css';
import Main from './components/Main.js';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
