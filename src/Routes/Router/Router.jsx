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
import Wishlist from "../../Pages/Dashboard/user/Wishlist";
import Offer from "../../Pages/Dashboard/user/Offer";
import Users from "../../Pages/Dashboard/AdminPanel/MangeUsers/Users";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageProperties from "../../Pages/Dashboard/AdminPanel/ManageProperties/ManageProperties";
import AdminRoute from "../AdminRoute";
import PropertyBought from "../../Pages/Dashboard/user/PropertyBought";
import Payment from "../../Pages/Dashboard/user/Payment";
import UserProfile from "../../Pages/Dashboard/user/userProfile";
import MyReview from "../../Pages/Dashboard/user/MyReview";
import AdminProfile from "../../Pages/Dashboard/AdminPanel/MyProfile";
import AgentProfile from "../../Pages/Dashboard/AgentPanel/AgentProﬁle";
import AddProperty from "../../Pages/Dashboard/AgentPanel/AddProperty";



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
                loader: ({ params }) => fetch(`http://localhost:5001/properties/${params.id}`)
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
                element: <Dashboard></Dashboard>
            },
            {
                path: 'user-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: 'offer',
                element: <PropertyBought></PropertyBought>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5001/proposal/${params.id}`)
            },
            {
                path: 'make-an-offer/:id',
                element: <Offer></Offer>,
                loader: ({ params }) => fetch(`http://localhost:5001/wishlist/${params.id}`)
            },
            {
                path: 'my-reviews',
                element: <MyReview></MyReview>
            },
            //
            {
                path: 'agent-profile',
                element:<AgentProfile></AgentProfile>
            },
            {
                path: 'add-property', 
                element:<AddProperty></AddProperty>
            },
            // admin
            {
                path: 'admin',
                element: <AdminProfile></AdminProfile>

            },
            {
                path: 'users',
                element: <AdminRoute><Users></Users></AdminRoute>
            }, {
                path: 'manage-properties',
                element: <AdminRoute>
                    <ManageProperties></ManageProperties>
                </AdminRoute>
            }
           
        ]
    }
]);

export default router;