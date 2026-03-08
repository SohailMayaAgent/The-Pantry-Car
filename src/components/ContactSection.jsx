import useWindowSize from '../hooks/useWindowSize';
import { IconMapPin, IconPhone, IconWhatsApp, IconClock, IconNavigation, IconTruck, IconPackage, IconCalendar } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';

export default function ContactSection() {
    const { isMobile, isTablet } = useWindowSize();

    const contactItems = [
        {
            Icon: IconMapPin, title: 'Address / पता', color: GOLD,
            content: '2nd Floor, Mahagun Mart, Shop No. 1 & 2, Sector 78, Noida, UP 201305',
            link: 'https://maps.app.goo.gl/P2KiGwHFBETMXHNu5',
            linkLabel: 'Get Directions', LinkIcon: IconNavigation,
        },
        {
            Icon: IconPhone, title: 'Call / कॉल', color: COPPER,
            content: '+91 99580 55600',
            link: 'tel:+919958055600',
            linkLabel: 'Tap to Call', LinkIcon: IconPhone,
        },
        {
            Icon: IconWhatsApp, title: 'WhatsApp', color: '#25d366',
            content: 'Chat to book, ask questions, or check availability',
            link: 'https://wa.me/919958055600?text=Hi! I want to reserve a table at The Pantry Car.',
            linkLabel: 'Open WhatsApp', LinkIcon: IconWhatsApp,
        },
        {
            Icon: IconClock, title: 'Hours / समय', color: COPPER,
            content: 'Daily: 11:00 AM – 11:00 PM',
            extraBadge: 'Open till 11 PM',
            link: null, linkLabel: null, LinkIcon: null,
        },
    ];

    const services = [
        { icon: IconCalendar, label: 'Dine-in / डाइन-इन' },
        { icon: IconPackage, label: 'Takeaway / टेकअवे' },
        { icon: IconTruck, label: 'Delivery / डिलीवरी' },
        { icon: IconPhone, label: 'Reservations / बुकिंग' },
    ];

    return (
        <section
            id="contact"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(135deg, #2A2018 0%, #3D2B1F 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Railway track background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(180deg, transparent 48%, rgba(184, 115, 51, 0.03) 48%, rgba(184, 115, 51, 0.03) 52%, transparent 52%)
                `,
                backgroundSize: '100% 60px',
                pointerEvents: 'none',
            }} />

            {/* Decorative lantern */}
            <div style={{
                position: 'absolute', bottom: '10%', right: '5%',
                fontSize: '80px', opacity: 0.05, filter: 'blur(2px)',
            }}>🏮</div>

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: isMobile ? '0 16px' : '0 24px',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        borderRadius: '40px', padding: '4px 14px', marginBottom: '16px',
                    }}>
                        <span style={{ fontSize: '16px' }}>📍</span>
                        <span style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            color: GOLD, textTransform: 'uppercase',
                        }}>
                            संपर्क करें
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                    }}>
                        Find Us at{' '}
                        <span style={{ color: GOLD }}>The Pantry Car</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '16px',
                    }}>
                        थे पैंट्री कार तक पहुंचें
                    </h3>

                    {/* Railway divider */}
                    <div style={{
                        width: '80px', height: '4px',
                        background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 15px, transparent 15px, transparent 20px)`,
                        borderTop: `1px solid ${GOLD}`,
                        borderBottom: `1px solid ${GOLD}`,
                        margin: '0 auto',
                    }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '28px' : '48px',
                    alignItems: 'start',
                }}>
                    {/* Map with railway border */}
                    <div style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: `3px solid ${COPPER}`,
                        boxShadow: `0 8px 32px rgba(184,115,51,0.3)`,
                        position: 'relative',
                    }}>
                        {/* Railway track top border */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2,
                            height: '6px',
                            background: `repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)`,
                            borderTop: `1px solid ${GOLD}`,
                            borderBottom: `1px solid ${GOLD}`,
                        }} />

                        <iframe
                            title="The Pantry Car Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.189905861508!2d77.38756479999999!3d28.564059599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef48b1d8dc5f%3A0x90fab00403fdbaca!2sThe%20Pantry%20Car!5e0!3m2!1sen!2sin!4v1772898435677!5m2!1sen!2sin"
                            width="100%"
                            height={isMobile ? '300px' : '400px'}
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {contactItems.map(({ Icon, title, content, link, linkLabel, LinkIcon, color, extraBadge }) => (
                            <div
                                key={title}
                                style={{
                                    background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                                    borderRadius: '12px',
                                    padding: isMobile ? '16px' : '20px',
                                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                                    border: `2px solid ${COPPER}`,
                                    transition: 'all 0.2s ease',
                                    boxShadow: `0 4px 16px rgba(184,115,51,0.15)`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = GOLD;
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                    e.currentTarget.style.boxShadow = `0 6px 24px rgba(212,175,55,0.25)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = COPPER;
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 16px rgba(184,115,51,0.15)`;
                                }}
                            >
                                <div style={{
                                    width: '46px', height: '46px', flexShrink: 0,
                                    borderRadius: '10px',
                                    background: color === '#25d366' ? 'rgba(37,211,102,0.15)' : `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`,
                                    border: `2px solid ${GOLD}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={22} color={color === '#25d366' ? '#25d366' : CREAM} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        color: '#7A6455',
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '4px'
                                    }}>
                                        {title}
                                    </div>
                                    <div style={{
                                        color: TEXT_DARK,
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        marginBottom: link ? '6px' : (extraBadge ? '8px' : 0),
                                        lineHeight: 1.5,
                                    }}>
                                        {content}
                                    </div>
                                    {extraBadge && (
                                        <div style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                                            background: `rgba(37,211,102,0.15)`,
                                            borderRadius: '12px',
                                            padding: '3px 10px', fontSize: '11px',
                                            color: '#25d366', fontWeight: 700,
                                        }}>
                                            {extraBadge}
                                        </div>
                                    )}
                                    {link && LinkIcon && (
                                        <a
                                            href={link}
                                            target={link.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '5px',
                                                color: color, fontSize: '13px', fontWeight: 700,
                                                textDecoration: 'none'
                                            }}
                                        >
                                            <LinkIcon size={13} color={color} /> {linkLabel}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Services */}
                        <div style={{
                            background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                            borderRadius: '12px',
                            padding: isMobile ? '16px' : '20px',
                            border: `2px solid ${COPPER}`,
                            boxShadow: `0 4px 16px rgba(184,115,51,0.15)`,
                        }}>
                            <div style={{
                                color: '#7A6455',
                                fontSize: '10px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '12px',
                            }}>
                                Services Available / सुविधाएं
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {services.map(({ icon: SvcIcon, label }) => (
                                    <span
                                        key={label}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            background: `rgba(184,115,51,0.1)`,
                                           border: `1px solid ${COPPER}`,
                                            color: TEXT_DARK, fontSize: '12px', fontWeight: 600,
                                            padding: '6px 14px', borderRadius: '20px',
                                        }}
                                    >
                                        <SvcIcon size={13} color={BURGUNDY} /> {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Railway Decoration */}
                <div style={{
                    marginTop: '48px', textAlign: 'center',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '20px', color: 'rgba(255,248,240,0.4)',
                        fontSize: '13px',
                    }}>
                        <div style={{ height: '1px', width: '60px', background: GOLD }} />
                        <span>🚂 सेक्टर 78, नोएडा में आपका स्वागत है 🚂</span>
                        <div style={{ height: '1px', width: '60px', background: GOLD }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
