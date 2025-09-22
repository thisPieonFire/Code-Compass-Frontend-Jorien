import React, { useState } from 'react';
import '../style.css'
export default function UserCreationComponent({
    onSubmit,
                                        }:{
    onSubmit: (email: string, displayName: string, password: string, role: string) => void | Promise<void>;
}) {
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('TRAINEE');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
        setError('Please enter email and password.');
        return;
    }
    try {
        setSubmitting(true);
        await onSubmit(email, displayName, password, role);
    } catch (err) {
        setError(err instanceof Error ? err.message : 'Sign up failed. Please try again.');
    } finally {setSubmitting(false);
    }
};

    return (
        <form onSubmit={handleSubmit} className="col">
            <label className="col">
                <span>Email</span>
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                />
            </label>

            <label className="col">
                <span>Name</span>
                <input
                    className="input"
                    type="text"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    placeholder="Their display name"
                />

            </label>
            <label className="col">
                <span>Password</span>
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                />
            </label>

            <label className="col">
                <span>Role</span>
                <select
                    className="select"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                >
                    <option value="TRAINEE">Trainee</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </label>

            {error && (
                <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>
            )}

            <button type="submit" disabled={submitting} className="button">
                {submitting ? 'Adding…' : 'Add'}
            </button>
        </form>
    );
}