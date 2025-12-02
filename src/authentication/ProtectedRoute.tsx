import React, {type JSX} from "react"
import {Navigate} from "react-router-dom";
import {useAuth} from "./AuthContext.tsx";


const ProtectedRoute: React.FC<{ children: JSX.Element}> = ({children}) => {
    const { isAuthenticated, loading} = useAuth();
    if (loading) {
        return <p></p>
    }
    if (!isAuthenticated) {
        return <Navigate to={"/forbidden"} replace />;
    }
    return children;
};

export default ProtectedRoute;