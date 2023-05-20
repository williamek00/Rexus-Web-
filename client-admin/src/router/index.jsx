import { createBrowserRouter ,redirect} from 'react-router-dom'
import Login from '../views/Login'
import Register from '../views/Register'
import TableHeadset from '../views/TableHeadset'
import TableKeyboard from '../views/TableKeyboard'
import TableWebcam from '../views/TableWebcam'
import TableCategory from '../views/TableCategory'
import ProductForm from '../views/ProductForm'
import CategoryForm from '../views/CategoryForm'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/headset",
        element: <TableHeadset />,
      },
      {
        path: "/keyboard",
        element: <TableKeyboard />,
      },
      {
        path: "/webcam",
        element: <TableWebcam />,
      },
      {
        path: "/category",
        element: <TableCategory />,
      },
      {
        path: "/add-admin",
        element: <Register />,
      },
      {
        path: "/add-product",
        element: <ProductForm />,
      },
      {
        path: "/edit-product/:id",
        element: <ProductForm />,
      },
      {
        path: "/categoryform",
        element: <CategoryForm />,
      },
      {
        path: "/categoryform/:id",
        element: <CategoryForm />,
      },
    ],
  },
]);

export default router;

