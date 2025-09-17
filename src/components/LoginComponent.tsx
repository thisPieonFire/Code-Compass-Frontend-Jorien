// TypeScript
import React, { useState } from 'react';
import '../style.css'
type LoginComponentProps = {
  onSubmit: (email: string, password: string) => void | Promise<void>;
};

export default function LoginComponent({ onSubmit }: LoginComponentProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    try {
      setSubmitting(true);
      await onSubmit(email, password);
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block', marginBottom: 12 }}>
        <span style={{ display: 'block' }}>Email</span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          style={{ width: '100%', padding: 8 }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: 12 }}>
        <span style={{ display: 'block' }}>Password</span>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          style={{ width: '100%', padding: 8 }}
        />
      </label>

      {error && (
        <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>
      )}

      <button type="submit" disabled={submitting} style={{ padding: '8px 12px' }}>
        {submitting ? 'Logging in…' : 'Log in'}
      </button>
    </form>
  );
}

