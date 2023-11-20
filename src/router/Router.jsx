import App from '../App.jsx'
import Cart from '../pages/Cart.jsx'
import Home from '../pages/Home.jsx'
import Error from '../pages/Error.jsx'
import Product from '../pages/Product.jsx'
import ProductList from '../pages/ProductList.jsx'
import Collections from '../pages/Collections.jsx'
import ImageViewer from '../pages/ImageViewer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'collections',
        element: <Collections />,
      },
      {
        path: 'preview',
        element: <ImageViewer />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
