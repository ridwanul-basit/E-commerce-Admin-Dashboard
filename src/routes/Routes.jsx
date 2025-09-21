import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from './Root';
import DashboardDefault from '../components/DashboardDefault';
import ShoppingCart from '../components/ShoppingCart';
import Analytics from '../components/Analytics';
import AnalyticsCRM from '../components/AnalyticsCRM';
import ChatBox from '../components/ChatBox';
import ComposeBox from '../components/ComposeBox';
import SimpleCalendar from '../components/SimpleCalendar';
import ChattingBox from '../components/ChattingBox';
import AddProduct from '@/components/AddProduct';
import ProductList from '@/components/ProductList';
import OrdersTable from '@/components/OrdersTable';
import BillingForm from '../components/BillingForm';
import Invoice from '@/components/Invoice';
import Feed from '@/components/Feed';
import Followers from '@/components/Followers';
import Pricing from '@/components/Pricing';
import Event from '@/components/Event';
import LotterySpin from '@/components/LotterySpin';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        
        children:[

            {
                path: "/dashboardDefault",
              element: <DashboardDefault></DashboardDefault>
            },
            {
                path: "/shoppingCart",
              element: <ShoppingCart></ShoppingCart>
            },
            {
                path: "/analytics",
              element: <Analytics></Analytics>
            },
            {
                path: "/analyticsCRM",
              element: <AnalyticsCRM></AnalyticsCRM>
            },
            {
                path: "/chatbox",
              element: <ChatBox></ChatBox>
            },
            {
                path: "/compose",
              element:   <ComposeBox></ComposeBox> ,
            },
            {
                path: "/calendar",
              element:<SimpleCalendar></SimpleCalendar> ,
            },
            {
                path: "/chatting",
              element:<ChattingBox></ChattingBox> ,
            },
            {
                path: "/addproduct",
              element:<AddProduct></AddProduct> ,
            },
            {
                path: "/productlist",
              element:<ProductList></ProductList> ,
            },
            {
                path: "/orderlist",
              element: <OrdersTable></OrdersTable>,
            },
            {
                path: "/billing",
              element:  <BillingForm></BillingForm> ,
            },
            {
                path: "/invoice",
              element:  <Invoice></Invoice> ,
            },
            {
                path: "/feed",
              element:  <Feed></Feed>,
            },
            {
                path: "/followers",
              element:  <Followers></Followers>,
            },
            {
                path: "/pricing",
              element: <Pricing></Pricing> ,
            },
            {
                path: "/event",
              element: <Event></Event> ,
            },
            {
                path: "/lottery",
              element: <LotterySpin></LotterySpin> ,
            }
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