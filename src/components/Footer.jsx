import useWindowSize from '../hooks/useWindowSize';
import { IconPhone, IconMapPin, IconClock, IconFacebook, IconInstagram, IconYoutube, IconCalendar, IconWhatsApp, IconTrain } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';
const TEXT = '#FFF8F0';

export default function Footer() {
    const { isMobile } = useWindowSize();

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const socials = [
        { Icon: IconFacebook, href: '#', label: 'Facebook' },
        { Icon: IconInstagram, href: 'https://www.instagram.com/thepantrycarofficial/', label: 'Instagram' },
        { Icon: IconYoutube, href: '#', label: 'YouTube' },
    ];

    const quickLinks = [
        ['About Us / हमारे बारे में', '#about'],
        ['Menu / मेनू', '#menu'],
        ['Gallery / गैलरी', '#gallery'],
        ['Reviews / समीक्षा', '#reviews'],
        ['Contact / संपर्क', '#contact'],
    ];

    const contactItems = [
        { Icon: IconMapPin, text: '2nd Floor, Mahagun Mart, Shop No. 1 & 2, Sector 78, Noida, UP 201305', href: null },
        { Icon: IconPhone, text: '+91 99580 55600', href: 'tel:+919958055600' },
        { Icon: IconWhatsApp, text: 'WhatsApp Us / व्हाट्सएप करें', href: 'https://wa.me/919958055600' },
        { Icon: IconClock, text: '11 AM – 11 PM · Open Daily / रोज़ खुला', href: null },
    ];

    const mutedText = 'rgba(255,248,240,0.5)';
    const copperBorder = 'rgba(212, 175, 55, 0.3)';

    return (
        <footer style={{
            background: `linear-gradient(135deg, ${BURGUNDY} 0%, #2A2018 100%)`,
            position: 'relative',
            paddingTop: isMobile ? '56px' : '72px',
            paddingBottom: '24px',
        }}>
            {/* Golden railway track top border */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '8px',
                background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)`,
                borderTop: `2px solid ${GOLD}`,
                borderBottom: `2px solid ${GOLD}`,
            }} />

            {/* Lantern decorations */}
            <div style={{
                position: 'absolute', top: '20px', left: '3%',
                fontSize: '40px', opacity: 0.05,
            }}>🏮</div>
            <div style={{
                position: 'absolute', top: '20px', right: '3%',
                fontSize: '40px', opacity: 0.05,
            }}>🏮</div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: isMobile ? '32px' : '48px',
                    marginBottom: '48px',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                <div style={{
                                    width: '44px', height: '44px',
                                    background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                    border: `2px solid ${GOLD}`,
                                    borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: CREAM, fontSize: '22px',
                                }}>
                                    🚂
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontSize: isMobile ? '18px' : '20px',
                                        letterSpacing: '2px',
                                        color: TEXT,
                                        fontWeight: 700,
                                        lineHeight: 1.1,
                                    }}>
                                        THE PANTRY CAR
                                    </div>
                                    <div style={{
                                        fontFamily: 'Noto Sans Devanagari, serif',
                                        fontSize: isMobile ? '13px' : '14px',
                                        color: GOLD,
                                        fontWeight: 600,
                                    }}>
                                        थे पैंट्री कार
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '10px',
                                letterSpacing: '3px',
                                color: COPPER,
                                textTransform: 'uppercase',
                                marginLeft: '56px',
                            }}>
                                Restaurant & Bar
                            </div>
                        </div>
                        <p style={{
                            color: mutedText,
                            fontSize: '13px',
                            lineHeight: 1.7,
                            marginBottom: '20px'
                        }}>
                            A warm, women-owned railway-themed restaurant in Sector 78 Noida. Experience authentic Indian & Chinese cuisine with a nostalgic touch.
                        </p>
                        <div style={{
                            background: 'rgba(255,248,240,0.05)',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: `1px solid ${copperBorder}`,
                        }}>
                            <div style={{
                                color: GOLD,
                                fontSize: '12px',
                                fontWeight: 700,
                                marginBottom: '4px',
                            }}>
                                📍 Find Us
                            </div>
                            <div style={{
                                color: mutedText,
                                fontSize: '12px',
                            }}>
                                Mahagun Mart, Sector 78, Noida
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            color: TEXT,
                            fontSize: '13px',
                            fontWeight: 700,
                            marginBottom: '18px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderBottom: `1px solid ${copperBorder}`,
                            paddingBottom: '8px',
                        }}>
                            Quick Links / त्वरित लिंक
                        </h4>
                        <div style={{
                            display: isMobile ? 'grid' : 'flex',
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : undefined,
                            flexDirection: 'column',
                            gap: '10px',
                        }}>
                            {quickLinks.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                                    style={{
                                        color: mutedText,
                                        fontSize: '13px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = GOLD;
                                        e.currentTarget.style.paddingLeft = '4px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = mutedText;
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    <span style={{ color: COPPER, flexShrink: 0, fontSize: '18px' }}>🚃</span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            color: TEXT,
                            fontSize: '13px',
                            fontWeight: 700,
                            marginBottom: '18px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderBottom: `1px solid ${copperBorder}`,
                            paddingBottom: '8px',
                        }}>
                            Contact / संपर्क
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {contactItems.map(({ Icon, text, href }) => (
                                <div key={text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '32px', height: '32px',
                                        background: `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                        border: `1px solid ${GOLD}`,
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={14} color={CREAM} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith('http') ? '_blank' : undefined}
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: mutedText,
                                                    fontSize: '13px',
                                                    textDecoration: 'none',
                                                    lineHeight: 1.5,
                                                    transition: 'color 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.target.style.color = GOLD}
                                                onMouseLeave={(e) => e.target.style.color = mutedText}
                                            >
                                                {text}
                                            </a>
                                        ) : (
                                            <span style={{ color: mutedText, fontSize: '13px', lineHeight: 1.5 }}>
                                                {text}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Book a Table */}
                    <div>
                        <h4 style={{
                            color: TEXT,
                            fontSize: '13px',
                            fontWeight: 700,
                            marginBottom: '18px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderBottom: `1px solid ${copperBorder}`,
                            paddingBottom: '8px',
                        }}>
                            Reserve / बुक करें
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button
                                onClick={() => scrollTo('#reservation')}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                    color: CREAM,
                                    border: `2px solid ${GOLD}`,
                                    padding: '12px 20px',
                                    borderRadius: '10px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'inherit',
                                    boxShadow: `0 4px 16px rgba(184,115,51,0.3)`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${COPPER} 0%, ${BURGUNDY} 100%)`;
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 6px 20px rgba(212,175,55,0.4)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`;
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 16px rgba(184,115,51,0.3)`;
                                }}
                            >
                                <IconCalendar size={16} color={CREAM} />
                                Reserve Online
                            </button>
                            <a
                                href="tel:+919958055600"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    background: 'transparent',
                                    color: CREAM,
                                    border: '2px solid COPPER',
                                    padding: '11px 20px',
                                    borderRadius: '10px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = CREAM;
                                    e.currentTarget.style.color = TEXT_DARK;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = CREAM;
                                }}
                            >
                                <IconPhone size={16} color={CREAM} /> Call Now
                            </a>
                            <a
                                href="https://wa.me/919958055600?text=Hi! I'd like to book a table at The Pantry Car."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    background: 'rgba(37,211,102,0.15)',
                                    border: '2px solid #25d366',
                                    color: '#25d366',
                                    padding: '11px 20px',
                                    borderRadius: '10px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(37,211,102,0.25)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(37,211,102,0.15)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <IconWhatsApp size={16} color="#25d366" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Links Row */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '16px',
                    marginBottom: '32px', paddingBottom: '24px',
                    borderBottom: `1px solid ${copperBorder}`,
                }}>
                    {socials.map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href !== '#' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            aria-label={label}
                            style={{
                                width: '48px', height: '48px',
                                background: 'transparent',
                                border: `2px solid ${copperBorder}`,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`;
                                e.currentTarget.style.borderColor = GOLD;
                                e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                                e.currentTarget.style.boxShadow = `0 8px 24px rgba(212,175,55,0.4)`;
                                e.currentTarget.querySelector('svg').setAttribute('stroke', CREAM);
                                if (e.currentTarget.querySelector('svg').getAttribute('fill') === 'none') {
                                    e.currentTarget.querySelector('svg').setAttribute('stroke', CREAM);
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = copperBorder;
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.querySelector('svg').setAttribute('stroke', COPPER);
                            }}
                        >
                            <Icon size={20} color={COPPER} />
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '16px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255,248,240,0.03)',
                    borderRadius: '12px',
                }}>
                    <p style={{ color: mutedText, fontSize: '12px', margin: 0 }}>
                        © {new Date().getFullYear()} The Pantry Car. All rights reserved.
                    </p>
                    <p style={{
                        color: GOLD,
                        fontSize: '12px',
                        fontWeight: 600,
                        margin: 0,
                    }}>
                        🚂 थे पैंट्री कार · सेक्टर 78, नोएडा · स्वाद की यात्रा 🚂
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {['Privacy Policy', 'Terms'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{
                                    color: mutedText,
                                    fontSize: '12px',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = GOLD}
                                onMouseLeave={(e) => e.target.style.color = mutedText}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
