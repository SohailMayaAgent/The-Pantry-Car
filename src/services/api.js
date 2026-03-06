// src/services/api.js
// Centralized Axios instance for all backend API calls
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor  attach auth token and idempotency key
api.interceptors.request.use((config) => {
    // Attach JWT if present
    const token = localStorage.getItem('spize_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // Attach idempotency key for mutation requests
    if (['post', 'put', 'patch'].includes(config.method)) {
        config.headers['X-Idempotency-Key'] = uuidv4();
    }
    return config;
});

// Response interceptor  normalize errors
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message =
            error.response?.data?.message ||
            error.response?.data?.error ||
            error.message ||
            'Something went wrong. Please try again.';
        const code = error.response?.data?.code || 'NETWORK_ERROR';
        const details = error.response?.data?.details || null;
        const err = new Error(message);
        err.code = code;
        err.details = details;
        err.status = error.response?.status;
        return Promise.reject(err);
    }
);

export default api;
