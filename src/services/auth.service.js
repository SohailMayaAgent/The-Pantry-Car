// src/services/auth.service.js
import api from './api';

export const authService = {
    /**
     * Log into the system
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
        // api.js interceptor already unwraps response.data, so `response` IS the data
        return await api.post('/auth/login', { email, password }); // { user, token }
    },

    /**
     * Get current logged in user via token
     */
    async getMe() {
        // api.js interceptor already unwraps response.data, so the return is the data directly
        return await api.get('/auth/me'); // { user }
    }
};

export default authService;
