import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EditReview from "../Pages/EditReview/EditReview";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Pages/PageNotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://pi-journal-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pi-journal-server.vercel.app/myReviews/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
