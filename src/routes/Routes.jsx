import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from './Root';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        
        children:[

            // {
            //     path: "",
            //   element: <Home></Home> ,
            // },
            // {
            // path: "/category/:id",
            //   element: <CategoryNews></CategoryNews> ,
            //   loader: ()=> fetch("/news.json"),
            //   hydrateFallbackElement : <Loading></Loading>
            // }


        ]
        

        

    },
    // {
    //     path: "/auth",
    //     element: <Authen></Authen>,
    //     children:[
    //         {
    //             path: "/auth/login",
    //             element : <Login></Login>,
    //            },
    //            {
    //             path: "/auth/register",
    //             element : <Register></Register>,
    //            }
    //     ]

    // },
    // {
    //     path: "/news-details/:id",
    //     element: (
    //         <PrivateRoute>
    //             <NewsDetails></NewsDetails>,
    //         </PrivateRoute>
    //     ),
    //     loader : ()=> fetch("/news.json")

    // }
])

export default Router;