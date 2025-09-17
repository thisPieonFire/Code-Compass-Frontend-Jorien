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
        <div style={{ maxWidth: 420, margin: '40px auto' }}>
            <h1>Login</h1>
            <LoginComponent onSubmit={handleLogin} />
        </div>
    );
}

// todo How to use the classes in your JSX
// - Wrap your page in: className="layout"
// - Wrap the login box in: className="auth-card"
// - Title: className="brand-title"
// - Subtitle: className="brand-subtitle"
// - Inputs: className="input"
// - Button: className="button"
// - Optional links: className="link"