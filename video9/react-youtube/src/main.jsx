import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import React from 'react';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("The root container element ('root') was not found in the DOM.");
}