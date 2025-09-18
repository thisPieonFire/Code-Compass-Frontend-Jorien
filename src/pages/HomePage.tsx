// **Optioneel**: HomePage roept `GET /api/me` aan; bij 401 → redirect naar `/login`.

import '../style.css';
import WelcomeComponent from "../components/WelcomeComponent.tsx";


export default function HomePage() {
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;

    const handleLogout = () => {
        localStorage.removeItem('auth');
        location.reload();
        // TODO: vervangen door navigate('/logout') + echte backend logout en de HTTPOnly cookie
    };

    return (
        <div className="layout">
            <WelcomeComponent user={user} onLogout={handleLogout}/>
        </div>
    );
}
