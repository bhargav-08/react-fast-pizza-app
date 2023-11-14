import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import Cart from './features/cart/Cart'
import Error from './ui/Error'
import { action as updateOrderAction } from './features/order/UpdateOrder'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // Children are replaced with Outlet of AppLayout
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],

    // ErrorElement is bubbled to top till it hit errorElement
    errorElement: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
