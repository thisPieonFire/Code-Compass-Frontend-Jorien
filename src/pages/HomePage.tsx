//placeholder met tekst **“Welkom admin”**.
// **Optioneel**: HomePage roept `GET /api/me` aan; bij 401 → redirect naar `/login`.

import '../style.css'
/*//import React from "react";

const HomePage = () => {
    return (
        <div>
    <h1>Welkom admin</h1>
        </div>
    )
}
export default HomePage;
// TypeScript*/

import { Link } from 'react-router-dom';
// ... existing code ...

export default function HomePage() {
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;

    return (
        <div style={{ maxWidth: 640, margin: '40px auto' }}>
            <h1>Home</h1>
            {user ? (
                <>
                    <p>Signed in as {user.email}</p>
                    <button
                        onClick={() => {
                            localStorage.removeItem('auth');
                            location.reload();
                        }}
                    >
                        Log out
                    </button>
                </>
            ) : (
                <>
                    <p>You are not logged in.</p>
                    <Link to="/login">Go to Login</Link>
                </>
            )}
        </div>
    );
}
