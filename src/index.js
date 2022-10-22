// import React from 'react';
// // import ReactDOM from 'react-dom';
// // new reactDOM
// import ReactDOM from "react-dom/client"; 
// import App from './App';

// // const root = ReactDOM.createRoot(document.getElementById("root"))
// // root.render(<App />);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
