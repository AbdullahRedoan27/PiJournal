import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Services from '../Pages/Services/Services';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]);

const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;