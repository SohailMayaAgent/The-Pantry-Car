import useWindowSize from '../hooks/useWindowSize';
import {
    IconCoffee,
    IconCutlery,
    IconBeer,
    IconHeart,
    IconTruck,
    IconTrain,
    IconStar,
    IconStarOutline,
} from './Icons';

export default function AboutSection() {
    const { isMobile, isTablet } = useWindowSize();

    const features = [
        { icon: IconCoffee, title: 'Artisan Coffee', desc: 'Freshly brewed specialty coffees and teas' },
        { icon: IconCutlery, title: 'Upgraded Recipes', desc: 'Refined classics with a contemporary twist' },
        { icon: IconBeer, title: 'Full Bar', desc: 'Cocktails, mocktails, and premium selections' },
        { icon: IconHeart, title: 'Women-Owned', desc: 'Proudly women-led and community-driven' },
        { icon: IconTruck, title: 'All Services', desc: 'Dine-in, takeaway & home delivery' },
        { icon: IconTrain, title: 'Railway Heritage', desc: "A nostalgic nod to our journey's beginning" },
    ];

    const tags = ['North Indian', 'Continental', 'Cafe & Coffee', 'Bar & Lounge', 'Veg & Non-Veg'];

    return (
        <section
            id="about"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: '#FFF8F0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle warm radial glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(184,134,11,0.07) 0%, transparent 65%)',
                    pointerEvents: 'none',
                }}
            />
            {/* top-left accent blob */}
            <div style={{
                position: 'absolute', top: '-60px', left: '-60px',
                width: '300px', height: '300px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(107,66,38,0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isMobile ? '0 16px' : '0 24px',
                    position: 'relative',
                }}
            >
                {/* ── Two-column layout ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '40px' : isTablet ? '48px' : '80px',
                        alignItems: 'center',
                        marginBottom: isMobile ? '56px' : '80px',
                    }}
                >
                    {/* ── LEFT: Image column ── */}
                    <div style={{ position: 'relative' }}>
                        {/* Image wrapper with rounded corners and warm border */}
                        <div
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '2px solid rgba(107, 66, 38, 0.18)',
                                boxShadow: '0 8px 32px rgba(107, 66, 38, 0.12)',
                            }}
                        >
                            <img
                                src="/lounge_bar.webp"
                                alt="The Pantry Car  Lounge & Bar"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: isMobile ? '280px' : '440px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Floating rating badge */}
                        <div
                            className="glass-card"
                            style={{
                                position: 'absolute',
                                bottom: isMobile ? '-20px' : '-28px',
                                right: isMobile ? '-8px' : '-28px',
                                background: '#FFFFFF',
                                borderRadius: '14px',
                                padding: isMobile ? '14px 18px' : '20px 28px',
                                textAlign: 'center',
                                boxShadow: '0 12px 40px rgba(107, 66, 38, 0.18)',
                                border: '2px solid rgba(107, 66, 38, 0.14)',
                                minWidth: isMobile ? '110px' : '130px',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Playfair Display, Georgia, serif',
                                    fontSize: isMobile ? '32px' : '44px',
                                    fontWeight: 700,
                                    color: '#B8860B',
                                    lineHeight: 1,
                                    marginBottom: '6px',
                                }}
                            >
                                4.8
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '2px',
                                    marginBottom: '6px',
                                }}
                            >
                                {[1, 2, 3, 4].map((i) => (
                                    <IconStar key={i} size={14} color="#D4A039" />
                                ))}
                                <IconStar size={14} color="#D4A039" />
                            </div>
                            <div
                                style={{
                                    color: '#7A6455',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    letterSpacing: '0.8px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                40+ Reviews
                            </div>
                        </div>

                        {/* Decorative corner accent  top-left */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-14px',
                                left: '-14px',
                                width: '56px',
                                height: '56px',
                                border: '3px solid rgba(184, 134, 11, 0.5)',
                                borderRight: 'none',
                                borderBottom: 'none',
                                borderRadius: '10px 0 0 0',
                                pointerEvents: 'none',
                            }}
                        />
                        {/* bottom-right accent */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-14px',
                                right: isMobile ? '-8px' : '-14px',
                                width: '40px',
                                height: '40px',
                                border: '2px solid rgba(184, 134, 11, 0.3)',
                                borderLeft: 'none',
                                borderTop: 'none',
                                borderRadius: '0 0 8px 0',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>

                    {/* ── RIGHT: Content column ── */}
                    <div style={{ paddingTop: isMobile ? '32px' : '0' }}>
                        {/* Subtitle */}
                        <div className="section-subtitle">Our Story</div>

                        {/* Title */}
                        <h2
                            className="section-title"
                            style={{
                                fontSize: isMobile ? '1.8rem' : undefined,
                                color: '#3D2B1F',
                            }}
                        >
                            Same Soul,{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #B8860B 0%, #D4A039 60%, #B8860B 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                A Fresh New Journey
                            </span>
                        </h2>

                        {/* Copper divider */}
                        <div
                            className="divider-copper"
                            style={{ width: '72px', marginBottom: '24px' }}
                        />

                        {/* Paragraph 1 */}
                        <p
                            style={{
                                color: '#7A6455',
                                fontSize: isMobile ? '15px' : '16px',
                                lineHeight: 1.85,
                                marginBottom: '16px',
                            }}
                        >
                            Welcome to{' '}
                            <strong style={{ color: '#3D2B1F', fontWeight: 700 }}>
                                The Pantry Car
                            </strong>{' '}
                            formerly known as Railicious, we've embarked on a fresh journey with a renewed vision. Under new{' '}
                            <strong style={{ color: '#6B4226' }}>women-led management</strong>, we've preserved the soul of what made us special while elevating every aspect of your dining experience.
                        </p>

                        {/* Paragraph 2 */}
                        <p
                            style={{
                                color: '#7A6455',
                                fontSize: isMobile ? '15px' : '16px',
                                lineHeight: 1.85,
                                marginBottom: '28px',
                            }}
                        >
                            With upgraded recipes, a refreshed ambiance, and an unwavering commitment to quality, The Pantry Car is where familiar comfort meets exciting new flavors. Same welcoming location at{' '}
                            <strong style={{ color: '#3D2B1F' }}>Mahagun Mart, Sector 78</strong>  but a noticeably better experience in every way.
                        </p>

                        {/* Cuisine / category tags */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '28px',
                            }}
                        >
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        border: '1.5px solid rgba(107, 66, 38, 0.28)',
                                        color: '#6B4226',
                                        padding: '5px 14px',
                                        borderRadius: '40px',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        background: 'rgba(107, 66, 38, 0.06)',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Info row */}
                        <div
                            style={{
                                display: 'flex',
                                gap: isMobile ? '24px' : '40px',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                            }}
                        >
                            {/* Hours */}
                            <div>
                                <div
                                    style={{
                                        color: '#9A8478',
                                        fontSize: '11px',
                                        letterSpacing: '1.5px',
                                        textTransform: 'uppercase',
                                        marginBottom: '4px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Hours
                                </div>
                                <div
                                    style={{
                                        color: '#3D2B1F',
                                        fontWeight: 700,
                                        fontSize: '15px',
                                    }}
                                >
                                    11 AM – 11 PM Daily
                                </div>
                            </div>

                            {/* Women-Owned badge */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(184, 134, 11, 0.08)',
                                    border: '1.5px solid rgba(184, 134, 11, 0.25)',
                                    borderRadius: '8px',
                                    padding: '8px 14px',
                                }}
                            >
                                <IconHeart size={16} color="#B8860B" />
                                <span
                                    style={{
                                        color: '#6B4226',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    Women-Owned
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Feature cards grid ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'repeat(2, 1fr)'
                            : isTablet
                                ? 'repeat(3, 1fr)'
                                : 'repeat(6, 1fr)',
                        gap: isMobile ? '12px' : '16px',
                    }}
                >
                    {features.map(({ icon: FeatureIcon, title, desc }, idx) => (
                        <div
                            key={title}
                            style={{
                                padding: isMobile ? '20px 14px' : '28px 20px',
                                borderRadius: '14px',
                                textAlign: 'center',
                                background: '#FFFFFF',
                                border: '1.5px solid rgba(107, 66, 38, 0.12)',
                                boxShadow: '0 2px 12px rgba(107, 66, 38, 0.06)',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                animation: `reveal-up 0.6s ease both`,
                                animationDelay: `${idx * 0.08}s`,
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(184,134,11,0.5)';
                                e.currentTarget.style.transform = 'translateY(-7px)';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(107, 66, 38, 0.15)';
                                e.currentTarget.querySelector('.feat-top-border').style.opacity = '1';
                                e.currentTarget.querySelector('.feat-icon-circle').style.background = 'linear-gradient(135deg, rgba(184,134,11,0.18), rgba(184,134,11,0.08))';
                                e.currentTarget.querySelector('.feat-icon-circle').style.borderColor = 'rgba(184,134,11,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(107, 66, 38, 0.12)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(107, 66, 38, 0.06)';
                                e.currentTarget.querySelector('.feat-top-border').style.opacity = '0';
                                e.currentTarget.querySelector('.feat-icon-circle').style.background = 'rgba(107, 66, 38, 0.08)';
                                e.currentTarget.querySelector('.feat-icon-circle').style.borderColor = 'rgba(107, 66, 38, 0.18)';
                            }}
                        >
                            {/* Copper top-border accent on hover */}
                            <div className="feat-top-border" style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, #B8860B, #D4A039, #B8860B)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            }} />

                            {/* Icon circle */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                                <div
                                    className="feat-icon-circle"
                                    style={{
                                        width: '52px', height: '52px', borderRadius: '50%',
                                        background: 'rgba(107, 66, 38, 0.08)',
                                        border: '1.5px solid rgba(107, 66, 38, 0.18)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <FeatureIcon size={24} color="#6B4226" />
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: isMobile ? '14px' : '16px',
                                color: '#3D2B1F', marginBottom: '6px', fontWeight: 700, lineHeight: 1.3,
                            }}>
                                {title}
                            </h3>
                            <p style={{ color: '#9A8478', fontSize: '12px', lineHeight: 1.55 }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
