import '../style.css'
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        // Replace this mock with your real API call later.
        // For now, “log in” if non-empty email/password.
        if (email.trim() && password.trim()) {
            // Example: store a token or user info in localStorage/session
            localStorage.setItem('auth', JSON.stringify({ email }));
            navigate('/'); // Redirect to the home page
            return;
        }
        alert('Invalid credentials');
    };

    return (
        <div className="layout">
            <div className="auth-card">
                <h1 className="brand-title">Log in</h1>
                <p className="brand-subtitle">Welcome back — sign in to continue.</p>
                <LoginComponent onSubmit={handleLogin} />
            </div>
        </div>

    );
}