import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAgent from "../../Hooks/useAgent";
import { Spinner } from "flowbite-react";


const AgentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAgent, isAgentLoading] = useAgent();
    const location = useLocation();

    if (loading || isAgentLoading) {
        return <div className="flex place-content-center mt-28">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if (user && isAgent) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AgentRoute;