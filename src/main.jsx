import React from 'react';
import ReactDOM from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

// Используем локальный манифест
const manifestUrl = 'http://localhost:5173/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <GlobalStyles />
        <App />
      </TonConnectUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
