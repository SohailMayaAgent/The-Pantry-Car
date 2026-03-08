import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconCoffee, IconCutlery, IconCake, IconCalendar, IconMail, IconSend, IconTrain } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';
const BG_DARK = '#1A1209';

const specials = [
    {
        id: 'ambience',
        Icon: IconCoffee,
        title: 'Cozy Ambience',
        schedule: 'Every Day · 11 AM – 11 PM',
        desc: 'Step into a warm, train-inspired dining space with soft lighting, plush seating, and a welcoming atmosphere perfect for every occasion.',
        cta: 'Reserve a Table',
        color: COPPER_LIGHT,
        highlight: false,
    },
    {
        id: 'specials',
        Icon: IconCutlery,
        title: "Chef's Specials",
        schedule: 'Daily Rotating Menu',
        desc: "Our chef curates seasonal specials and signature dishes crafted with fresh local ingredients. Ask your server about today's highlights.",
        cta: 'View Our Menu',
        color: GOLD,
        highlight: true,
    },
    {
        id: 'private',
        Icon: IconCake,
        title: 'Private Events',
        schedule: 'Any Day · Advance Booking',
        desc: 'Celebrate birthdays, anniversaries, corporate gatherings, or intimate dinners in our private dining area. We handle the setup, you enjoy the moment.',
        cta: 'Plan Your Event',
        color: COPPER_LIGHT,
        highlight: false,
    },
];

export default function EventsSection() {
    const [email, setEmail] = useState('');
    const [joined, setJoined] = useState(false);
    const { isMobile, isTablet } = useWindowSize();

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="events"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(180deg, #2A2018 0%, ${BG_DARK} 100%)`,
                position: 'relative',
                overflow: 'hidden',
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

            {/* Lantern decoration */}
            <div style={{
                position: 'absolute', top: '15%', left: '5%',
                fontSize: '60px', opacity: 0.05, filter: 'blur(2px)',
            }}>🏮</div>

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
                        <IconTrain size={16} color={GOLD} />
                        <span style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            color: GOLD, textTransform: 'uppercase',
                        }}>
                            विशेष ऑफर
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                    }}>
                        Experience{' '}
                        <span style={{ color: GOLD }}>The Best</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '16px',
                    }}>
                        अनुभव करें सर्वश्रेष्ठ
                    </h3>

                    {/* Railway divider */}
                    <div style={{
                        width: '80px', height: '4px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 15px, transparent 15px, transparent 20px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                        margin: '0 auto 20px',
                    }} />

                    <p style={{
                        color: 'rgba(255,248,240,0.8)',
                        maxWidth: '520px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontSize: isMobile ? '14px' : '15px',
                    }}>
                        From our warm, welcoming ambience to chef-crafted daily specials and bespoke private event hosting  The Pantry Car is where every meal becomes a memory.
                    </p>
                </div>

                {/* Special Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: isMobile ? '16px' : '20px',
                    marginBottom: isMobile ? '40px' : '60px',
                }}>
                    {specials.map(({ id, Icon, title, schedule, desc, cta, color, highlight }) => (
                        <div
                            key={id}
                            style={{
                                background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                                padding: isMobile ? '24px 20px' : '32px',
                                borderRadius: '14px',
                                border: `2px solid ${highlight ? GOLD : COPPER}`,
                                boxShadow: `0 4px 20px rgba(184,115,51,0.2)`,
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = highlight ? GOLD : COPPER_LIGHT;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 8px 30px rgba(212,175,55,0.3)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = highlight ? GOLD : COPPER;
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 20px rgba(184,115,51,0.2)`;
                            }}
                        >
                            {/* Top accent */}
                            {highlight && (
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '3px',
                                    background: `linear-gradient(90deg, ${GOLD}, ${COPPER_LIGHT}, ${GOLD})`,
                                }} />
                            )}

                            {/* Featured badge */}
                            {highlight && (
                                <div style={{
                                    position: 'absolute', top: '16px', right: '16px',
                                    background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                    color: CREAM,
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}>
                                    Featured
                                </div>
                            )}

                            <div style={{
                                width: '52px', height: '52px', borderRadius: '12px',
                                background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                border: `2px solid ${GOLD}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '16px',
                            }}>
                                <Icon size={26} color={CREAM} />
                            </div>

                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? '1.1rem' : '1.3rem',
                                color: TEXT_DARK,
                                marginBottom: '6px',
                            }}>
                                {title}
                            </h3>

                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                color: COPPER_LIGHT,
                                fontSize: '12px',
                                fontWeight: 600,
                                marginBottom: '12px',
                                letterSpacing: '0.3px',
                                flexWrap: 'wrap',
                            }}>
                                <IconCalendar size={14} color={GOLD} />
                                <span>{schedule}</span>
                            </div>

                            <p style={{
                                color: '#7A6455',
                                fontSize: '14px',
                                lineHeight: 1.7,
                                marginBottom: '20px'
                            }}>{desc}</p>

                            <button
                                onClick={() => scrollTo('#reservation')}
                                style={{
                                    background: 'transparent',
                                    border: `2px solid ${BURGUNDY}`,
                                    color: TEXT_DARK,
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    width: '100%',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`;
                                    e.currentTarget.style.color = CREAM;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = TEXT_DARK;
                                }}
                            >
                                {cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Newsletter signup */}
                <div style={{
                    background: `rgba(184,115,51,0.1)`,
                    border: `1px solid ${GOLD}`,
                    borderRadius: '16px',
                    padding: isMobile ? '28px 20px' : '48px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Railway track top */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '6px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                    }} />

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                            border: `2px solid ${GOLD}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <IconMail size={26} color={CREAM} />
                        </div>
                    </div>

                    <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: isMobile ? '1.3rem' : '1.6rem',
                        color: TEXT,
                        marginBottom: '8px'
                    }}>
                        Join The Pantry Car Family
                    </h3>

                    <p style={{
                        color: 'rgba(255,248,240,0.75)',
                        fontSize: isMobile ? '14px' : '15px',
                        marginBottom: '24px',
                        maxWidth: '480px',
                        margin: '0 auto 24px',
                    }}>
                        Get notified about chef's specials, seasonal menus, exclusive offers, and upcoming events  straight to your inbox.
                    </p>

                    {joined ? (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            color: CREAM,
                            fontSize: '18px',
                            fontWeight: '700',
                            padding: '16px',
                            background: 'rgba(39,174,96,0.15)',
                            borderRadius: '10px',
                        }}>
                            <IconCalendar size={22} color={GOLD} />
                            Welcome to The Pantry Car family!
                        </div>
                    ) : (
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            maxWidth: '440px',
                            margin: '0 auto'
                        }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    flex: '1 1 220px',
                                    background: CREAM,
                                    border: '2px solid rgba(212, 175, 55, 0.3)',
                                    color: TEXT_DARK,
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    fontSize: '14px', outline: 'none', minWidth: 0,
                                }}
                                onFocus={(e) => e.target.style.borderColor = GOLD}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                            />
                            <button
                                onClick={() => email && setJoined(true)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                    color: CREAM,
                                    border: `2px solid ${GOLD}`,
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    fontWeight: 700, fontSize: '14px',
                                    cursor: 'pointer',
                                    boxShadow: `0 4px 16px rgba(184,115,51,0.3)`,
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 6px 20px rgba(212,175,55,0.4)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 16px rgba(184,115,51,0.3)`;
                                }}
                            >
                                <IconSend size={16} color={CREAM} /> Subscribe
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
