// src/pages/admin/AdminLayout.jsx
import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IconCalendar, IconMail, IconMenu, IconHome } from '../../components/Icons';

export default function AdminLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const navLinks = [
        { name: 'Reservations', path: '/admin/reservations', icon: <IconCalendar size={20} /> },
        { name: 'Enquiries', path: '/admin/enquiries', icon: <IconMail size={20} /> },
        { name: 'Menu Editor', path: '/admin/menu', icon: <IconMenu size={20} /> },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
            {/* Sidebar */}
            <aside style={{ width: '260px', background: '#111', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', margin: 0 }}>
                        <span style={{ color: '#6B4226' }}>Pantry Car</span> Admin
                    </h1>
                    <p style={{ color: '#9a9a9a', fontSize: '13px', marginTop: '4px' }}>Welcome, {user?.name}</p>
                </div>

                <nav style={{ flex: 1, padding: '24px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname.startsWith(link.path);
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px',
                                    textDecoration: 'none', color: isActive ? '#fff' : '#9a9a9a',
                                    background: isActive ? 'linear-gradient(135deg, rgba(212,133,10,0.2), transparent)' : 'transparent',
                                    border: isActive ? '1px solid rgba(212,133,10,0.3)' : '1px solid transparent',
                                    transition: 'all 0.2s',
                                    fontWeight: isActive ? 600 : 400
                                }}
                            >
                                <div style={{ color: isActive ? '#f0a230' : '#6a6a6a' }}>{link.icon}</div>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9a9a9a', textDecoration: 'none', fontSize: '14px' }}>
                        <IconHome size={16} /> View Live Site
                    </Link>
                    <button
                        onClick={handleLogout}
                        style={{ width: '100%', padding: '10px', background: 'rgba(231,76,60,0.1)', color: '#e74c3c', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto', height: '100vh', boxSizing: 'border-box' }}>
                <Outlet />
            </main>
        </div>
    );
}
