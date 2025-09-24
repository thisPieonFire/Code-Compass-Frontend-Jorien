import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {SnackbarProvider} from "./components/SnackbarContext.tsx";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateUserPage from "./pages/CreateUserPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ForbiddenPage from "./pages/ForbiddenPage.tsx";
import DoesNotExistYetPage from "./pages/DoesNotExistYetPage.tsx";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/create-user', element: <CreateUserPage /> },
    { path: '/logout', element: <LoginPage />},
    { path: '/error', element: <ErrorPage />},
    { path: '*', element: <DoesNotExistYetPage />},
    { path: '/forbidden', element: <ForbiddenPage />}
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SnackbarProvider>
        <RouterProvider router={router} />
        </SnackbarProvider>
    </React.StrictMode>
);
