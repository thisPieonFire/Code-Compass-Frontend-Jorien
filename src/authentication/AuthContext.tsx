import React, {createContext, useContext, useEffect, useState} from "react";

interface AuthContextType{
    isAuthenticated: boolean;
    loading: boolean;
}
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    loading: true,
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const validateAuth = async () => {
            try {
                const response = await fetch("http://localhost:8080/auth", {
                    method: "GET",
                    credentials: "include",
                });
                if (response.ok) {
                    console.log("[AuthContext] Authentication validated");
                    setIsAuthenticated(true);
                } else {
                    console.log ("[AuthContext] Authentication invalid", response.status);
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("[AuthContext] Authentication check failed:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        validateAuth();
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);