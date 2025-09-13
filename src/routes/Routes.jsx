import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from './Root';
import DashboardDefault from '../components/DashboardDefault';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        
        children:[

            {
                path: "/dashboardDefault",
              element: <DashboardDefault></DashboardDefault>
            },
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