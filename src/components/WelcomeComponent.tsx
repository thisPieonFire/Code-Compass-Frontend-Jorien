import { Link } from 'react-router-dom';
import '../style.css'

type User = {
    email: string;
    displayName?: string;
} | null;


export default function WelcomeComponent({
                                             user,
                                             onLogout,
                                         }: {
    user: User;
    onLogout: () => void;
}) {
    const name = user?.displayName || user?.email || '';

    return (
        <div className="auth-card">
            <h1 className="brand-title">
                Welcome{user ? `, ${name}` : ''}
            </h1>
            <p className="brand-subtitle">
                {user ? 'You are signed in.' : 'You are not signed in yet.'}
            </p>


            <div className="col">
                {user ? (
                    <button className="button" onClick={onLogout}>
                        Log out
                    </button>
                ) : (
                    <p style={{ textAlign: 'center', margin: 0 }}>
                        Ready to dive in?{' '}
                        <Link to="/login" className="link">Go to Login</Link>
                    </p>
                )}
            </div>
        </div>
    );
}

