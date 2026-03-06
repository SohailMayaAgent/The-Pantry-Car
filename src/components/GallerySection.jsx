import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconX } from './Icons';

const galleryItems = [
    { id: 1, src: '/hero_bbq.png', category: 'Ambience', label: 'Warm & Cozy Ambience', wide: true },
    { id: 2, src: '/lounge_bar.png', category: 'Ambience', label: 'The Bar Corner', wide: false },
    { id: 3, src: '/buffet_spread.png', category: 'Food', label: 'Signature Spread', wide: false },
    { id: 4, src: '/drinks_bar.png', category: 'Coffee', label: 'Artisan Coffee', wide: false },
    { id: 5, src: '/live_music.png', category: 'Seating', label: 'Comfortable Seating', wide: true },
    { id: 6, src: '/birthday_party.png', category: 'Food', label: "Chef's Creations", wide: false },
];

const categories = ['All', 'Ambience', 'Food', 'Coffee', 'Seating'];

const brown = '#6B4226';
const copper = '#B8860B';
const beige = '#F5E6D3';

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const { isMobile, isTablet } = useWindowSize();

    const filtered = galleryItems.filter(i => activeFilter === 'All' || i.category === activeFilter);

    return (
        <section id="gallery" style={{ padding: isMobile ? '64px 0' : '100px 0', background: beige, position: 'relative' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '56px' }}>
                    <div className="section-subtitle">Photo Gallery</div>
                    <h2 className="section-title" style={{ color: brown, fontSize: isMobile ? '1.8rem' : undefined }}>
                        Inside{' '}
                        <span style={{ color: copper }}>The Pantry Car</span>
                    </h2>
                    <div className="divider-copper" style={{ width: '60px', margin: '16px auto 0' }} />
                </div>

                {/* Filters */}
                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '28px' }}>
                    <div style={{
                        display: 'flex', gap: '8px',
                        justifyContent: isMobile ? 'flex-start' : 'center',
                        minWidth: 'max-content',
                        padding: isMobile ? '0 0 8px 0' : '0',
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    padding: isMobile ? '8px 16px' : '10px 22px',
                                    borderRadius: '40px', fontWeight: 600,
                                    fontSize: isMobile ? '12px' : '13px',
                                    cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap',
                                    background: activeFilter === cat ? brown : '#fff',
                                    color: activeFilter === cat ? '#FFF8F0' : 'rgba(107,66,38,0.6)',
                                    border: activeFilter === cat ? 'none' : '1px solid rgba(107,66,38,0.2)',
                                    boxShadow: activeFilter === cat ? '0 4px 16px rgba(107,66,38,0.25)' : 'none',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: isMobile ? '8px' : '12px',
                    gridAutoRows: isMobile ? '160px' : '240px',
                }}>
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setLightbox(item)}
                            style={{
                                position: 'relative', overflow: 'hidden',
                                borderRadius: isMobile ? '8px' : '10px',
                                cursor: 'pointer',
                                border: '1px solid rgba(107,66,38,0.12)',
                                gridColumn: (!isMobile && item.wide) ? 'span 2' : 'span 1',
                                transition: 'box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(107,66,38,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                            />
                            <div
                                className="gallery-overlay"
                                style={{
                                    position: 'absolute', inset: 0, opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    background: 'linear-gradient(0deg, rgba(61,43,31,0.82) 0%, transparent 55%)',
                                    display: 'flex', flexDirection: 'column',
                                    justifyContent: 'flex-end', padding: '16px',
                                }}
                            >
                                <div style={{ color: copper, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
                                    {item.category}
                                </div>
                                <div style={{ color: '#FFF8F0', fontSize: '14px', fontWeight: 600 }}>{item.label}</div>
                            </div>
                            <div style={{
                                position: 'absolute', top: '10px', right: '10px',
                                background: 'rgba(61,43,31,0.65)', color: copper,
                                fontSize: '10px', fontWeight: 700, padding: '3px 8px',
                                borderRadius: '20px', textTransform: 'uppercase',
                            }}>
                                {item.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(61,43,31,0.92)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: isMobile ? '16px' : '32px',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            style={{
                                position: 'absolute',
                                top: isMobile ? '8px' : '-44px',
                                right: isMobile ? '8px' : '0px',
                                background: 'rgba(255,248,240,0.12)',
                                border: '1px solid rgba(255,248,240,0.2)',
                                borderRadius: '50%',
                                width: '40px', height: '40px',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                zIndex: 1,
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,248,240,0.22)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,248,240,0.12)'; }}
                        >
                            <IconX size={20} color="#FFF8F0" />
                        </button>
                        <img
                            src={lightbox.src}
                            alt={lightbox.label}
                            style={{
                                width: '100%', borderRadius: '10px', display: 'block',
                                maxHeight: '80vh', objectFit: 'contain',
                                border: '1px solid rgba(255,248,240,0.1)',
                            }}
                        />
                        <div style={{ marginTop: '14px', textAlign: 'center' }}>
                            <div style={{ color: '#FFF8F0', fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>{lightbox.label}</div>
                            <div style={{ color: copper, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>{lightbox.category}</div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
