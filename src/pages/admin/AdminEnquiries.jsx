import React from 'react';

export default function AdminEnquiries() {
    return (
        <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '8px' }}>Customer Enquiries</h2>
            <p style={{ color: '#9a9a9a', marginBottom: '24px' }}>Review contact form submissions and leads.</p>

            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px' }}>
                <p style={{ color: '#6a6a6a' }}>Loading enquiries...</p>
            </div>
        </div>
    );
}
