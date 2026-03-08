import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {
    IconCalendar,
    IconHeart,
    IconMapPin,
    IconStar,
    IconTruck,
    IconCoffee,
    IconCutlery,
    IconBeer,
    IconPhone,
    IconClock,
    IconTrain,
} from './Icons';

/* ─── Social icons as tiny inline SVGs ─── */
function SocialIcon({ platform }) {
    const icons = {
        instagram: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        facebook: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
            </svg>
        ),
    };
    return icons[platform] || null;
}

/* ─── Railway train decoration ─── */
function TrainDecoration({ position, rotate }) {
    return (
        <div style={{
            position: 'absolute',
            left: position,
            bottom: '-20px',
            transform: rotate,
            opacity: 0.15,
            pointerEvents: 'none',
        }}>
            <svg width="60" height="30" viewBox="0 0 120 60" fill="none" stroke="#D4AF37" strokeWidth="2">
                {/* Train body */}
                <rect x="10" y="20" width="100" height="30" rx="5" fill="rgba(184,115,51,0.1)" />
                {/* Cabin */}
                <rect x="15" y="25" width="40" height="20" rx="2" />
                {/* Windows */}
                <rect x="20" y="28" width="12" height="10" rx="1" />
                <rect x="36" y="28" width="12" height="10" rx="1" />
                {/* Chimney/stack */}
                <rect x="90" y="10" width="15" height="12" rx="2" />
                {/* Wheels */}
                <circle cx="25" cy="55" r="8" />
                <circle cx="50" cy="55" r="8" />
                <circle cx="95" cy="55" r="8" />
            </svg>
        </div>
    );
}

