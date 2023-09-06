import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;


};

export default PrivateRoutes;