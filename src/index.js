import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AddProduct from './AddProduct';
import ErrorElement from './ErrorElement';

const Applayout = ()=>{
  return (
    <div className='flex flex-col h-screen'>
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<ErrorElement/>,
    children:[
      {
        path: "/",
        element: <App />
      },{
        path : "/addproduct",
        element: <AddProduct />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
