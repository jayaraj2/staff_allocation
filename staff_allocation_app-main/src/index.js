import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ProSidebarProvider } from "react-pro-sidebar"; // Uncomment this line if you intend to use ProSidebarProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProSidebarProvider> {/* Uncomment this line if you intend to use ProSidebarProvider */}
          <App />
      </ProSidebarProvider>
    </Provider>
  </React.StrictMode>
);

 



    

    

