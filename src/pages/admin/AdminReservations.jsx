import React from 'react';

export default function AdminReservations() {
    return (
        <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '8px' }}>Manage Reservations</h2>
            <p style={{ color: '#9a9a9a', marginBottom: '24px' }}>View, confirm, or cancel incoming table bookings.</p>

            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px' }}>
                <p style={{ color: '#6a6a6a' }}>Loading reservations...</p>
            </div>
        </div>
    );
}
