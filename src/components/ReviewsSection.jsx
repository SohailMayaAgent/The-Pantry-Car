import useWindowSize from '../hooks/useWindowSize';
import { IconStar, IconStarOutline, IconExternalLink } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';
const BG_DARK = '#1A1209';

const reviews = [
    { name: 'Neha Sharma', initials: 'NS', date: 'February 2025', stars: 5, text: 'Loved the food and the vibe! The Pantry Car has such a welcoming atmosphere. The paneer tikka was incredible and the coffee is hands down the best in Sector 78.', color: '#9b59b6' },
    { name: 'Arjun Kapoor', initials: 'AK', date: 'January 2025', stars: 5, text: 'Clean space, friendly staff, and an absolutely welcoming atmosphere. The rebranding from Railicious has been fantastic. Everything feels fresh and premium now.', color: '#3498db' },
    { name: 'Priya Malhotra', initials: 'PM', date: 'March 2025', stars: 5, text: 'Perfect place to chill with friends! The Chef Special Platter is a must-try. Great ambience and polite staff. Will definitely be coming back every weekend.', color: '#e74c3c' },
    { name: 'Rohit Verma', initials: 'RV', date: 'February 2025', stars: 4, text: 'The butter chicken here is genuinely one of the best I have had in Noida. Love that it is women-owned  you can feel the care and attention in every detail.', color: '#27ae60' },
    { name: 'Simran Kaur', initials: 'SK', date: 'January 2025', stars: 5, text: 'Great ambience for a date night! The cocktails were creative and the food was consistently excellent. The upgraded recipes really show  much better than before.', color: '#f39c12' },
    { name: 'Vikash Gupta', initials: 'VG', date: 'March 2025', stars: 5, text: 'Hidden gem near Mahagun Mart! Cozy seating, amazing coffee, and the staff remembers you. This is my go-to spot for both work lunches and evening hangouts.', color: '#e74c3c' },
];

function StarRating({ count, total = 5 }) {
    return (
        <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: total }).map((_, i) =>
                i < count
                    ? <span key={i} style={{ display: 'inline-flex', filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.7))' }}>
                        <IconStar size={15} color="#ffd700" />
                    </span>
                    : <IconStarOutline key={i} size={15} color="rgba(215,180,80,0.4)" />
            )}
        </div>
    );
}

