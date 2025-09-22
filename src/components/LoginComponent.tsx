import React, { useState } from 'react';
import '../style.css'
export default function LoginComponent({
    onSubmit,
     }:{
    onSubmit: (email: string, password: string) => void | Promise<void>;
}){
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
        setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setSubmitting(false);
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

      {error && (
        <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>
      )}

      <button type="submit" disabled={submitting} className="button">
        {submitting ? 'Logging in…' : 'Log in'}
      </button>
    </form>
  );
}
/*
todo:
Submit-knop die `POST /api/login` aanroept met `credentials: 'include'`.
Loading-state en foutmelding afhandelen.
*/

