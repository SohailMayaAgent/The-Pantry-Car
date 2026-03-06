import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconTrain, IconCalendar, IconStar, IconHeart, IconClock, IconTruck } from './Icons';

export default function HeroSection() {
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [showPromo, setShowPromo] = useState(false);
    const { isMobile, isTablet } = useWindowSize();

    useEffect(() => {
        const timer = setTimeout(() => setShowPromo(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const features = [
        { icon: <IconStar size={13} color="#B8860B" />, label: '4.8★ Rated' },
        { icon: <IconHeart size={13} color="#B8860B" />, label: 'Women-Owned' },
        { icon: <IconCalendar size={13} color="#B8860B" />, label: 'Dine-in' },
        { icon: <IconTruck size={13} color="#B8860B" />, label: 'Takeaway' },
        { icon: <IconTruck size={13} color="#B8860B" />, label: 'Delivery' },
    ];

    const stats = [
        { value: '4.8★', label: 'Google Rating' },
        { value: '40+', label: 'Happy Reviews' },
        { value: 'Till 11 PM', label: 'Open Daily' },
        { value: 'Est. 2024', label: 'Rebranded' },
    ];

    return (
        <>
            {/* First Visit Offer Popup */}
            {showPromo && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(61,43,31,0.7)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
                    backdropFilter: 'blur(6px)',
                }}>
                    <div style={{
                        background: '#FFFDF9', border: '1px solid rgba(107,66,38,0.2)', borderRadius: '16px',
                        maxWidth: '440px', width: '100%', padding: isMobile ? '28px 20px' : '40px 32px',
                        textAlign: 'center', position: 'relative', boxShadow: '0 20px 60px rgba(74,46,24,0.25)',
                        animation: 'scale-in 0.4s ease forwards',
                    }}>
                        <button onClick={() => setShowPromo(false)} style={{
                            position: 'absolute', top: '14px', right: '16px',
                            background: 'none', border: 'none', color: '#9A8478', fontSize: '26px', cursor: 'pointer', lineHeight: 1,
                        }}>×</button>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                            <div style={{
                                width: isMobile ? '52px' : '64px', height: isMobile ? '52px' : '64px',
                                borderRadius: '50%', background: 'rgba(107,66,38,0.08)', border: '2px solid rgba(107,66,38,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <IconTrain size={isMobile ? 28 : 34} color="#6B4226" />
                            </div>
                        </div>
                        <div style={{ color: '#B8860B', fontSize: '11px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Welcome Offer</div>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '22px' : '28px', color: '#3D2B1F', marginBottom: '10px' }}>10% Off Your First Visit</h3>
                        <p style={{ color: '#7A6455', fontSize: isMobile ? '14px' : '15px', marginBottom: '8px' }}>
                            Experience The Pantry Car with a special welcome discount
                        </p>
                        <p style={{ color: '#9A8478', fontSize: '13px', marginBottom: '24px' }}>
                            Reserve a table and mention this offer
                        </p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn-primary" onClick={() => { setShowPromo(false); scrollTo('#reservation'); }}>
                                <span>Reserve Now</span>
                            </button>
                            <button className="btn-outline" onClick={() => { setShowPromo(false); scrollTo('#menu'); }} style={{ fontSize: '14px', padding: '12px 20px' }}>
                                <span>Browse Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero */}
            <section id="home" ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/hero_bbq.png)', backgroundSize: 'cover', backgroundPosition: 'center',
                    transform: isMobile ? 'none' : `translateY(${scrollY * 0.3}px)`, willChange: 'transform',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(61,43,31,0.92) 0%, rgba(74,46,24,0.7) 50%, rgba(61,43,31,0.88) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(184,134,11,0.08), transparent 60%)' }} />

                <div style={{
                    maxWidth: '1280px', margin: '0 auto',
                    padding: isMobile ? '0 16px' : '0 24px',
                    position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '40px', width: '100%',
                }}>
                    <div style={{ maxWidth: isMobile ? '100%' : '780px' }}>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(255,248,240,0.12)', border: '1px solid rgba(255,248,240,0.2)',
                            borderRadius: '40px', padding: isMobile ? '6px 14px' : '8px 20px', marginBottom: '20px',
                            animation: 'fade-in 1s ease forwards',
                        }}>
                            <IconTrain size={16} color="#D4A039" />
                            <span style={{ color: '#F5E6D3', fontSize: isMobile ? '11px' : '13px', fontWeight: 500, letterSpacing: '0.5px' }}>
                                Women-Owned Restaurant & Bar · Sector 78, Noida
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: isMobile ? '2.2rem' : isTablet ? '3rem' : '4.2rem',
                            fontWeight: 800, color: '#FFFDF9', lineHeight: 1.1, marginBottom: '16px',
                            animation: 'fade-in-up 1s ease 0.2s both',
                        }}>
                            A Fresh Journey of{' '}
                            <span style={{ background: 'linear-gradient(135deg, #D4A039, #B8860B, #D4A039)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Flavors
                            </span>
                            {' '}Begins Here.
                        </h1>

                        <p style={{ color: '#E8D5C0', fontSize: isMobile ? '14px' : '17px', marginBottom: '14px', fontWeight: 300, animation: 'fade-in-up 1s ease 0.4s both' }}>
                            Sector 78, Noida · Dine-in · Takeaway · Delivery
                        </p>

                        {/* Feature Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px', animation: 'fade-in-up 1s ease 0.5s both' }}>
                            {features.map((f) => (
                                <span key={f.label} style={{
                                    background: 'rgba(255,248,240,0.1)', border: '1px solid rgba(255,248,240,0.18)',
                                    color: '#F5E6D3', padding: isMobile ? '5px 12px' : '6px 14px', borderRadius: '40px',
                                    fontSize: isMobile ? '12px' : '13px', fontWeight: 500,
                                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                                }}>
                                    {f.icon}{f.label}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', animation: 'fade-in-up 1s ease 0.7s both' }}>
                            <a href="#reservation" onClick={(e) => { e.preventDefault(); scrollTo('#reservation'); }}
                                className="btn-primary" style={{ fontSize: isMobile ? '14px' : '15px', flex: isMobile ? '1 1 auto' : 'none', justifyContent: 'center', gap: '10px' }}>
                                <IconCalendar size={18} color="#FFF8F0" />
                                <span>Reserve a Table</span>
                            </a>
                            <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}
                                style={{
                                    background: 'transparent', color: '#F5E6D3',
                                    padding: isMobile ? '13px 24px' : '13px 32px', borderRadius: '8px',
                                    fontWeight: 600, fontSize: isMobile ? '14px' : '15px',
                                    border: '2px solid rgba(245,230,211,0.4)', cursor: 'pointer',
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    textDecoration: 'none', transition: 'all 0.3s ease',
                                    flex: isMobile ? '1 1 auto' : 'none', justifyContent: 'center',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,248,240,0.12)'; e.currentTarget.style.borderColor = 'rgba(245,230,211,0.6)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,230,211,0.4)'; }}
                            >
                                <span>View Menu</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, auto)',
                            gap: isMobile ? '16px' : '40px', marginTop: isMobile ? '40px' : '56px',
                            animation: 'fade-in-up 1s ease 0.9s both',
                        }}>
                            {stats.map((stat) => (
                                <div key={stat.label} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                    <div style={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontSize: isMobile ? '24px' : '30px', fontWeight: 700,
                                        color: '#D4A039',
                                    }}>{stat.value}</div>
                                    <div style={{ color: '#B0A090', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(0deg, #FFF8F0 0%, transparent 100%)' }} />

                {!isMobile && (
                    <div style={{
                        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                        animation: 'gentle-pulse 2.5s infinite', cursor: 'pointer',
                    }} onClick={() => scrollTo('#about')}>
                        <span style={{ color: '#B0A090', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
                        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(180deg, #6B4226, transparent)' }} />
                    </div>
                )}
            </section>
        </>
    );
}
