import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Layout from '../Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'

import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <Login />},

  {
    path: '/home',
    element: <Layout />,
    children: [
      {path: '', element: <Home />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
