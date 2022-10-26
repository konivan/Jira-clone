import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RootStore from './store';

const store = RootStore.create({});

const StoreContent = createContext(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContent.Provider value={store}>
      <App />
    </StoreContent.Provider>
  </React.StrictMode>
);