
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Datatable from './pages/Datatable';
import Error from './pages/Error';
import Help from './pages/Help';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Mainpage from './pages/Mainpage';
import SignUp from './pages/SignUp';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      
      {
        path: "/",
        element: <Homepage/>
      },

      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Help />
      },
      {
        path: "*",
        element: <Error/>
      },
      {
        path: "datatable",
        element: <Datatable />
      },


    ]

  },


])

const App = () => {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
