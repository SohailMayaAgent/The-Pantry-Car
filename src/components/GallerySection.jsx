import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconX } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const BG_DARK = '#1A1209';

const galleryItems = [
    { id: 1, src: '/hero_bbq.webp', category: 'Ambience', label: 'Warm & Cozy Ambience', wide: true },
    { id: 2, src: '/lounge_bar.webp', category: 'Ambience', label: 'The Bar Corner', wide: false },
    { id: 3, src: '/buffet_spread.webp', category: 'Food', label: 'Signature Spread', wide: false },
    { id: 4, src: '/drinks_bar.webp', category: 'Coffee', label: 'Artisan Coffee', wide: false },
    { id: 5, src: '/live_music.webp', category: 'Seating', label: 'Comfortable Seating', wide: true },
    { id: 6, src: '/birthday_party.webp', category: 'Food', label: "Chef's Creations", wide: false },
];

const categories = ['All', 'Ambience', 'Food', 'Coffee', 'Seating'];

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const { isMobile, isTablet } = useWindowSize();

    const filtered = galleryItems.filter(i => activeFilter === 'All' || i.category === activeFilter);

    return (
        <section
            id="gallery"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(180deg, ${BURGUNDY} 0%, #2A2018 100%)`,
                position: 'relative',
            }}
        >
            {/* Railway track pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(90deg, transparent 48%, rgba(184, 115, 51, 0.03) 48%, rgba(184, 115, 51, 0.03) 52%, transparent 52%)
                `,
                backgroundSize: '80px 30px',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '36px' : '56px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        borderRadius: '40px', padding: '5px 16px', marginBottom: '16px',
                    }}>
                        <span style={{ fontSize: '18px' }}>📷</span>
                        <span style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            color: GOLD, textTransform: 'uppercase',
                        }}>
                            गैलरी
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                    }}>
                        Inside{' '}
                        <span style={{ color: GOLD }}>The Pantry Car</span>
                    </h2>

                    {/* Railway divider */}
                    <div style={{
                        width: '80px', height: '4px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 15px, transparent 15px, transparent 20px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                        margin: '0 auto',
                    }} />
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
                                    background: activeFilter === cat
                                        ? `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`
                                        : 'rgba(255,248,240,0.05)',
                                    color: activeFilter === cat ? CREAM : 'rgba(255,248,240,0.7)',
                                    border: activeFilter === cat ? `2px solid ${GOLD}` : '1px solid rgba(212, 175, 55, 0.3)',
                                    boxShadow: activeFilter === cat
                                        ? `0 4px 16px rgba(184,115,51,0.3)`
                                        : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeFilter !== cat) {
                                        e.currentTarget.style.borderColor = GOLD;
                                        e.currentTarget.style.background = 'rgba(255,248,240,0.08)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeFilter !== cat) {
                                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                                        e.currentTarget.style.background = 'rgba(255,248,240,0.05)';
                                    }
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
                    gap: isMobile ? '10px' : '16px',
                    gridAutoRows: isMobile ? '160px' : '240px',
                }}>
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setLightbox(item)}
                            style={{
                                position: 'relative', overflow: 'hidden',
                                borderRadius: isMobile ? '10px' : '14px',
                                cursor: 'pointer',
                                border: `2px solid ${COPPER}`,
                                gridColumn: (!isMobile && item.wide) ? 'span 2' : 'span 1',
                                transition: 'all 0.3s ease',
                                boxShadow: `0 4px 16px rgba(184,115,51,0.2)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
                                e.currentTarget.style.borderColor = GOLD;
                                e.currentTarget.style.boxShadow = `0 8px 30px rgba(212,175,55,0.4)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
                                e.currentTarget.style.borderColor = COPPER;
                                e.currentTarget.style.boxShadow = `0 4px 16px rgba(184,115,51,0.2)`;
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
                                    background: 'linear-gradient(0deg, rgba(42,29,20,0.9) 0%, transparent 60%)',
                                    display: 'flex', flexDirection: 'column',
                                    justifyContent: 'flex-end', padding: '16px',
                                }}
                            >
                                <div style={{ color: GOLD, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
                                    {item.category}
                                </div>
                                <div style={{ color: CREAM, fontSize: '14px', fontWeight: 600 }}>{item.label}</div>
                            </div>
                            {/* Category badge */}
                            <div style={{
                                position: 'absolute', top: '12px', right: '12px',
                                background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                color: CREAM,
                                fontSize: '10px', fontWeight: 700, padding: '4px 10px',
                                borderRadius: '20px', textTransform: 'uppercase',
                                border: `1px solid ${GOLD}`,
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
                        background: 'rgba(26,18,9,0.96)',
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
                                top: isMobile ? '8px' : '-48px',
                                right: isMobile ? '8px' : '0px',
                                background: 'rgba(255,248,240,0.12)',
                                border: `2px solid ${GOLD}`,
                                borderRadius: '50%',
                                width: '44px', height: '44px',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                zIndex: 1,
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`;
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,248,240,0.12)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <IconX size={22} color={CREAM} />
                        </button>
                        <img
                            src={lightbox.src}
                            alt={lightbox.label}
                            style={{
                                width: '100%', borderRadius: '12px', display: 'block',
                                maxHeight: '80vh', objectFit: 'contain',
                                border: `2px solid ${GOLD}`,
                                boxShadow: `0 8px 40px rgba(184,115,51,0.3)`,
                            }}
                        />
                        <div style={{ marginTop: '16px', textAlign: 'center' }}>
                            <div style={{ color: CREAM, fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                                {lightbox.label}
                            </div>
                            <div style={{ color: GOLD, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {lightbox.category}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
