import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({ children }) => {

   const {loading, user}=useAuth()
    const location = useLocation();

    // loading
    if (loading) {
        return <span className="loading loading-dots text-center loading-lg"></span>
    }
    // user
    if (user) {
        return children;
    }
    return <Navigate state={{from:location}} to='/register' replace></Navigate>
};

export default PrivateRoutes;