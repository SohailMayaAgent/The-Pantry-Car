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
} from './Icons';

/* ─── Social icons as tiny inline SVGs ─── */
function SocialIcon({ platform }) {
    const icons = {
        twitter: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
        ),
        facebook: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
            </svg>
        ),
        tiktok: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.19a8.18 8.18 0 0 0 4.78 1.52V6.23a4.85 4.85 0 0 1-1.01-.47z" />
            </svg>
        ),
        instagram: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    };
    return icons[platform] || null;
}

/* ─── Food-themed background line illustrations ─── */
function FoodIllustrations() {
    const items = [
        { path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z", x: '4%', y: '8%', size: 48, rot: -15 },
        { path: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2H1.02z", x: '90%', y: '5%', size: 44, rot: 20 },
        { path: "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z", x: '8%', y: '85%', size: 40, rot: 10 },
        { path: "M12 3C6.5 3 2 6.58 2 11c0 2.42 1.34 4.58 3.42 6.08L4 21l3.75-1.88C9.19 19.67 10.56 20 12 20c5.52 0 10-3.58 10-9S17.52 3 12 3zM8 13H6v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z", x: '88%', y: '82%', size: 46, rot: -10 },
        { path: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z", x: '50%', y: '88%', size: 36, rot: 5 },
    ];
    return (
        <>
            {items.map((item, i) => (
                <div key={i} style={{
                    position: 'absolute', left: item.x, top: item.y,
                    width: item.size, height: item.size,
                    transform: `rotate(${item.rot}deg)`,
                    opacity: 0.18, pointerEvents: 'none',
                }}>
                    <svg viewBox="0 0 24 24" width={item.size} height={item.size}
                        fill="none" stroke="#E55B13" strokeWidth="1.2">
                        <path d={item.path} />
                    </svg>
                </div>
            ))}
        </>
    );
}

const socials = [
    { key: 'twitter' },
    { key: 'facebook' },
    { key: 'tiktok' },
    { key: 'instagram' },
];

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
    const orange = '#E55B13';
    const orangeLight = '#F5924A';
    const cream = '#FFF8EF';
    const textDark = '#1A1209';
    const textMid = '#5C4A38';

    return (
        <>
            {/* ── Promo Popup ── */}
            {showPromo && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(30,14,4,0.65)',
                    zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '16px', backdropFilter: 'blur(6px)',
                }}>
                    <div style={{
                        background: cream, borderRadius: '20px', maxWidth: '420px', width: '100%',
                        padding: isMobile ? '28px 20px' : '40px 32px', textAlign: 'center',
                        position: 'relative', boxShadow: '0 24px 72px rgba(229,91,19,0.25)',
                        animation: 'scale-in 0.4s ease forwards',
                        border: '1.5px solid rgba(229,91,19,0.15)',
                    }}>
                        <button onClick={() => setShowPromo(false)} style={{
                            position: 'absolute', top: '14px', right: '16px', background: 'none',
                            border: 'none', color: '#9A8478', fontSize: '26px', cursor: 'pointer', lineHeight: 1,
                        }}>×</button>
                        <div style={{
                            fontSize: '48px', marginBottom: '8px',
                        }}>🍖</div>
                        <div style={{
                            display: 'inline-block', background: `linear-gradient(135deg, ${orange}, ${orangeLight})`,
                            color: '#fff', fontSize: '11px', fontWeight: 800, letterSpacing: '3px',
                            textTransform: 'uppercase', padding: '5px 16px', borderRadius: '40px', marginBottom: '14px',
                        }}>
                            First Visit Offer
                        </div>
                        <h3 style={{
                            fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', fontWeight: 800,
                            color: textDark, marginBottom: '10px', lineHeight: 1.2,
                        }}>
                            10% Off Your First Order!
                        </h3>
                        <p style={{ color: textMid, fontSize: '14px', lineHeight: 1.7, marginBottom: '22px' }}>
                            Mention this offer when reserving your table. Valid for dine-in only. First order of the day.
                        </p>
                        <button
                            onClick={() => { setShowPromo(false); scrollTo('#reservation'); }}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '10px',
                                background: `linear-gradient(135deg, ${orange}, ${orangeLight})`,
                                color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none',
                                cursor: 'pointer', boxShadow: `0 6px 20px rgba(229,91,19,0.35)`,
                            }}
                        >
                            Reserve a Table →
                        </button>
                    </div>
                </div>
            )}

            {/* ── Hero Wrapper: Warm Gradient Background ── */}
            <section
                id="hero"
                style={{
                    background: `linear-gradient(135deg, ${orange} 0%, #F07536 35%, #F5A05A 100%)`,
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
                {/* Subtle food line illustration background */}
                <FoodIllustrations />

                {/* ── White Card ── */}
                <div style={{
                    background: cream,
                    borderRadius: isMobile ? '20px' : '28px',
                    maxWidth: '1200px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 32px 100px rgba(90,40,5,0.22), 0 8px 32px rgba(229,91,19,0.12)',
                    padding: isMobile ? '0 0 28px' : isTablet ? '0 0 36px' : '0',
                }}>

                    {/* ── Mini Navbar inside card ── */}
                    <nav style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: isMobile ? '18px 18px 12px' : '20px 36px',
                        borderBottom: '1px solid rgba(229,91,19,0.08)',
                    }}>
                        {/* Logo */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '10px',
                                background: `linear-gradient(135deg, ${orange}, ${orangeLight})`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: `0 4px 12px rgba(229,91,19,0.3)`,
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                                    <circle cx="12" cy="12" r="3" fill="#fff" stroke="none" />
                                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: 'Playfair Display, serif', fontWeight: 800,
                                    fontSize: isMobile ? '13px' : '15px', color: textDark, lineHeight: 1.1,
                                }}>
                                    The Pantry Car
                                </div>
                                <div style={{ fontSize: '9px', color: orange, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                                    Restaurant & Bar
                                </div>
                            </div>
                        </div>

                        {/* Center Nav  desktop only */}
                        {isDesktop && (
                            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                                {[['About Us', '#about'], ['Menu', '#menu'], ['Reviews', '#reviews'], ['Contact', '#contact']].map(([label, href]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                                        style={{
                                            color: textMid, fontWeight: 600, fontSize: '14px',
                                            textDecoration: 'none', transition: 'color 0.2s',
                                            letterSpacing: '0.2px',
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = orange}
                                        onMouseLeave={(e) => e.target.style.color = textMid}
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Cart button / Reserve CTA */}
                        <button
                            onClick={() => scrollTo('#reservation')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '7px',
                                background: `linear-gradient(135deg, ${orange}, ${orangeLight})`,
                                color: '#fff', border: 'none', borderRadius: '40px',
                                padding: isMobile ? '9px 16px' : '10px 22px',
                                fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                                boxShadow: `0 4px 16px rgba(229,91,19,0.35)`,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px rgba(229,91,19,0.45)`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 16px rgba(229,91,19,0.35)`; }}
                        >
                            <IconCalendar size={15} color="#fff" />
                            {!isMobile && 'Reserve Table'}
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
                            {/* Subtitle pill */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: `rgba(229,91,19,0.1)`, border: `1px solid rgba(229,91,19,0.25)`,
                                borderRadius: '40px', padding: '5px 14px', marginBottom: '18px',
                                width: 'fit-content',
                            }}>
                                <IconStar size={12} color={orange} />
                                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: orange, textTransform: 'uppercase' }}>
                                    4.8★ Rated in Sector 78 Noida
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? 'clamp(2rem, 8vw, 2.6rem)' : 'clamp(2.4rem, 3.5vw, 3.2rem)',
                                fontWeight: 900, color: textDark,
                                lineHeight: 1.15, marginBottom: '16px',
                                letterSpacing: '-0.5px',
                            }}>
                                Taste the Tradition,{' '}
                                <span style={{
                                    background: `linear-gradient(135deg, ${orange} 0%, ${orangeLight} 100%)`,
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Served Fresh Daily
                                </span>
                            </h1>

                            {/* Subtext */}
                            <p style={{
                                color: textMid, fontSize: isMobile ? '14px' : '15px',
                                lineHeight: 1.75, marginBottom: '28px',
                                maxWidth: '420px',
                            }}>
                                Where authentic taste meets modern dining  experience freshness, tradition, and a touch of luxury in every meal at Mahagun Mart, Sector 78.
                            </p>

                            {/* CTA Buttons */}
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                <button
                                    onClick={() => scrollTo('#reservation')}
                                    style={{
                                        padding: '14px 28px', borderRadius: '10px',
                                        background: `linear-gradient(135deg, ${orange} 0%, ${orangeLight} 100%)`,
                                        color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none',
                                        cursor: 'pointer', boxShadow: `0 8px 24px rgba(229,91,19,0.4)`,
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 14px 36px rgba(229,91,19,0.5)`; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 8px 24px rgba(229,91,19,0.4)`; }}
                                >
                                    Reserve a Table
                                </button>
                                <button
                                    onClick={() => scrollTo('#menu')}
                                    style={{
                                        padding: '13px 28px', borderRadius: '10px',
                                        background: 'transparent',
                                        color: orange, fontWeight: 700, fontSize: '15px',
                                        border: `2px solid ${orange}`,
                                        cursor: 'pointer', transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = orange; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = orange; }}
                                >
                                    View Menu
                                </button>
                            </div>

                            {/* Social Icons + Phone */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    {socials.map(({ key }) => (
                                        <a
                                            key={key}
                                            href={key === 'instagram' ? 'https://www.instagram.com/thepantrycarofficial/' : '#'}
                                            target={key === 'instagram' ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '34px', height: '34px', borderRadius: '50%',
                                                border: '1.5px solid rgba(229,91,19,0.3)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: orange, textDecoration: 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = orange; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = orange; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = orange; e.currentTarget.style.borderColor = 'rgba(229,91,19,0.3)'; }}
                                        >
                                            <SocialIcon platform={key} />
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href="tel:+919958055600"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        color: textMid, textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = orange}
                                    onMouseLeave={(e) => e.currentTarget.style.color = textMid}
                                >
                                    <IconPhone size={14} color={orange} />
                                    +91 99580 55600
                                </a>
                            </div>
                        </div>

                        {/* ── RIGHT: Circular Food Image + Category Pills ── */}
                        {(isDesktop || isTablet) && (
                            <div style={{
                                position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: isDesktop ? '40px 64px 40px 20px' : '32px 48px 32px 20px',
                                order: isMobile ? 1 : 2,
                                minHeight: '420px',
                            }}>
                                {/* Outer halo ring */}
                                <div style={{
                                    position: 'absolute',
                                    width: isDesktop ? '420px' : '340px',
                                    height: isDesktop ? '420px' : '340px',
                                    borderRadius: '50%',
                                    border: `1.5px dashed rgba(229,91,19,0.35)`,
                                    top: '50%', left: '50%',
                                    transform: 'translate(-60%, -50%)',
                                    animation: 'gentle-pulse 6s ease-in-out infinite',
                                }} />
                                {/* Orbit dots */}
                                {[0, 60, 120, 180, 240, 300].map((deg) => {
                                    const r = isDesktop ? 210 : 170;
                                    const x = Math.cos((deg * Math.PI) / 180) * r;
                                    const y = Math.sin((deg * Math.PI) / 180) * r;
                                    return (
                                        <div key={deg} style={{
                                            position: 'absolute',
                                            width: deg % 120 === 0 ? '10px' : '6px',
                                            height: deg % 120 === 0 ? '10px' : '6px',
                                            borderRadius: '50%',
                                            background: deg % 120 === 0 ? orange : 'rgba(229,91,19,0.4)',
                                            top: '50%', left: '50%',
                                            transform: `translate(calc(-60% + ${x}px), calc(-50% + ${y}px))`,
                                        }} />
                                    );
                                })}

                                {/* Circular food image */}
                                <div style={{
                                    width: isDesktop ? '340px' : '280px',
                                    height: isDesktop ? '340px' : '280px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `5px solid #fff`,
                                    boxShadow: `0 24px 64px rgba(229,91,19,0.25), 0 8px 24px rgba(90,40,5,0.15)`,
                                    position: 'relative', zIndex: 2,
                                    flexShrink: 0,
                                }}>
                                    <img
                                        src="/hero_bbq.webp"
                                        alt="The Pantry Car signature dish"
                                        fetchpriority="high"
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
                                        { icon: <IconCutlery size={14} color={orange} />, label: 'Dishes' },
                                        { icon: <IconCoffee size={14} color={orange} />, label: 'Dessert' },
                                        { icon: <IconBeer size={14} color={orange} />, label: 'Drinks' },
                                        { icon: <IconHeart size={14} color={orange} />, label: 'Platter' },
                                    ].map(({ icon, label }) => (
                                        <button
                                            key={label}
                                            onClick={() => scrollTo('#menu')}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '7px',
                                                background: '#fff',
                                                border: '1.5px solid rgba(229,91,19,0.2)',
                                                borderRadius: '40px', padding: '8px 16px',
                                                color: '#3D2B1F', fontWeight: 600, fontSize: '13px',
                                                cursor: 'pointer', whiteSpace: 'nowrap',
                                                boxShadow: '0 4px 14px rgba(229,91,19,0.12)',
                                                transition: 'all 0.22s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = orange;
                                                e.currentTarget.style.color = '#fff';
                                                e.currentTarget.style.borderColor = orange;
                                                e.currentTarget.style.transform = 'translateX(-4px)';
                                                e.currentTarget.style.boxShadow = `0 6px 20px rgba(229,91,19,0.3)`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = '#fff';
                                                e.currentTarget.style.color = '#3D2B1F';
                                                e.currentTarget.style.borderColor = 'rgba(229,91,19,0.2)';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(229,91,19,0.12)';
                                            }}
                                        >
                                            {icon} {label}
                                        </button>
                                    ))}
                                </div>

                                {/* ── Floating Delivery Badge ── */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: isDesktop ? '28px' : '8px',
                                    left: '50%',
                                    transform: 'translateX(-60%)',
                                    background: '#fff',
                                    borderRadius: '14px',
                                    padding: '12px 18px',
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    boxShadow: '0 8px 32px rgba(229,91,19,0.18)',
                                    border: '1.5px solid rgba(229,91,19,0.14)',
                                    zIndex: 10,
                                    animation: 'float 3s ease-in-out infinite',
                                }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '50%',
                                        background: `rgba(229,91,19,0.12)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <IconMapPin size={18} color={orange} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '13px', color: textDark, lineHeight: 1.2 }}>
                                            Fast Delivery
                                        </div>
                                        <div style={{ color: textMid, fontSize: '11px', marginTop: '2px' }}>
                                            Free & easy delivery
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Mobile: full-width image strip */}
                        {isMobile && (
                            <div style={{
                                display: 'flex', justifyContent: 'center', padding: '28px 18px 0',
                                order: 1,
                            }}>
                                <div style={{
                                    width: '240px', height: '240px', borderRadius: '50%',
                                    overflow: 'hidden', border: '4px solid #fff',
                                    boxShadow: `0 16px 48px rgba(229,91,19,0.25)`,
                                }}>
                                    <img
                                        src="/hero_bbq.webp"
                                        alt="The Pantry Car signature dish"
                                        fetchpriority="high"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Stats bar  desktop full width at bottom of card */}
                        {isDesktop && (
                            <div style={{
                                gridColumn: '1 / -1',
                                display: 'flex', alignItems: 'center',
                                borderTop: '1px solid rgba(229,91,19,0.1)',
                                padding: '18px 48px',
                                gap: '0',
                            }}>
                                {[
                                    { icon: <IconStar size={16} color={orange} />, value: '4.8★', label: 'Google Rating' },
                                    { icon: <IconHeart size={16} color={orange} />, value: '40+', label: 'Happy Reviews' },
                                    { icon: <IconClock size={16} color={orange} />, value: '11 AM–11 PM', label: 'Open Daily' },
                                    { icon: <IconTruck size={16} color={orange} />, value: 'Dine · Take · Deliver', label: 'All Services' },
                                ].map((stat, i, arr) => (
                                    <div key={stat.label} style={{
                                        flex: 1, display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0 24px 0 0',
                                        borderRight: i < arr.length - 1 ? '1px solid rgba(229,91,19,0.15)' : 'none',
                                        paddingRight: i < arr.length - 1 ? '24px' : '0',
                                        marginRight: i < arr.length - 1 ? '24px' : '0',
                                    }}>
                                        <div style={{
                                            width: '38px', height: '38px', borderRadius: '10px',
                                            background: 'rgba(229,91,19,0.1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: '15px', color: textDark }}>{stat.value}</div>
                                            <div style={{ color: textMid, fontSize: '11px', letterSpacing: '0.3px' }}>{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
