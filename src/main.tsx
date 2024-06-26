import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App.tsx';
import './tailwind.css';
import ThemeProvider from './components/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
