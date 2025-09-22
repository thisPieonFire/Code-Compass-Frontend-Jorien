import '../style.css'
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import { login } from '../lib/api';

export default function LoginPage() {
        const navigate = useNavigate();
    const handleLogin = async (email: string, password: string) => {
        try {
            const res = await login(email, password);
            if (!res || !res.user) {
                throw new Error('Invalid login response from server');
            }
            localStorage.setItem('userInfoRes', JSON.stringify(res.user));
            navigate('/');
        } catch (err) {
            console.error('[login] failed', err);
            if (err instanceof Error) {
                throw err;
            }
            throw new Error('Login failed');
        }

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



/*               let message = "we got to here";
            alert(message);*/