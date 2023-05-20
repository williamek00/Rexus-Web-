import { createBrowserRouter ,  RouterProvider , Route , Link } from 'react-router-dom'
import Home from '../views/Home'
import HeadsetPage from '../views/Headset'
import KeyboardPage from '../views/Keyboard'
import WebcamPage from '../views/Webcam'
import HeadsetDetail from '../views/HeadsetDetail'
import KeyboardDetail from '../views/KeyboardDetail'
import WebcamDetail from '../views/WebcamDetail'
import Layout from '../components/Layout'

const router = createBrowserRouter([

    {
      path:"",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/headset",
          element:<HeadsetPage/>
        },
        {
          path:"/keyboard",
          element:<KeyboardPage/>
        },
        {
          path:"/webcam",
          element:<WebcamPage/>
        },
        {
          path:"/headset/:id",
          element:<HeadsetDetail/>
        },
        {
          path:"/keyboard/:id",
          element:<KeyboardDetail/>
        },
        {
          path:"/webcam/:id",
          element:<WebcamDetail/>
        },
      ]
    },


]);

  export default router