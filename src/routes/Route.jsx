import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import ErrorPage from '../components/ErrorPage';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';
import AddProduct from '../components/AddProduct';
import Login from '../components/Login';
import Register from '../components/Register';
import MyEquipmentList from '../components/MyEquipmentList';
import UpdateProduct from '../components/UpdateProduct';
import PrivateRoute from './PrivateRoute';
import AllSportseqube from '../components/AllSportseqube';
import Products from '../components/Products';
import NavBar from '../components/NavBar';
import NavSlider from '../components/NavSlider';


const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: (
                  <>
                    <NavSlider></NavSlider>
                    <Products></Products>
                  </>
                ),
                loader: () => fetch("http://localhost:5000/products")
            },



            {
                path:"contact",
                element:<ContactUs></ContactUs>
            },
            {
                path:"about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
             path:"AllSports",
             element:<AllSportseqube></AllSportseqube>,
             loader:()=>fetch("http://localhost:5000/products")
            },
            {
                path:"equipment",
                element:<MyEquipmentList></MyEquipmentList> ,
                
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
        
    },

])

export default Route;