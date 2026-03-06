// src/services/auth.service.js
import api from './api';

export const authService = {
    /**
     * Log into the system
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
        const response = await api.post('/auth/login', { email, password });
        return response.data; // { user, token }
    },

    /**
     * Get current logged in user via token
     */
    async getMe() {
        const response = await api.get('/auth/me');
        return response.data; // { user }
    }
};

export default authService;
