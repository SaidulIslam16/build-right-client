import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../DashBoard/DashBoard/DashBoard";
import MyCart from "../DashBoard/MyCart/MyCart";
import UserHome from "../DashBoard/UserHome/UserHome";
import Payment from "../DashBoard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: 'dashboard',
                element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
                children: [
                    {
                        path: '',
                        element: <UserHome></UserHome>
                    },
                    {
                        path: 'cart',
                        element: <MyCart></MyCart>
                    },
                    {
                        path: 'payment',
                        element: <Payment></Payment>
                    }
                ]
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])