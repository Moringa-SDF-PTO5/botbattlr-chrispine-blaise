import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (rootElement) {
  // Create a root and render the app inside it
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element '#root' not found. Make sure it exists in your HTML.");
}

// Add comments to explain the purpose of the code