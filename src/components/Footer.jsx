import useWindowSize from '../hooks/useWindowSize';
import { IconPhone, IconMapPin, IconClock, IconFacebook, IconInstagram, IconYoutube, IconCalendar, IconWhatsApp, IconTrain } from './Icons';

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
        ['About Us', '#about'],
        ['Menu', '#menu'],
        ['Gallery', '#gallery'],
        ['Reviews', '#reviews'],
        ['Contact', '#contact'],
    ];

    const contactItems = [
        { Icon: IconMapPin, text: '2nd Floor, Mahagun Mart, Shop No. 1 & 2, Sector 78, Noida, UP 201305', href: null },
        { Icon: IconPhone, text: '+91 99580 55600', href: 'tel:+919958055600' },
        { Icon: IconWhatsApp, text: 'WhatsApp Us', href: 'https://wa.me/919958055600' },
        { Icon: IconClock, text: '11 AM – 11 PM · Open Daily', href: null },
    ];

    const mutedText = 'rgba(255,248,240,0.4)';
    const copperAccent = '#B8860B';
    const copperFaint = 'rgba(184,134,11,0.18)';
    const copperBorder = 'rgba(184,134,11,0.25)';

    return (
        <footer style={{
            background: '#3D2B1F',
            position: 'relative',
            paddingTop: isMobile ? '48px' : '64px',
        }}>
            {/* Vivid copper gradient top border */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #B8860B 20%, #D4A039 50%, #B8860B 80%, transparent)',
            }} />
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: isMobile ? '32px' : '48px',
                    marginBottom: '40px',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                                <IconTrain size={22} color={copperAccent} />
                                <div style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '22px',
                                    letterSpacing: '2px',
                                    color: '#FFF8F0',
                                    fontWeight: 700,
                                    lineHeight: 1,
                                }}>
                                    THE PANTRY CAR
                                </div>
                            </div>
                            <div style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '11px',
                                letterSpacing: '3px',
                                color: copperAccent,
                                textTransform: 'uppercase',
                                paddingLeft: '32px',
                            }}>
                                Restaurant & Bar
                            </div>
                        </div>
                        <p style={{ color: mutedText, fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>
                            A warm, women-owned dining destination in Sector 78 Noida. Rebranded from Railicious  now serving heartfelt food in a cozy, welcoming space.
                        </p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {socials.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href !== '#' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        width: '42px', height: '42px',
                                        background: 'transparent',
                                        border: `1.5px solid ${copperBorder}`,
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                        flexShrink: 0,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = copperAccent;
                                        e.currentTarget.style.borderColor = copperAccent;
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(184,134,11,0.4)';
                                        e.currentTarget.querySelector('svg').setAttribute('stroke', '#fff');
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = copperBorder;
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.querySelector('svg').setAttribute('stroke', copperAccent);
                                    }}
                                >
                                    <Icon size={18} color={copperAccent} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#FFF8F0', fontSize: '13px', fontWeight: 700, marginBottom: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Quick Links
                        </h4>
                        <div style={{ display: isMobile ? 'grid' : 'flex', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : undefined, flexDirection: 'column', gap: '8px' }}>
                            {quickLinks.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                                    style={{ color: mutedText, fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '5px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = copperAccent; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = mutedText; }}
                                >
                                    <span style={{ color: copperBorder, fontSize: '16px', flexShrink: 0 }}>›</span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#FFF8F0', fontSize: '13px', fontWeight: 700, marginBottom: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {contactItems.map(({ Icon, text, href }) => (
                                <div key={text} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                    <Icon size={15} color={copperAccent} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    {href ? (
                                        <a
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{ color: mutedText, fontSize: '13px', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s' }}
                                            onMouseEnter={(e) => e.target.style.color = copperAccent}
                                            onMouseLeave={(e) => e.target.style.color = mutedText}
                                        >
                                            {text}
                                        </a>
                                    ) : (
                                        <span style={{ color: mutedText, fontSize: '13px', lineHeight: 1.5 }}>{text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Book a Table */}
                    <div>
                        <h4 style={{ color: '#FFF8F0', fontSize: '13px', fontWeight: 700, marginBottom: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Book a Table
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button
                                className="btn-primary"
                                onClick={() => scrollTo('#reservation')}
                                style={{ justifyContent: 'center', gap: '8px' }}
                            >
                                <IconCalendar size={16} color="#FFF8F0" /> Reserve Online
                            </button>
                            <a
                                href="tel:+919958055600"
                                className="btn-outline"
                                style={{ justifyContent: 'center', textAlign: 'center', gap: '8px' }}
                            >
                                <IconPhone size={16} color={copperAccent} /> Call Now
                            </a>
                            <a
                                href="https://wa.me/919958055600?text=Hi! I'd like to book a table at The Pantry Car."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    background: 'rgba(37,211,102,0.1)', border: '2px solid rgba(37,211,102,0.3)',
                                    color: '#25d366', padding: '12px 20px', borderRadius: '4px',
                                    fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.2)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; }}
                            >
                                <IconWhatsApp size={16} color="#25d366" /> WhatsApp Book
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: `1px solid rgba(255,248,240,0.08)`,
                    padding: '20px 0',
                    display: 'flex', flexWrap: 'wrap', gap: '12px',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    textAlign: isMobile ? 'center' : 'left',
                }}>
                    <p style={{ color: mutedText, fontSize: '12px' }}>
                        © {new Date().getFullYear()} The Pantry Car. All rights reserved.
                    </p>
                    <p style={{ color: mutedText, fontSize: '12px' }}>
                        थे पैंट्री कार  सेक्टर 78, नोएडा
                    </p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {['Privacy Policy', 'Terms'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{ color: mutedText, fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.target.style.color = copperAccent}
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
