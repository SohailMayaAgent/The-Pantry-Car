import useWindowSize from '../hooks/useWindowSize';
import {
    IconCoffee,
    IconCutlery,
    IconHeart,
    IconTruck,
    IconTrain,
    IconStar,
    IconGlassWater,
} from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';

export default function AboutSection() {
    const { isMobile, isTablet } = useWindowSize();

    const features = [
        { icon: IconTrain, title: 'Railway Heritage', desc: 'Nostalgic ambience with vintage railway theme' },
        { icon: IconCutlery, title: 'Authentic Cuisine', desc: 'Traditional recipes with modern presentation' },
        { icon: IconGlassWater, title: 'Fresh Ingredients', desc: 'Quality ingredients sourced daily' },
        { icon: IconHeart, title: 'Women-Owned', desc: 'Proudly women-led and community-driven' },
        { icon: IconTruck, title: 'All Services', desc: 'Dine-in, takeaway & home delivery' },
        { icon: IconCoffee, title: 'Cozy Ambience', desc: 'Warm hospitality in railway setting' },
    ];

    const tags = ['North Indian', 'Chinese', 'Continental', 'Biryani', 'Starters & Kebabs', 'Veg & Non-Veg'];

    return (
        <section
            id="about"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(135deg, #2A2018 0%, ${BURGUNDY} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Railway track pattern background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(90deg, transparent 48%, rgba(184, 115, 51, 0.05) 48%, rgba(184, 115, 51, 0.05) 52%, transparent 52%)
                `,
                backgroundSize: '80px 30px',
                pointerEvents: 'none',
            }} />

            {/* Lantern glow decorations */}
            <div style={{
                position: 'absolute', top: '10%', left: '5%',
                fontSize: '100px', opacity: 0.05, filter: 'blur(2px)',
            }}>🏮</div>

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isMobile ? '0 16px' : '0 24px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: `1px solid ${GOLD}`,
                        borderRadius: '40px', padding: '5px 16px', marginBottom: '16px',
                    }}>
                        <span style={{ fontSize: '20px' }}>🚃</span>
                        <span style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            color: GOLD, textTransform: 'uppercase',
                        }}>
                            हमारे बारे में
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '2rem' : '2.8rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                        lineHeight: 1.2,
                    }}>
                        About{' '}
                        <span style={{ color: GOLD }}>The Pantry Car</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.4rem' : '1.8rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '20px',
                    }}>
                        थे पैंट्री कार की कहानी
                    </h3>

                    {/* Railway track divider */}
                    <div style={{
                        width: '100px', height: '4px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 15px, transparent 15px, transparent 20px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                        margin: '0 auto 24px',
                    }} />
                </div>

                {/* ── Two-column layout ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '40px' : isTablet ? '48px' : '80px',
                        alignItems: 'center',
                        marginBottom: isMobile ? '56px' : '80px',
                    }}
                >
                    {/* ── LEFT: Image column ── */}
                    <div style={{ position: 'relative' }}>
                        {/* Image wrapper with railway ticket style */}
                        <div
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: `3px solid ${COPPER}`,
                                boxShadow: `0 8px 32px rgba(184,115,51,0.3)`,
                                position: 'relative',
                            }}
                        >
                            {/* Train ticket notches */}
                            <div style={{
                                position: 'absolute', left: '-12px', top: '50%',
                                width: '24px', height: '24px',
                                background: BURGUNDY, borderRadius: '50%',
                            }} />
                            <div style={{
                                position: 'absolute', right: '-12px', top: '50%',
                                width: '24px', height: '24px',
                                background: BURGUNDY, borderRadius: '50%',
                            }} />

                            <img
                                src="/lounge_bar.webp"
                                alt="The Pantry Car - Lounge & Dining"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: isMobile ? '320px' : '460px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Floating rating badge */}
                        <div
                            className="victorian-border"
                            style={{
                                position: 'absolute',
                                bottom: isMobile ? '-20px' : '-28px',
                                right: isMobile ? '-8px' : '-28px',
                                background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                                borderRadius: '14px',
                                padding: isMobile ? '14px 18px' : '20px 28px',
                                textAlign: 'center',
                                boxShadow: `0 12px 40px rgba(184,115,51,0.3)`,
                                minWidth: isMobile ? '120px' : '140px',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Playfair Display, Georgia, serif',
                                    fontSize: isMobile ? '36px' : '48px',
                                    fontWeight: 700,
                                    color: BURGUNDY,
                                    lineHeight: 1,
                                    marginBottom: '6px',
                                }}
                            >
                                4.8
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '2px',
                                    marginBottom: '6px',
                                }}
                            >
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <IconStar key={i} size={14} color={GOLD} />
                                ))}
                            </div>
                            <div
                                style={{
                                    color: '#7A6455',
                                    fontSize: '10px',
                                    fontWeight: 600,
                                    letterSpacing: '0.8px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                43+ Reviews
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Content column ── */}
                    <div style={{ paddingTop: isMobile ? '32px' : '0' }}>
                        {/* Subtitle */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(212, 175, 55, 0.15)',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            marginBottom: '16px'
                        }}>
                            <span style={{ fontSize: '18px' }}>📜</span>
                            <span style={{
                                color: GOLD,
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                            }}>
                                Our Story
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            style={{
                                fontFamily: 'Playfair Display, Georgia, serif',
                                fontSize: isMobile ? '1.6rem' : '2rem',
                                fontWeight: 700,
                                color: TEXT,
                                marginBottom: '16px',
                                lineHeight: 1.2,
                            }}
                        >
                            Journey Through{' '}
                            <span
                                style={{
                                    background: `linear-gradient(135deg, ${GOLD} 0%, ${COPPER_LIGHT} 60%, ${GOLD} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Authentic Flavors
                            </span>
                        </h2>

                        {/* Railway divider */}
                        <div
                            style={{
                                width: '60px',
                                height: '3px',
                                background: `linear-gradient(90deg, ${GOLD}, ${COPPER}, ${GOLD})`,
                                marginBottom: '24px',
                                borderRadius: '2px',
                            }}
                        />

                        {/* Paragraph 1 */}
                        <p
                            style={{
                                color: 'rgba(255,248,240,0.9)',
                                fontSize: isMobile ? '14px' : '15px',
                                lineHeight: 1.85,
                                marginBottom: '16px',
                            }}
                        >
                            Welcome to{' '}
                            <strong style={{ color: GOLD, fontWeight: 700 }}>
                                The Pantry Car (थे पैंट्री कार)
                            </strong>{' '}
                            - a railway-themed restaurant in the heart of Sector 78, Noida. Our journey is inspired by the nostalgic charm of Indian Railway pantry cars, where simple yet flavorful meals have fed millions of travelers.
                        </p>

                        {/* Paragraph 2 */}
                        <p
                            style={{
                                color: 'rgba(255,248,240,0.85)',
                                fontSize: isMobile ? '14px' : '15px',
                                lineHeight: 1.85,
                                marginBottom: '28px',
                            }}
                        >
                            As a{' '}
                            <strong style={{ color: COPPER_LIGHT, fontWeight: 700 }}>
                                women-owned business
                            </strong>
                            , we take pride in crafting authentic Indian and Chinese cuisine with love and care. Our kitchen combines traditional recipes with modern techniques, ensuring every dish tells a story of culinary excellence.
                        </p>

                        {/* Cuisine / category tags */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '28px',
                            }}
                        >
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        border: `1px solid ${GOLD}`,
                                        color: GOLD,
                                        padding: '5px 14px',
                                        borderRadius: '40px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Info row */}
                        <div
                            style={{
                                display: 'flex',
                                gap: isMobile ? '24px' : '32px',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                            }}
                        >
                            {/* Hours */}
                            <div style={{
                                background: 'rgba(255,248,240,0.05)',
                                padding: '12px 18px',
                                borderRadius: '10px',
                                border: `1px solid ${COPPER}`,
                            }}>
                                <div
                                    style={{
                                        color: COPPER_LIGHT,
                                        fontSize: '10px',
                                        letterSpacing: '1.5px',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Hours / समय
                                </div>
                                <div
                                    style={{
                                        color: TEXT,
                                        fontWeight: 700,
                                        fontSize: '14px',
                                    }}
                                >
                                    11 AM – 11 PM Daily
                                </div>
                            </div>

                            {/* Location */}
                            <div style={{
                                background: 'rgba(255,248,240,0.05)',
                                padding: '12px 18px',
                                borderRadius: '10px',
                                border: `1px solid ${COPPER}`,
                            }}>
                                <div
                                    style={{
                                        color: COPPER_LIGHT,
                                        fontSize: '10px',
                                        letterSpacing: '1.5px',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Location / स्थान
                                </div>
                                <div
                                    style={{
                                        color: TEXT,
                                        fontWeight: 700,
                                        fontSize: '14px',
                                    }}
                                >
                                    Mahagun Mart, Sec 78
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Feature cards grid ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'repeat(2, 1fr)'
                            : isTablet
                                ? 'repeat(3, 1fr)'
                                : 'repeat(6, 1fr)',
                        gap: isMobile ? '12px' : '20px',
                    }}
                >
                    {features.map(({ icon: FeatureIcon, title, desc }, idx) => (
                        <div
                            key={title}
                            style={{
                                padding: isMobile ? '20px 14px' : '28px 20px',
                                borderRadius: '14px',
                                textAlign: 'center',
                                background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                                border: `2px solid ${COPPER}`,
                                boxShadow: `0 4px 20px rgba(184,115,51,0.2)`,
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                animation: `reveal-up 0.6s ease both`,
                                animationDelay: `${idx * 0.08}s`,
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = GOLD;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 8px 30px rgba(212,175,55,0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = COPPER;
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 20px rgba(184,115,51,0.2)`;
                            }}
                        >
                            {/* Golden top accent */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${GOLD}, ${COPPER}, ${GOLD})`,
                            }} />

                            {/* Icon circle */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                                <div
                                    style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                        border: `2px solid ${GOLD}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}
                                >
                                    <FeatureIcon size={22} color={CREAM} />
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? '13px' : '15px',
                                color: TEXT_DARK, marginBottom: '6px', fontWeight: 700, lineHeight: 1.3,
                            }}>
                                {title}
                            </h3>
                            <p style={{ color: '#7A6455', fontSize: '11px', lineHeight: 1.5 }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Railway Decoration */}
                <div style={{
                    marginTop: '48px',
                    textAlign: 'center',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '20px', color: 'rgba(255,248,240,0.5)',
                        fontSize: '13px',
                    }}>
                        <div style={{
                            height: '1px', width: '60px', background: GOLD,
                        }} />
                        <span>🚂 स्वाद की यात्रा 🚂</span>
                        <div style={{
                            height: '1px', width: '60px', background: GOLD,
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
