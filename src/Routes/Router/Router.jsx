import {
    createBrowserRouter

} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Root from "../../LayOut/MainLayOut/Root";
import Error from "../../Components/Error";
import Register from "../../Pages/Users/Register";
import Login from "../../Pages/Users/Login";
import Contact from "../../Pages/Home/Contact";
import Properties from "../../Pages/Properties/Properties";
import PropertyDetails from "../../Pages/Properties/PropertyDetails/PropertyDetails";
import DashboardLayout from "../../LayOut/DashboardLayout";
import PrivateRoutes from "../PrivateRoutes";
import UserProfile from "../../Pages/Dashboard/user/UserProfile";
import Wishlist from "../../Pages/Dashboard/user/Wishlist";
import Offer from "../../Pages/Dashboard/user/Offer";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'all-properties',
                element: <PrivateRoutes>
                    <Properties></Properties>
                </PrivateRoutes>
            },
            {
                path: 'property-details/:id',
                element: <PrivateRoutes>
                    <PropertyDetails>
                    </PropertyDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/properties/${params.id}`)
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        children: [
            {
                index: true,
                element: <DashboardLayout></DashboardLayout>
            },
            {
                path: 'my-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path: 'make-an-offer/:id', 
                element: <Offer></Offer>,
                loader: ({ params }) => fetch(`http://localhost:5000/wishlist/${params.id}`)
                
            }
        ]
    }
]);

export default router;