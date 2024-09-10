import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Deck from './Deck.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "/deck/:deckId",
    element: <Deck/>
  }
]);




createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
