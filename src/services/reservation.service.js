// src/services/reservation.service.js
import api from './api';

export const reservationService = {
    /**
     * Submit a new table reservation.
     * @param {Object} formData - { name, phone, email, date, time, guests, occasion, notes }
     * @returns {Promise<{ reservationId, name, date, time, guests, status }>}
     */
    async create(formData) {
        const response = await api.post('/reservations', formData);
        return response.data;
    },

    /**
     * Look up a reservation by its public ID (e.g. RSV-A1B2C3).
     */
    async getById(reservationId) {
        const response = await api.get(`/reservations/${reservationId}`);
        return response.data;
    },
};

export default reservationService;
