import useWindowSize from '../hooks/useWindowSize';
import { IconMapPin, IconPhone, IconWhatsApp, IconClock, IconNavigation, IconTruck, IconPackage, IconCalendar } from './Icons';

export default function ContactSection() {
    const { isMobile, isTablet } = useWindowSize();

    const brown = '#6B4226';
    const copper = '#B8860B';
    const beige = '#F5E6D3';
    const brownBorder = 'rgba(107,66,38,0.18)';

    const contactItems = [
        {
            Icon: IconMapPin, title: 'Address', color: brown,
            content: '2nd Floor, Mahagun Mart, Shop No. 1 & 2, Sector 78, Noida, Uttar Pradesh 201305',
            link: 'https://maps.google.com/?q=Mahagun+Mart+Sector+78+Noida',
            linkLabel: 'Get Directions', LinkIcon: IconNavigation,
        },
        {
            Icon: IconPhone, title: 'Call & Reserve', color: copper,
            content: '+91 99999 99999',
            link: 'tel:+919999999999',
            linkLabel: 'Tap to Call', LinkIcon: IconPhone,
        },
        {
            Icon: IconWhatsApp, title: 'WhatsApp Us', color: '#25d366',
            content: 'Chat to book, ask questions, or check availability',
            link: 'https://wa.me/919999999999?text=Hi! I want to reserve a table at The Pantry Car.',
            linkLabel: 'Open WhatsApp', LinkIcon: IconWhatsApp,
        },
        {
            Icon: IconClock, title: 'Open Hours', color: copper,
            content: 'Daily: 11:00 AM – 11:00 PM',
            extraBadge: 'Open till 11 PM',
            link: null, linkLabel: null, LinkIcon: null,
        },
    ];

    const services = [
        { icon: IconCalendar, label: 'Dine-in' },
        { icon: IconPackage, label: 'Takeaway' },
        { icon: IconTruck, label: 'Delivery' },
        { icon: IconPhone, label: 'Reservations' },
    ];

    return (
        <section id="contact" style={{ padding: isMobile ? '64px 0' : '100px 0', background: beige, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div className="section-subtitle">Find Us</div>
                    <h2 className="section-title" style={{ color: brown, fontSize: isMobile ? '1.8rem' : undefined }}>
                        Location &{' '}
                        <span style={{ color: copper }}>Contact</span>
                    </h2>
                    <div className="divider-copper" style={{ width: '60px', margin: '16px auto 0' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: isMobile ? '28px' : '40px', alignItems: 'start' }}>
                    {/* Map */}
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: `1px solid ${brownBorder}`, boxShadow: '0 4px 20px rgba(107,66,38,0.08)' }}>
                        <iframe
                            title="The Pantry Car Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.39!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMahagun+Mart+Sector+78+Noida!5e0!3m2!1sen!2sin"
                            width="100%"
                            height={isMobile ? '260px' : '360px'}
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {contactItems.map(({ Icon, title, content, link, linkLabel, LinkIcon, color, extraBadge }) => (
                            <div
                                key={title}
                                style={{
                                    background: '#fff', borderRadius: '10px',
                                    padding: isMobile ? '16px' : '20px 22px',
                                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                                    border: `1px solid ${brownBorder}`,
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 2px 8px rgba(107,66,38,0.04)',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(107,66,38,0.35)'; e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(107,66,38,0.1)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = brownBorder; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(107,66,38,0.04)'; }}
                            >
                                <div style={{
                                    width: '42px', height: '42px', flexShrink: 0,
                                    borderRadius: '10px',
                                    background: color === '#25d366' ? 'rgba(37,211,102,0.08)' : 'rgba(107,66,38,0.07)',
                                    border: color === '#25d366' ? '1.5px solid rgba(37,211,102,0.25)' : `1.5px solid ${brownBorder}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={20} color={color} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ color: 'rgba(107,66,38,0.5)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{title}</div>
                                    <div style={{ color: brown, fontSize: '14px', fontWeight: 500, marginBottom: link ? '6px' : (extraBadge ? '8px' : 0) }}>{content}</div>
                                    {extraBadge && (
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(107,66,38,0.07)', border: `1px solid ${brownBorder}`, borderRadius: '12px', padding: '3px 10px', fontSize: '11px', color: brown, fontWeight: 600 }}>
                                            {extraBadge}
                                        </div>
                                    )}
                                    {link && LinkIcon && (
                                        <a
                                            href={link}
                                            target={link.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: color, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                                        >
                                            <LinkIcon size={13} color={color} /> {linkLabel}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Services */}
                        <div style={{ background: '#fff', borderRadius: '10px', padding: isMobile ? '16px' : '20px 22px', border: `1px solid ${brownBorder}`, boxShadow: '0 2px 8px rgba(107,66,38,0.04)' }}>
                            <div style={{ color: 'rgba(107,66,38,0.5)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                                Services Available
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {services.map(({ icon: SvcIcon, label }) => (
                                    <span
                                        key={label}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            background: 'rgba(107,66,38,0.06)', border: `1px solid ${brownBorder}`,
                                            color: brown, fontSize: '12px', fontWeight: 600,
                                            padding: '5px 12px', borderRadius: '20px',
                                        }}
                                    >
                                        <SvcIcon size={13} color={copper} /> {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
