import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="v04MtcsOGtnkHwuPDrhObQzxXumCa1UjGVg0RsH5" serverUrl="https://72wzyse3ac0x.usemoralis.com:2053/server">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
