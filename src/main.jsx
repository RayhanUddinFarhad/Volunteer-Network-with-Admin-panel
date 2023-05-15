import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';
import AdminPage from './components/Pages/Admin/AdminPage.jsx';
import List from './components/Pages/Admin/List.jsx';
import AdminForm from './components/Pages/Admin/AdminForm.jsx';
import Register from './components/Pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [
      {
        path : "/",
        element : <Home></Home>
      },

     
    ]
  },

  {
    path : "/admin",
    element : <AdminPage></AdminPage>,

    children : [

      {
        path : "list",
        element : <List></List>
        
      },

      {

        path : "form",
        element : <AdminForm></AdminForm>
      }
    ]
  },


  {

    path : "/register",
    element  : <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
