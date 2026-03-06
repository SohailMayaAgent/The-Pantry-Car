// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/auth.service';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check token on initial load
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('spize_token');
            if (token) {
                try {
                    const data = await authService.getMe();
                    setUser(data.user);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Failed to load user:', error);
                    localStorage.removeItem('spize_token');
                }
            }
            setLoading(false);
        };

        loadUser();
    }, []);

    const login = async (email, password) => {
        const data = await authService.login(email, password);
        localStorage.setItem('spize_token', data.token);
        setUser(data.user);
        setIsAuthenticated(true);
        return data;
    };

    const logout = () => {
        localStorage.removeItem('spize_token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
