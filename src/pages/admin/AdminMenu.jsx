export default function AdminMenu() {
    return (
        <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '8px' }}>Menu Editor</h2>
            <p style={{ color: '#9a9a9a', marginBottom: '24px' }}>Update menu items, pricing, categories, and availability.</p>

            <div className="glass-card" style={{ padding: '24px', borderRadius: '12px' }}>
                <p style={{ color: '#6a6a6a' }}>Loading menu items...</p>
            </div>
        </div>
    );
}
