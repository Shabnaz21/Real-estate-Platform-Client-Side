import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";


const PrivateRoutes = ({ children }) => {

   const {loading, user}=useAuth()
    const location = useLocation();

    // loading
    if (loading) {
        return <div className="flex place-content-center">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    // user
    if (user) {
        return children;
    }
    return <Navigate state={{from:location}} to='/register' replace></Navigate>
};

export default PrivateRoutes;