import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Plugins
  plugins: [
    // Use the React plugin
    react(),
    // Add other plugins if needed
  ],

  // Environment-specific configurations
  // Development server configurations
  server: {
    port: 3000, // Specify a custom port if needed
    open: true, // Automatically open the browser when the development server starts
  },

  // Build configurations
  build: {
    // Specify build options if needed
  },

  // Other configurations
  // Add other configurations as needed
});
