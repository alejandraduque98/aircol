import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../Pages/Home"
import FlightReservation from "../Pages/FlightReservation"
import PersonalInformation from "../Pages/PersonalInformation"
import Dashboard from "../Pages/Dashboard"
import Profile from "../Pages/Profile"


export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutRoot/>,
        children:[
            {
                 index:true,
                element:<Login/>,
            },
            {
                path:'/SignUp',
                element:<SignUp/>
            },
            {
                path:'/',
                element:<LayoutPrivate/>,
                children:[
                    {
                        path:'/Home',
                        element:<Home/>
                    },
                    {
                        path:'/FlightReservation',
                        element:<FlightReservation/>
                    },
                    {
                        path:'/PersonalInformation',
                        element:<PersonalInformation/>
                    },
                    {
                        path:'/Dashboard',
                        element:<Dashboard/>
                    },
                    {
                        path:'/Profile',
                        element:<Profile/>
                    },
                ],
            },
        ],
    }
])