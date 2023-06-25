import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasketStore from './store/BasketStore';

export const BasketContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BasketContext.Provider value={{ basket: new BasketStore() }}>
        <App />
    </BasketContext.Provider>
);

