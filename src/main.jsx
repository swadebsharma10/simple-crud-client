import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Users from './Pages/Users';
import Update from './Pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/users',
        element:<Users/>,
        loader: ()=> fetch(`http://localhost:5000/users`)
      },
      {
        path: '/update/:id',
        element: <Update/>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/reg',
        element:<Register/> 
      },
      {
        path: '/contact',
        element:<Contact/> 
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