/* ─── Railway track pattern background ─── */
function RailwayPattern() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
                linear-gradient(90deg, transparent 48%, rgba(184, 115, 51, 0.05) 48%, rgba(184, 115, 51, 0.05) 52%, transparent 52%)
            `,
            backgroundSize: '60px 20px',
            pointerEvents: 'none',
        }} />
    );
}

/* ─── Lantern glow decoration ─── */
function LanternGlow() {
    return (
        <div style={{
            position: 'absolute',
            right: '10%',
            top: '20%',
            fontSize: '80px',
            opacity: 0.1,
            filter: 'blur(2px)',
            pointerEvents: 'none',
        }}>
            🏮
        </div>
    );
}

const socials = [
    { key: 'facebook' },
    { key: 'instagram' },
];

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';
const BG_DARK = '#1A1209';

export default function HeroSection() {
    const [showPromo, setShowPromo] = useState(false);
    const { isMobile, isTablet } = useWindowSize();

    useEffect(() => {
        const timer = setTimeout(() => setShowPromo(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const isDesktop = !isMobile && !isTablet;

    return (
        <>
            {/* ── Promo Popup ── */}
            {showPromo && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(26,18,9,0.75)',
                    zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '16px', backdropFilter: 'blur(6px)',
                }}>
                    <div style={{
                        background: CREAM, borderRadius: '20px', maxWidth: '420px', width: '100%',
                        padding: isMobile ? '28px 20px' : '40px 32px', textAlign: 'center',
                        position: 'relative', boxShadow: '0 24px 72px rgba(184,115,51,0.3)',
                        animation: 'scale-in 0.4s ease forwards',
                        border: `2px solid ${GOLD}`,
                    }}>
                        <button onClick={() => setShowPromo(false)} style={{
                            position: 'absolute', top: '14px', right: '16px', background: 'none',
                            border: 'none', color: '#9A8478', fontSize: '26px', cursor: 'pointer', lineHeight: 1,
                        }}>×</button>
                        <div style={{ fontSize: '48px', marginBottom: '8px' }}>🚂</div>
                        <div style={{
                            display: 'inline-block',
                            background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                            color: '#fff', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
                            textTransform: 'uppercase', padding: '5px 16px', borderRadius: '40px', marginBottom: '14px',
                        }}>
                            First Visit Offer
                        </div>
                        <h3 style={{
                            fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', fontWeight: 800,
                            color: TEXT_DARK, marginBottom: '10px', lineHeight: 1.2,
                        }}>
                            10% Off Your First Order!
                        </h3>
                        <p style={{ color: '#7A6455', fontSize: '14px', lineHeight: 1.7, marginBottom: '22px' }}>
                            Mention this offer when reserving your table. Valid for dine-in only.
                        </p>
                        <button
                            onClick={() => { setShowPromo(false); scrollTo('#reservation'); }}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '10px',
                                background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none',
                                cursor: 'pointer', boxShadow: `0 6px 20px rgba(128,0,32,0.4)`,
                            }}
                        >
                            Reserve a Table →
                        </button>
                    </div>
                </div>
            )}

            {/* ── Hero Wrapper: Railway-Themed Background ── */}
            <section
                id="hero"
                style={{
                    background: `linear-gradient(135deg, ${BG_DARK} 0%, #2A2018 40%, ${BURGUNDY} 100%)`,
                    minHeight: '100vh',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '16px' : '28px 24px',
                }}
            >
                {/* Railway pattern background */}
                <RailwayPattern />
                <LanternGlow />

                {/* Moving train decoration */}
                <TrainDecoration position="-80px" rotate="rotate(5deg)" />

                {/* ── Railway Coach Card ── */}
                <div style={{
                    background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                    borderRadius: isMobile ? '20px' : '24px',
                    maxWidth: '1200px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 32px 100px rgba(42,29,20,0.4), 0 8px 32px rgba(184,115,51,0.2)`,
                    padding: isMobile ? '0 0 28px' : isTablet ? '0 0 36px' : '0',
                    border: `3px solid ${COPPER}`,
                }}>

                    {/* Top railway track decoration */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                    }} />

                    {/* ── Mini Navbar inside card ── */}
                    <nav style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: isMobile ? '18px 18px 12px' : '20px 36px',
                        borderBottom: `1px dashed ${COPPER}`,
                        position: 'relative',
                    }}>
                        {/* Logo */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '42px', height: '42px', borderRadius: '12px',
                                background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: `0 4px 12px rgba(184,115,51,0.4)`,
                                border: `2px solid ${GOLD}`,
                                color: CREAM,
                                fontSize: '20px',
                            }}>
                                🚂
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: 'Playfair Display, serif', fontWeight: 800,
                                    fontSize: isMobile ? '14px' : '16px', color: TEXT_DARK, lineHeight: 1.1,
                                }}>
                                    The Pantry Car
                                </div>
                                <div style={{
                                    fontSize: '10px', color: BURGUNDY, letterSpacing: '1.5px',
                                    textTransform: 'uppercase', fontWeight: 700,
                                }}>
                                    थे पैंट्री कार
                                </div>
                                <div style={{
                                    fontSize: '9px', color: COPPER, letterSpacing: '1px',
                                    textTransform: 'uppercase', fontWeight: 600, marginTop: '2px',
                                }}>
                                    Journey Through Flavors
                                </div>
                            </div>
                        </div>

                        {/* Center Nav - desktop only */}
                        {isDesktop && (
                            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                                {[
                                    ['About Us', '#about', 'हमारे बारे में'],
                                    ['Menu', '#menu', 'मेनू'],
                                    ['Reviews', '#reviews', 'समीक्षा'],
                                    ['Contact', '#contact', 'संपर्क'],
                                ].map(([label, href, hindi]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                                        style={{
                                            color: '#7A6455', fontWeight: 600, fontSize: '14px',
                                            textDecoration: 'none', transition: 'color 0.2s',
                                            letterSpacing: '0.2px', textAlign: 'center',
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = BURGUNDY}
                                        onMouseLeave={(e) => e.target.style.color = '#7A6455'}
                                    >
                                        <div>{label}</div>
                                        <div style={{ fontSize: '10px', opacity: 0.7 }}>{hindi}</div>
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Reserve CTA */}
                        <button
                            onClick={() => scrollTo('#reservation')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                color: '#fff', border: `2px solid ${GOLD}`, borderRadius: '40px',
                                padding: isMobile ? '10px 18px' : '11px 24px',
                                fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                                boxShadow: `0 4px 16px rgba(184,115,51,0.4)`,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 20px rgba(212,175,55,0.4)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 16px rgba(184,115,51,0.4)`;
                            }}
                        >
                            <IconCalendar size={16} color="#fff" />
                            {!isMobile && 'Reserve / बुक करें'}
                        </button>
                    </nav>

                    {/* ── Hero Body: Split Layout ── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                        gap: 0,
                        minHeight: isDesktop ? '540px' : 'auto',
                        position: 'relative',
                    }}>
                        {/* ── LEFT: Text Content ── */}
                        <div style={{
                            padding: isMobile ? '28px 18px 20px' : isTablet ? '36px 32px' : '52px 48px 52px 48px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            order: isMobile ? 2 : 1,
                        }}>
                            {/* Rating badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(184,115,51,0.1))`,
                                border: `1px solid ${GOLD}`,
                                borderRadius: '40px', padding: '5px 14px', marginBottom: '18px',
                                width: 'fit-content',
                            }}>
                                <IconStar size={12} color={GOLD} />
                                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: BURGUNDY, textTransform: 'uppercase' }}>
                                    4.8★ Rated • 43+ Reviews
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? 'clamp(2rem, 8vw, 2.6rem)' : 'clamp(2.4rem, 3.5vw, 3.2rem)',
                                fontWeight: 900, color: TEXT_DARK,
                                lineHeight: 1.15, marginBottom: '16px',
                                letterSpacing: '-0.5px',
                            }}>
                                The Pantry Car{' '}
                                <span style={{
                                    background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Restaurant
                                </span>
                            </h1>

                            {/* Hindi Title */}
                            <h2 style={{
                                fontFamily: 'Noto Sans Devanagari, serif',
                                fontSize: isMobile ? '1.6rem' : '2rem',
                                fontWeight: 700,
                                color: COPPER,
                                marginBottom: '8px',
                                lineHeight: 1.2,
                            }}>
                                थे पैंट्री कार
                            </h2>

                            {/* Tagline */}
                            <p style={{
                                color: '#7A6455', fontSize: isMobile ? '14px' : '16px',
                                lineHeight: 1.75, marginBottom: '20px',
                                fontStyle: 'italic',
                            }}>
                                "स्वाद की यात्रा" - Journey Through Flavors
                            </p>

                            {/* Subtext */}
                            <p style={{
                                color: TEXT_DARK, fontSize: isMobile ? '14px' : '15px',
                                lineHeight: 1.75, marginBottom: '28px',
                                maxWidth: '450px',
                            }}>
                                Railway-themed dining experience in the heart of Noida. Authentic Indian cuisine,
                                warm hospitality, and a unique ambience that takes you on a culinary journey.
                            </p>

                            {/* Women-owned badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(184,115,51,0.1)',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                marginBottom: '28px',
                            }}>
                                <span style={{ fontSize: '20px' }}>👩‍🍳</span>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: BURGUNDY }}>
                                    Women-Owned Business
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                <button
                                    onClick={() => scrollTo('#reservation')}
                                    style={{
                                        padding: '14px 28px', borderRadius: '10px',
                                        background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                        color: '#fff', fontWeight: 700, fontSize: '15px',
                                        border: `2px solid ${GOLD}`,
                                        cursor: 'pointer', boxShadow: `0 8px 24px rgba(128,0,32,0.4)`,
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = `0 14px 36px rgba(212,175,55,0.5)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `0 8px 24px rgba(128,0,32,0.4)`;
                                    }}
                                >
                                    Reserve a Table
                                </button>
                                <button
                                    onClick={() => scrollTo('#menu')}
                                    style={{
                                        padding: '13px 28px', borderRadius: '10px',
                                        background: 'transparent',
                                        color: BURGUNDY, fontWeight: 700, fontSize: '15px',
                                        border: `2px solid ${BURGUNDY}`,
                                        cursor: 'pointer', transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = BURGUNDY;
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = BURGUNDY;
                                    }}
                                >
                                    View Menu
                                </button>
                            </div>

                            {/* Social Icons + Phone */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    {socials.map(({ key }) => (
                                        <a
                                            key={key}
                                            href={key === 'instagram' ? 'https://www.instagram.com/thepantrycarofficial/' : '#'}
                                            target={key === 'instagram' ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '36px', height: '36px', borderRadius: '50%',
                                                border: '1.5px solid rgba(184,115,51,0.3)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: BURGUNDY, textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = BURGUNDY;
                                                e.currentTarget.style.color = '#fff';
                                                e.currentTarget.style.borderColor = BURGUNDY;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = BURGUNDY;
                                                e.currentTarget.style.borderColor = 'rgba(184,115,51,0.3)';
                                            }}
                                        >
                                            <SocialIcon platform={key} />
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href="tel:+919958055600"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        color: '#7A6455', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = BURGUNDY}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#7A6455'}
                                >
                                    <IconPhone size={15} color={BURGUNDY} />
                                    +91 99580 55600
                                </a>
                            </div>
                        </div>

                        {/* ── RIGHT: Railwwy-themed visual ── */}
                        {(isDesktop || isTablet) && (
                            <div style={{
                                position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: isDesktop ? '40px 64px 40px 20px' : '32px 48px 32px 20px',
                                order: isMobile ? 1 : 2,
                                minHeight: '420px',
                            }}>
                                {/* Railway wheel decoration */}
                                <div style={{
                                    position: 'absolute',
                                    width: isDesktop ? '420px' : '340px',
                                    height: '420px',
                                    borderRadius: '50%',
                                    border: `3px dashed ${GOLD}`,
                                    top: '50%', left: '50%',
                                    transform: 'translate(-60%, -50%)',
                                    animation: 'gentle-pulse 8s ease-in-out infinite',
                                    opacity: 0.4,
                                }}>
                                    {/* Spokes */}
                                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                                        <div key={deg} style={{
                                            position: 'absolute',
                                            top: '50%', left: '50%',
                                            width: '2px',
                                            height: '210px',
                                            background: GOLD,
                                            transformOrigin: 'bottom center',
                                            transform: `translate(-50%, -100%) rotate(${deg}deg)`,
                                        }} />
                                    ))}
                                </div>

                                {/* Circular food image */}
                                <div style={{
                                    width: isDesktop ? '340px' : '280px',
                                    height: isDesktop ? '340px' : '280px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `5px solid ${GOLD}`,
                                    boxShadow: `0 24px 64px rgba(184,115,51,0.3), 0 8px 24px rgba(42,29,20,0.2)`,
                                    position: 'relative', zIndex: 2,
                                    flexShrink: 0,
                                }}>
                                    <img
                                        src="/hero_bbq.webp"
                                        alt="The Pantry Car signature dish"
                                        fetchPriority="high"
                                        style={{
                                            width: '100%', height: '100%',
                                            objectFit: 'cover', objectPosition: 'center',
                                            display: 'block',
                                        }}
                                    />
                                </div>

                                {/* ── Category Floating Pills ── */}
                                <div style={{
                                    position: 'absolute',
                                    right: isDesktop ? '8px' : '-6px',
                                    top: '50%', transform: 'translateY(-50%)',
                                    display: 'flex', flexDirection: 'column', gap: '10px',
                                    zIndex: 10,
                                }}>
                                    {[
                                        { icon: <IconTrain size={14} color={BURGUNDY} />, label: 'Railway Theme' },
                                        { icon: <IconCutlery size={14} color={BURGUNDY} />, label: 'Indian Cuisine' },
                                        { icon: <IconCoffee size={14} color={BURGUNDY} />, label: 'Beverages' },
                                        { icon: <IconHeart size={14} color={BURGUNDY} />, label: 'Chef\'s Special' },
                                    ].map(({ icon, label }) => (
                                        <button
                                            key={label}
                                            onClick={() => scrollTo('#menu')}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                background: CREAM,
                                                border: `1.5px solid ${COPPER}`,
                                                borderRadius: '40px', padding: '8px 16px',
                                                color: TEXT_DARK, fontWeight: 600, fontSize: '13px',
                                                cursor: 'pointer', whiteSpace: 'nowrap',
                                                boxShadow: '0 4px 14px rgba(184,115,51,0.15)',
                                                transition: 'all 0.22s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = BURGUNDY;
                                                e.currentTarget.style.color = CREAM;
                                                e.currentTarget.style.borderColor = GOLD;
                                                e.currentTarget.style.transform = 'translateX(-4px)';
                                                e.currentTarget.style.boxShadow = `0 6px 20px rgba(212,175,55,0.3)`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = CREAM;
                                                e.currentTarget.style.color = TEXT_DARK;
                                                e.currentTarget.style.borderColor = COPPER;
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(184,115,51,0.15)';
                                            }}
                                        >
                                            {icon} {label}
                                        </button>
                                    ))}
                                </div>

                                {/* ── Location Badge ── */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: isDesktop ? '28px' : '8px',
                                    left: '50%',
                                    transform: 'translateX(-60%)',
                                    background: CREAM,
                                    borderRadius: '14px',
                                    padding: '12px 18px',
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    boxShadow: '0 8px 32px rgba(184,115,51,0.2)',
                                    border: `2px solid ${GOLD}`,
                                    zIndex: 10,
                                    animation: 'float 3s ease-in-out infinite',
                                }}>
                                    <div style={{
                                        width: '38px', height: '38px', borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                        border: `2px solid ${GOLD}`,
                                    }}>
                                        <IconMapPin size={18} color={CREAM} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '13px', color: TEXT_DARK, lineHeight: 1.2 }}>
                                            Sector 78, Noida
                                        </div>
                                        <div style={{ color: '#7A6455', fontSize: '11px', marginTop: '2px' }}>
                                            Mahagun Mart, 2nd Floor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mobile: full-width image */}
                        {isMobile && (
                            <div style={{
                                display: 'flex', justifyContent: 'center', padding: '28px 18px 0',
                                order: 1,
                            }}>
                                <div style={{
                                    width: '240px', height: '240px', borderRadius: '50%',
                                    overflow: 'hidden', border: `4px solid ${GOLD}`,
                                    boxShadow: `0 16px 48px rgba(184,115,51,0.3)`,
                                }}>
                                    <img
                                        src="/hero_bbq.webp"
                                        alt="The Pantry Car signature dish"
                                        fetchPriority="high"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Stats bar - desktop full width at bottom of card */}
                        {isDesktop && (
                            <div style={{
                                gridColumn: '1 / -1',
                                display: 'flex', alignItems: 'center',
                                borderTop: `2px dashed ${COPPER}`,
                                padding: '18px 48px',
                                background: `linear-gradient(90deg, rgba(184,115,51,0.05), transparent 50%, rgba(184,115,51,0.05))`,
                            }}>
                                {[
                                    { icon: <IconStar size={16} color={GOLD} />, value: '4.8★', label: 'Google Rating' },
                                    { icon: <IconHeart size={16} color={BURGUNDY} />, value: '43+', label: 'Reviews' },
                                    { icon: <IconClock size={16} color={COPPER} />, value: '11 AM–11 PM', label: 'Open Daily' },
                                    { icon: <IconTruck size={16} color={BURGUNDY} />, value: 'All Services', label: 'Dine · Take · Deliver' },
                                ].map((stat, i, arr) => (
                                    <div key={stat.label} style={{
                                        flex: 1, display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0 24px 0 0',
                                        borderRight: i < arr.length - 1 ? `1px solid ${COPPER}` : 'none',
                                        paddingRight: i < arr.length - 1 ? '24px' : '0',
                                        marginRight: i < arr.length - 1 ? '24px' : '0',
                                    }}>
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '12px',
                                            background: `linear-gradient(135deg, rgba(184,115,51,0.15), rgba(212,175,55,0.1))`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                            border: `1px solid rgba(212,175,55,0.3)`,
                                        }}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '15px', color: TEXT_DARK }}>{stat.value}</div>
                                            <div style={{ color: '#7A6455', fontSize: '11px', letterSpacing: '0.3px' }}>{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Bottom railway track decoration */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '8px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                    }} />
                </div>
            </section>
        </>
    );
}
