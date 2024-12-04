import React from 'react';
import ReactDOM from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

// Используем локальный манифест
const manifestUrl = 'http://localhost:5173/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <GlobalStyles />
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);