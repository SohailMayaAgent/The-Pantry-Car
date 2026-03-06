// src/pages/admin/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect back to the page they tried to visit, or default to admin dash
    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '400px', padding: '40px', borderRadius: '16px' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#f5f5f5', marginBottom: '8px' }}>Admin Login</h2>
                    <p style={{ color: '#9a9a9a', fontSize: '14px' }}>The Pantry Car Control Panel</p>
                </div>

                {error && (
                    <div style={{ background: 'rgba(231,76,60,0.1)', border: '1px solid rgba(231,76,60,0.3)', color: '#e74c3c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', color: '#9a9a9a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,133,10,0.25)', color: '#fff', padding: '12px 14px', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', color: '#9a9a9a', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,133,10,0.25)', color: '#fff', padding: '12px 14px', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }}
                        />
                    </div>

                    <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
