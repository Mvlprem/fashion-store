import App from '../App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
