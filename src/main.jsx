import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router/Router';

import {HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)