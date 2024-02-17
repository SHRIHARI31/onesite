import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Router/Router.jsx' //imported from router component and used in router provider
import { ToggleProvider } from './components/navbar/navcontext/navContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ToggleProvider>
        <RouterProvider router={router} />
      </ToggleProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
