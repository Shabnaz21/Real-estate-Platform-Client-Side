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
                path: '/all-properties',
                element:<Properties></Properties>
            },
            {
                path: '/property-details/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/properties/${params.id}`)
            },
            {
                path: '/contact',
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
        element:<Login></Login>
    }
]);

export default router;