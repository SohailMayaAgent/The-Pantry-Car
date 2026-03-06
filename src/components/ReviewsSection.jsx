import useWindowSize from '../hooks/useWindowSize';
import { IconStar, IconStarOutline, IconExternalLink } from './Icons';

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
                background: '#FFF8F0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle warm background radials */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(107,66,38,0.05) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(184,134,11,0.06) 0%, transparent 55%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: isMobile ? '0 16px' : '0 24px',
                position: 'relative',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#B8860B',
                        marginBottom: '10px',
                    }}>
                        Testimonials
                    </div>
                    <h2 style={{
                        fontSize: isMobile ? '1.8rem' : '2.6rem',
                        fontWeight: 800,
                        color: '#6B4226',
                        margin: '0 0 8px',
                        lineHeight: 1.2,
                        fontFamily: 'inherit',
                    }}>
                        What Our{' '}
                        <span style={{ color: '#B8860B' }}>Guests Say</span>
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #B8860B, #6B4226)',
                        borderRadius: '2px',
                        margin: '16px auto 28px',
                    }} />

                    {/* Rating Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '20px',
                        background: '#fff',
                        border: '1.5px solid rgba(107,66,38,0.2)',
                        borderRadius: '14px',
                        padding: isMobile ? '16px 20px' : '20px 32px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(107,66,38,0.08)',
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: 'Bebas Neue, Impact, sans-serif',
                                fontSize: isMobile ? '44px' : '56px',
                                color: '#B8860B',
                                lineHeight: 1,
                                fontWeight: 700,
                            }}>
                                4.8
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '4px' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <IconStar key={i} size={18} color="#ffd700" />
                                ))}
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '52px', background: 'rgba(107,66,38,0.15)', flexShrink: 0, display: isMobile ? 'none' : 'block' }} />

                        <div style={{ textAlign: 'left' }}>
                            <div style={{
                                color: '#6B4226',
                                fontSize: isMobile ? '16px' : '18px',
                                fontWeight: 700,
                                marginBottom: '2px',
                            }}>
                                40+ Happy Guests
                            </div>
                            <div style={{
                                color: '#a07850',
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
                                    color: '#B8860B',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                }}
                            >
                                View all reviews <IconExternalLink size={12} color="#B8860B" />
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
                                background: '#fff',
                                border: '1.5px solid rgba(107,66,38,0.14)',
                                borderRadius: '16px',
                                padding: isMobile ? '22px 18px' : '30px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 12px rgba(107,66,38,0.06)',
                                position: 'relative',
                                overflow: 'hidden',
                                animation: 'reveal-up 0.6s ease both',
                                animationDelay: `${idx * 0.1}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(107,66,38,0.14)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(107,66,38,0.14)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(107,66,38,0.06)';
                            }}
                        >
                            {/* Decorative large quote mark */}
                            <div style={{
                                position: 'absolute', top: '8px', right: '14px',
                                fontSize: '80px', lineHeight: 1,
                                fontFamily: 'Georgia, serif', fontWeight: 700,
                                color: 'rgba(184,134,11,0.07)',
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
                                    background: `${r.color}22`,
                                    border: `2px solid ${r.color}55`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: r.color,
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    flexShrink: 0,
                                    fontFamily: 'Inter, sans-serif',
                                }}>
                                    {r.initials}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        color: '#6B4226',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        marginBottom: '1px',
                                    }}>
                                        {r.name}
                                    </div>
                                    <div style={{ color: '#a07850', fontSize: '12px' }}>
                                        {r.date}
                                    </div>
                                </div>
                                <div style={{
                                    color: '#B8860B',
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
                                color: '#7a5c44',
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
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #B8860B 0%, #D4A039 50%, #B8860B 100%)',
                            backgroundSize: '200% auto',
                            animation: 'shimmer 3s linear infinite',
                            borderRadius: '10px',
                            padding: isMobile ? '14px 28px' : '15px 36px',
                            boxShadow: '0 6px 24px rgba(184,134,11,0.35)',
                        }}
                    >
                        <IconStar size={16} color="#fff" />
                        <span>Read All Reviews on Google</span>
                        <IconExternalLink size={16} color="#fff" />
                    </a>
                </div>
            </div>
        </section>
    );
}
