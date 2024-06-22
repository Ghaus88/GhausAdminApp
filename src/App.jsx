import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import { productInputs, userInputs } from '../formSource';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'users',
          children: [
            {
              index: true,
              element: <List />,
            },
            {
              path: ':userId',
              element: <Single />,
            },
            {
              path: 'new',
              element: <New inputs={userInputs} title="Add New User" />,
            },
          ],
        },
        {
          path: '/products',
          children: [
            {
              index: true,
              element: <List />,
            },
            {
              path: ':productId',
              element: <Single />,
            },
            {
              path: 'new',
              element: <New inputs={productInputs} title="Add New Product" />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
