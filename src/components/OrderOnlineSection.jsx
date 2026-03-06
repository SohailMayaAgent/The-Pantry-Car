import useWindowSize from '../hooks/useWindowSize';
import { IconPhone, IconWhatsApp, IconTruck, IconClock } from './Icons';

export default function OrderOnlineSection() {
    const { isMobile } = useWindowSize();

    const brown = '#6B4226';
    const beige = '#F5E6D3';
    const cream = '#FFF8F0';
    const copper = '#B8860B';
    const brownBorder = 'rgba(107,66,38,0.2)';
    const brownTint = 'rgba(107,66,38,0.07)';

    return (
        <section id="order-online" style={{ padding: isMobile ? '64px 0' : '100px 0', background: cream, position: 'relative', overflow: 'hidden' }}>
            {/* Subtle warm ambient */}
            <div style={{ position: 'absolute', top: '10%', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '15%', left: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,66,38,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div className="section-subtitle">Delivery & Takeaway</div>
                    <h2 className="section-title" style={{ color: brown, fontSize: isMobile ? '1.8rem' : undefined }}>
                        Order Direct,{' '}
                        <span style={{ color: copper }}>Save More</span>
                    </h2>
                    <div className="divider-copper" style={{ width: '60px', margin: '16px auto 20px' }} />
                    <p style={{ color: 'rgba(107,66,38,0.7)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontSize: isMobile ? '14px' : '16px' }}>
                        Skip the third-party fees. Order directly from The Pantry Car by phone or WhatsApp and enjoy fresh, home-style food delivered to your door or ready for pickup.
                    </p>
                </div>

                {/* Order Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '20px' : '28px', marginBottom: isMobile ? '32px' : '48px' }}>
                    {/* Call to Order */}
                    <div
                        style={{
                            background: '#fff',
                            border: `1.5px solid ${brownBorder}`,
                            borderRadius: '16px',
                            padding: isMobile ? '28px 20px' : '36px 32px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(107,66,38,0.12)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(107,66,38,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = brownBorder; }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '16px',
                                background: brownTint, border: `1.5px solid ${brownBorder}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                                <IconPhone size={28} color={brown} />
                            </div>
                            <div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.2rem' : '1.4rem', color: brown, marginBottom: '4px' }}>
                                    Call to Order
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: copper, fontSize: '12px', fontWeight: 600 }}>
                                    <IconClock size={13} color={copper} />
                                    <span>11 AM – 11 PM Daily</span>
                                </div>
                            </div>
                        </div>

                        <p style={{ color: 'rgba(107,66,38,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                            Call us directly to place your order for delivery or takeaway. Our team will confirm your order and estimated time right away.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                            {['No platform surcharges', 'Personalised order assistance', 'Direct communication with the kitchen'].map((point) => (
                                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: brown, flexShrink: 0 }} />
                                    <span style={{ color: 'rgba(107,66,38,0.65)', fontSize: '13px' }}>{point}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="tel:+919958055600"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: brown, color: '#FFF8F0',
                                padding: isMobile ? '12px 20px' : '14px 28px',
                                borderRadius: '8px', fontWeight: 700, fontSize: isMobile ? '14px' : '15px',
                                textDecoration: 'none', transition: 'all 0.2s ease',
                                boxShadow: '0 6px 24px rgba(107,66,38,0.25)',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                        >
                            <IconPhone size={18} color="#FFF8F0" />
                            <span>+91 99580 55600</span>
                        </a>
                    </div>

                    {/* WhatsApp Order */}
                    <div
                        style={{
                            background: '#fff',
                            border: `1.5px solid ${brownBorder}`,
                            borderRadius: '16px',
                            padding: isMobile ? '28px 20px' : '36px 32px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(107,66,38,0.12)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(107,66,38,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = brownBorder; }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '16px',
                                background: 'rgba(37,211,102,0.08)', border: '1.5px solid rgba(37,211,102,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                                <IconWhatsApp size={28} color="#25d366" />
                            </div>
                            <div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.2rem' : '1.4rem', color: brown, marginBottom: '4px' }}>
                                    WhatsApp Order
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25d366', fontSize: '12px', fontWeight: 600 }}>
                                    <IconTruck size={13} color="#25d366" />
                                    <span>Delivery & Takeaway</span>
                                </div>
                            </div>
                        </div>

                        <p style={{ color: 'rgba(107,66,38,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                            Message us on WhatsApp with your order, address, and preferred time. We'll confirm, prepare, and dispatch  simple as that.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                            {['Easy menu browsing & ordering', 'Order tracking via chat', 'Special requests easily handled'].map((point) => (
                                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25d366', flexShrink: 0 }} />
                                    <span style={{ color: 'rgba(107,66,38,0.65)', fontSize: '13px' }}>{point}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/919958055600?text=Hi! I'd like to place an order from The Pantry Car."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: '#25d366', color: '#fff',
                                padding: isMobile ? '12px 20px' : '14px 28px',
                                borderRadius: '8px', fontWeight: 700, fontSize: isMobile ? '14px' : '15px',
                                textDecoration: 'none', transition: 'all 0.2s ease',
                                boxShadow: '0 6px 24px rgba(37,211,102,0.3)',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
                        >
                            <IconWhatsApp size={18} color="#fff" />
                            <span>Order on WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Pro tip strip */}
                <div style={{
                    display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: '14px',
                    background: 'rgba(184,134,11,0.07)', border: '1px solid rgba(184,134,11,0.2)',
                    borderRadius: '10px', padding: isMobile ? '16px 18px' : '18px 28px',
                    flexDirection: isMobile ? 'column' : 'row',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                        <IconTruck size={20} color={copper} />
                        <span style={{ color: copper, fontWeight: 700, fontSize: '14px' }}>Pro Tip</span>
                    </div>
                    <p style={{ color: 'rgba(107,66,38,0.7)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                        Ordering directly from us means <strong style={{ color: brown }}>no extra commission charges</strong> and fresher food  the same quality you'd enjoy dining in. Your support goes directly to the kitchen team.
                    </p>
                </div>
            </div>
        </section>
    );
}
