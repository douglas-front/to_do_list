import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home/index.tsx'
const router = createBrowserRouter([
  {
    path: "/to_do_list",
    element: <Home/>
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
