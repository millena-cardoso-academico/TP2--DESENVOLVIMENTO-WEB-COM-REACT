import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Elemento 'root' não encontrado no documento.");
}
