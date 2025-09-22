import { Link } from 'react-router-dom';
import '../style.css'
import {logout} from "../lib/api.ts";
import { useNavigate } from 'react-router-dom';

export default function WelcomeComponent({
                                             loggedInUser,
                                         }: { loggedInUser?: any }) {
    const name = loggedInUser?.displayName || loggedInUser?.email || '';
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/logout');
        logout()
        localStorage.removeItem('userInfoRes');
        navigate('/');
        location.reload();}

    return (
        <div className="auth-card">
            <h1 className="brand-title">
                Welcome{loggedInUser ? `, ${name}` : ' stranger'}
            </h1>
            <p className="brand-subtitle">
                {loggedInUser ? 'You are signed in.' : 'You are not signed in yet.'}
            </p>


            <div className="col">
                {loggedInUser ? (
                    <button className="button" onClick={handleLogout}>
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

/*
const handleLogout = () => {
    localStorage.removeItem('auth');
    location.reload();
};*/
