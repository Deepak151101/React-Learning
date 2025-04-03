import React from 'react';      // This is the core foundational react library that is used to take all the references and all.  
import ReactDOM from 'react-dom/client';
// These 2 libraries are used to manipulate with web DOM

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));    // We are searching for #root element from index.html file. and storing in root variable.
root.render(          // It is resposible for rendering on browser
  <React.StrictMode>  { /* JS mode whether to use strict mode or not */ }
    <App />           { /* This is jsx, in this we can render HTML elements using jsx */ }
  </React.StrictMode>
);