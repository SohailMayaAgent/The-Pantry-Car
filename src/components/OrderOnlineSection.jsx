import useWindowSize from '../hooks/useWindowSize';
import { IconPhone, IconWhatsApp, IconTruck, IconClock, IconTrain } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';
const BG_DARK = '#1A1209';

export default function OrderOnlineSection() {
    const { isMobile } = useWindowSize();

    return (
        <section
            id="order-online"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(180deg, ${BG_DARK} 0%, #2A2018 100%)`,
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
                            ऑर्डर करें
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                    }}>
                        Order Direct,{' '}
                        <span style={{ color: GOLD }}>Save More</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '16px',
                    }}>
                        सीधे ऑर्डर करें, बचाएं और अधिक
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
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontSize: isMobile ? '14px' : '15px',
                    }}>
                        Skip the third-party fees. Order directly from The Pantry Car by phone or WhatsApp and enjoy fresh, home-style food delivered to your door.
                    </p>
                </div>

                {/* Order Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: isMobile ? '20px' : '28px',
                    marginBottom: isMobile ? '32px' : '48px',
                }}>
                    {/* Call to Order */}
                    <div
                        className="card-railway"
                        style={{
                            background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                            border: `2px solid ${COPPER}`,
                            borderRadius: '16px',
                            padding: isMobile ? '28px 20px' : '34px',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 4px 20px rgba(184,115,51,0.2)`,
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
                        {/* Top accent */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, ${GOLD}, ${COPPER_LIGHT}, ${GOLD})`,
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '12px',
                                background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                border: `2px solid ${GOLD}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <IconPhone size={26} color={CREAM} />
                            </div>
                            <div>
                                <h3 style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                                    color: TEXT_DARK, marginBottom: '4px'
                                }}>
                                    Call to Order
                                </h3>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    color: COPPER_LIGHT,
                                    fontSize: '12px', fontWeight: 600
                                }}>
                                    <IconClock size={13} color={GOLD} />
                                    <span>11 AM – 11 PM Daily</span>
                                </div>
                            </div>
                        </div>

                        <p style={{
                            color: '#7A6455',
                            fontSize: '14px',
                            lineHeight: 1.7,
                            marginBottom: '20px'
                        }}>
                            Call us directly to place your order for delivery or takeaway. Our team will confirm your order and estimated time right away.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            marginBottom: '24px'
                        }}>
                            {[
                                'No platform surcharges',
                                'Personalised order assistance',
                                'Direct communication with the kitchen'
                            ].map((point) => (
                                <div key={point} style={{
                                    display: 'flex', alignItems: 'center', gap: '8px'
                                }}>
                                    <span style={{ fontSize: '16px' }}>🚂</span>
                                    <span style={{ color: '#7A6455', fontSize: '13px' }}>{point}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="tel:+919958055600"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                color: CREAM,
                                padding: isMobile ? '13px 24px' : '14px 32px',
                                borderRadius: '10px',
                                fontWeight: 700,
                                fontSize: isMobile ? '14px' : '15px',
                                textDecoration: 'none',
                                border: `2px solid ${GOLD}`,
                                transition: 'all 0.2s ease',
                                boxShadow: `0 4px 20px rgba(184,115,51,0.3)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 30px rgba(212,175,55,0.4)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 20px rgba(184,115,51,0.3)`;
                            }}
                        >
                            <IconPhone size={18} color={CREAM} />
                            <span>+91 99580 55600</span>
                        </a>
                    </div>

                    {/* WhatsApp Order */}
                    <div
                        className="card-railway"
                        style={{
                            background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                            border: `2px solid ${COPPER}`,
                            borderRadius: '16px',
                            padding: isMobile ? '28px 20px' : '34px',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 4px 20px rgba(184,115,51,0.2)`,
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
                        {/* Top accent */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, #25d366, #128C7E, #25d366)`,
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '12px',
                                background: 'rgba(37,211,102,0.15)',
                                border: '2px solid #25d366',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <IconWhatsApp size={26} color="#25d366" />
                            </div>
                            <div>
                                <h3 style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                                    color: TEXT_DARK, marginBottom: '4px'
                                }}>
                                    WhatsApp Order
                                </h3>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    color: '#25d366',
                                    fontSize: '12px', fontWeight: 600
                                }}>
                                    <IconTruck size={13} color="#25d366" />
                                    <span>Delivery & Takeaway</span>
                                </div>
                            </div>
                        </div>

                        <p style={{
                            color: '#7A6455',
                            fontSize: '14px',
                            lineHeight: 1.7,
                            marginBottom: '20px'
                        }}>
                            Message us on WhatsApp with your order, address, and preferred time. We'll confirm, prepare, and dispatch  simple as that.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            marginBottom: '24px'
                        }}>
                            {[
                                'Easy menu browsing & ordering',
                                'Order tracking via chat',
                                'Special requests easily handled'
                            ].map((point) => (
                                <div key={point} style={{
                                    display: 'flex', alignItems: 'center', gap: '8px'
                                }}>
                                    <span style={{ fontSize: '16px' }}>🚃</span>
                                    <span style={{ color: '#7A6455', fontSize: '13px' }}>{point}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/919958055600?text=Hi! I'd like to place an order from The Pantry Car."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: '#25d366',
                                color: '#fff',
                                padding: isMobile ? '13px 24px' : '14px 32px',
                                borderRadius: '10px',
                                fontWeight: 700,
                                fontSize: isMobile ? '14px' : '15px',
                                textDecoration: 'none',
                                border: '2px solid #128C7E',
                                transition: 'all 0.2s ease',
                                boxShadow: `0 4px 20px rgba(37,211,102,0.3)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 30px rgba(37,211,102,0.4)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 20px rgba(37,211,102,0.3)`;
                            }}
                        >
                            <IconWhatsApp size={18} color="#fff" />
                            <span>Order on WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Pro tip strip */}
                <div style={{
                    display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: '14px',
                    background: `rgba(184,115,51,0.1)`,
                    border: `1px solid ${GOLD}`,
                    borderRadius: '12px',
                    padding: isMobile ? '16px 18px' : '18px 28px',
                    flexDirection: isMobile ? 'column' : 'row'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                        <IconTruck size={20} color={GOLD} />
                        <span style={{
                            color: GOLD,
                            fontWeight: 700,
                            fontSize: '14px'
                        }}>
                            Pro Tip
                        </span>
                    </div>
                    <p style={{
                        color: 'rgba(255,248,240,0.8)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        margin: 0
                    }}>
                        Ordering directly from us means{' '}
                        <strong style={{ color: CREAM }}>no extra commission charges</strong> and fresher food  the same quality you'd enjoy dining in. Your support goes directly to the kitchen team.
                    </p>
                </div>
            </div>
        </section>
    );
}
