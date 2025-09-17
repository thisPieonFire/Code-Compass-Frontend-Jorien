import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
