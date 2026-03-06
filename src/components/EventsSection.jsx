import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconCoffee, IconCutlery, IconCake, IconCalendar, IconMail, IconSend } from './Icons';

const specials = [
    {
        id: 'ambience',
        Icon: IconCoffee,
        title: 'Cozy Ambience',
        schedule: 'Every Day · 11 AM – 11 PM',
        desc: 'Step into a warm, train-inspired dining space with soft lighting, plush seating, and a welcoming atmosphere perfect for every occasion.',
        cta: 'Reserve a Table',
        color: '#6B4226',
        highlight: false,
    },
    {
        id: 'specials',
        Icon: IconCutlery,
        title: "Chef's Specials",
        schedule: 'Daily Rotating Menu',
        desc: "Our chef curates seasonal specials and signature dishes crafted with fresh local ingredients. Ask your server about today's highlights.",
        cta: 'View Our Menu',
        color: '#B8860B',
        highlight: true,
    },
    {
        id: 'private',
        Icon: IconCake,
        title: 'Private Events',
        schedule: 'Any Day · Advance Booking',
        desc: 'Celebrate birthdays, anniversaries, corporate gatherings, or intimate dinners in our private dining area. We handle the setup, you enjoy the moment.',
        cta: 'Plan Your Event',
        color: '#6B4226',
        highlight: false,
    },
];

export default function EventsSection() {
    const [email, setEmail] = useState('');
    const [joined, setJoined] = useState(false);
    const { isMobile, isTablet } = useWindowSize();

    const brown = '#6B4226';
    const beige = '#F5E6D3';
    const copper = '#B8860B';

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="events" style={{ padding: isMobile ? '64px 0' : '100px 0', background: beige, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '10%', right: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,134,11,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,66,38,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div className="section-subtitle">What's Special</div>
                    <h2 className="section-title" style={{ color: brown, fontSize: isMobile ? '1.8rem' : undefined }}>
                        Experience{' '}
                        <span style={{ color: copper }}>The Best</span>
                    </h2>
                    <div className="divider-copper" style={{ width: '60px', margin: '16px auto 20px' }} />
                    <p style={{ color: 'rgba(107,66,38,0.7)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: isMobile ? '14px' : '16px' }}>
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
                            className="card-warm"
                            style={{
                                padding: isMobile ? '24px 20px' : '32px',
                                borderRadius: '12px',
                                borderColor: highlight ? 'rgba(184,134,11,0.35)' : undefined,
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `rgba(107,66,38,0.4)`;
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(107,66,38,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = highlight ? 'rgba(184,134,11,0.35)' : 'rgba(107,66,38,0.15)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {highlight && (
                                <div style={{
                                    position: 'absolute', top: '16px', right: '16px',
                                    background: copper, color: '#FFF8F0',
                                    fontSize: '11px', fontWeight: 700, padding: '3px 10px',
                                    borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px',
                                }}>
                                    Featured
                                </div>
                            )}
                            <div style={{
                                width: '52px', height: '52px', borderRadius: '14px',
                                background: `rgba(107,66,38,0.1)`,
                                border: `1.5px solid rgba(107,66,38,0.2)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                            }}>
                                <Icon size={26} color={color} />
                            </div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.1rem' : '1.3rem', color: brown, marginBottom: '6px' }}>
                                {title}
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: copper, fontSize: '12px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.3px', flexWrap: 'wrap' }}>
                                <IconCalendar size={14} color={copper} />
                                <span>{schedule}</span>
                            </div>
                            <p style={{ color: 'rgba(107,66,38,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                            <button
                                onClick={() => scrollTo('#reservation')}
                                style={{
                                    background: 'rgba(107,66,38,0.08)',
                                    border: '1.5px solid rgba(107,66,38,0.25)',
                                    color: brown,
                                    padding: '10px 20px', borderRadius: '6px',
                                    fontWeight: 600, fontSize: '13px',
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(107,66,38,0.16)'; e.currentTarget.style.borderColor = 'rgba(107,66,38,0.4)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(107,66,38,0.08)'; e.currentTarget.style.borderColor = 'rgba(107,66,38,0.25)'; }}
                            >
                                {cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Newsletter signup */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(107,66,38,0.1), rgba(184,134,11,0.07))',
                    border: '1px solid rgba(107,66,38,0.2)',
                    borderRadius: '12px',
                    padding: isMobile ? '28px 20px' : '48px',
                    textAlign: 'center',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '50%',
                            background: 'rgba(107,66,38,0.1)', border: '1.5px solid rgba(107,66,38,0.25)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <IconMail size={26} color={brown} />
                        </div>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.3rem' : '1.6rem', color: brown, marginBottom: '8px' }}>
                        Join The Pantry Car Family
                    </h3>
                    <p style={{ color: 'rgba(107,66,38,0.65)', fontSize: isMobile ? '14px' : '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
                        Get notified about chef's specials, seasonal menus, exclusive offers, and upcoming events  straight to your inbox.
                    </p>
                    {joined ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: brown, fontSize: '18px', fontWeight: 600 }}>
                            <IconCalendar size={22} color={copper} /> Welcome to The Pantry Car family!
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '440px', margin: '0 auto' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    flex: '1 1 220px',
                                    background: '#fff',
                                    border: '1px solid rgba(107,66,38,0.25)',
                                    color: '#6B4226',
                                    padding: '12px 16px', borderRadius: '6px',
                                    fontSize: '14px', outline: 'none', minWidth: 0,
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#6B4226'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(107,66,38,0.25)'}
                            />
                            <button
                                className="btn-primary"
                                onClick={() => email && setJoined(true)}
                                style={{ gap: '8px' }}
                            >
                                <IconSend size={16} color="#FFF8F0" /> Subscribe
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