export default function ReviewsSection() {
    const { isMobile, isTablet } = useWindowSize();

    return (
        <section
            id="reviews"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(135deg, ${BG_DARK} 0%, #2A2018 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Railway track pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(180deg, transparent 48%, rgba(184, 115, 51, 0.03) 48%, rgba(184, 115, 51, 0.03) 52%, transparent 52%)
                `,
                backgroundSize: '100% 60px',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: isMobile ? '0 16px' : '0 24px',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        borderRadius: '40px', padding: '5px 16px', marginBottom: '16px',
                    }}>
                        <span style={{ fontSize: '18px' }}>⭐</span>
                        <span style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            color: GOLD, textTransform: 'uppercase',
                        }}>
                            समीक्षा
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.6rem',
                        fontWeight: 800,
                        color: TEXT,
                        margin: '0 0 8px',
                        lineHeight: 1.2,
                    }}>
                        What Our{' '}
                        <span style={{ color: GOLD }}>Guests Say</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '16px',
                    }}>
                        हमारे मेहमान क्या कहते हैं
                    </h3>

                    {/* Railway divider */}
                    <div style={{
                        width: '80px', height: '4px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 15px, transparent 15px, transparent 20px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                        margin: '0 auto 28px',
                    }} />

                    {/* Rating Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '20px',
                        background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                        border: `2px solid ${GOLD}`,
                        borderRadius: '16px',
                        padding: isMobile ? '16px 20px' : '20px 32px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        boxShadow: `0 8px 32px rgba(184,115,51,0.3)`,
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? '44px' : '56px',
                                color: BURGUNDY,
                                lineHeight: 1,
                                fontWeight: 700,
                            }}>
                                4.8
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '4px' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <IconStar key={i} size={18} color={GOLD} />
                                ))}
                            </div>
                        </div>

                        <div style={{
                            width: '1px',
                            height: '52px',
                            background: COPPER,
                            flexShrink: 0,
                            display: isMobile ? 'none' : 'block'
                        }} />

                        <div style={{ textAlign: 'left' }}>
                            <div style={{
                                color: TEXT_DARK,
                                fontSize: isMobile ? '16px' : '18px',
                                fontWeight: 700,
                                marginBottom: '2px',
                            }}>
                                43+ Happy Guests
                            </div>
                            <div style={{
                                color: '#7A6455',
                                fontSize: '13px',
                                marginBottom: '8px',
                            }}>
                                Based on Google Reviews
                            </div>
                            <a
                                href="https://g.page/r/thepantrycar"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    color: BURGUNDY,
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                }}
                            >
                                View all reviews <IconExternalLink size={12} color={BURGUNDY} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Review Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: isMobile ? '14px' : '20px',
                }}>
                    {reviews.map((r, idx) => (
                        <div
                            key={r.name}
                            style={{
                                background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                                border: `2px solid ${COPPER}`,
                                borderRadius: '16px',
                                padding: isMobile ? '22px 18px' : '28px',
                                transition: 'all 0.3s ease',
                                boxShadow: `0 4px 20px rgba(184,115,51,0.2)`,
                                position: 'relative',
                                overflow: 'hidden',
                                animation: 'reveal-up 0.6s ease both',
                                animationDelay: `${idx * 0.1}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = GOLD;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 12px 40px rgba(212,175,55,0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = COPPER;
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 20px rgba(184,115,51,0.2)`;
                            }}
                        >
                            {/* Railway card top accent */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${GOLD}, ${COPPER_LIGHT}, ${GOLD})`,
                            }} />

                            {/* Decorative large quote mark */}
                            <div style={{
                                position: 'absolute', top: '8px', right: '14px',
                                fontSize: '80px', lineHeight: 1,
                                fontFamily: 'Georgia, serif', fontWeight: 700,
                                color: 'rgba(184,115,51,0.1)',
                                pointerEvents: 'none', userSelect: 'none',
                            }}>&ldquo;</div>

                            {/* Card header: avatar + name + date */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '14px',
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                    border: `2px solid ${GOLD}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: CREAM,
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    flexShrink: 0,
                                }}>
                                    {r.initials}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        color: TEXT_DARK,
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        marginBottom: '1px',
                                    }}>
                                        {r.name}
                                    </div>
                                    <div style={{ color: '#7A6455', fontSize: '12px' }}>
                                        {r.date}
                                    </div>
                                </div>
                                <div style={{
                                    color: BURGUNDY,
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px',
                                    opacity: 0.7,
                                    flexShrink: 0,
                                }}>
                                    Google
                                </div>
                            </div>

                            {/* Stars */}
                            <div style={{ marginBottom: '12px' }}>
                                <StarRating count={r.stars} />
                            </div>

                            {/* Review text */}
                            <p style={{
                                color: '#7A6455',
                                fontSize: '14px',
                                lineHeight: 1.75,
                                margin: 0,
                            }}>
                                {r.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center', marginTop: isMobile ? '40px' : '56px' }}>
                    <a
                        href="https://maps.app.goo.gl/wQYhVyAeEyjnFeVX7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                            color: CREAM,
                            border: `2px solid ${GOLD}`,
                            padding: isMobile ? '14px 28px' : '15px 36px',
                            borderRadius: '10px',
                            fontWeight: 700,
                            fontSize: '15px',
                            textDecoration: 'none',
                            boxShadow: `0 6px 24px rgba(184,115,51,0.3)`,
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 10px 36px rgba(212,175,55,0.4)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = `0 6px 24px rgba(184,115,51,0.3)`;
                        }}
                    >
                        <IconStar size={16} color={CREAM} />
                        <span>Read All Reviews on Google</span>
                        <IconExternalLink size={16} color={CREAM} />
                    </a>
                </div>
            </div>
        </section>
    );
}
