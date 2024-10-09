import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './typography.css'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import {router} from './router/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
