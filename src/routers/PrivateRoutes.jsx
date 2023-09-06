import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (!user) {
        return navigate('/login')
    }

    return children;


};

export default PrivateRoutes;