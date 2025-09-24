import {createContext, useContext, useState, type ReactNode } from "react";

type SnackbarContextType = {
    showMessage: (message: string, type?: "success" | "error" | "info") => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
    undefined
);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
};

export function SnackbarProvider({ children }: { children: ReactNode }) {
    const [snackbar, setSnackbar] = useState<{
        message: string;
        type: "success" | "error" | "info";
    } | null>(null);

    const showMessage = (message: string, type: "success" | "error" | "info" = "info") => {
        setSnackbar({ message, type });
        setTimeout(() => setSnackbar(null), 5000);
    };

    return (
        <SnackbarContext.Provider value={{ showMessage }}>
            {children}
            {snackbar && (
                <div className={`snackbar snackbar-${snackbar.type}`}>
                    {snackbar.message}
                </div>
            )}
        </SnackbarContext.Provider>
    );
}