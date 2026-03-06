/**
 * Navbar.jsx  The Pantry Car Restaurant & Bar
 *
 * Design tokens (light theme):
 *   Brown    #6B4226
 *   Beige    #F5E6D3
 *   Cream    #FFF8F0
 *   Copper   #B8860B
 *
 * Behaviour:
 *   - Fixed to top; transparent while page is at the hero section.
 *   - On scroll (> 60 px) transitions to a cream/warm-white backdrop with a
 *     subtle brown border-bottom.
 *   - Desktop (>= 1024 px): horizontal nav links + "Reserve Table" CTA.
 *   - Mobile / tablet (< 1024 px): hamburger opens a slide-down drawer with
 *     the same links and a "Call Now" shortcut button.
 *   - The Hindi brand name renders only on desktop as a very subtle whisper.
 */

import { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {
    IconMenu,
    IconX,
    IconPhone,
    IconCalendar,
    IconTrain,
} from './Icons';

// ─── Color constants ─────────────────────────────────────────────────────────
const C = {
    brown: '#6B4226',
    beige: '#F5E6D3',
    cream: '#FFF8F0',
    copper: '#B8860B',
    copperDark: '#9a7009',
};

// ─── Navigation link data ────────────────────────────────────────────────────
const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
];

// ─── DesktopNavLink ───────────────────────────────────────────────────────────
function DesktopNavLink({ href, label, active, onActivate, scrolled }) {
    const [hovered, setHovered] = useState(false);

    const isLit = active || hovered;
    // When over a hero (not scrolled) we want white-toned text
    const baseColor = scrolled ? C.brown : 'rgba(255,255,255,0.88)';
    const litColor = scrolled ? C.copper : '#fff';

    return (
        <a
            href={href}
            onClick={(e) => { e.preventDefault(); onActivate(href); }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                display: 'inline-block',
                padding: '4px 2px',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: isLit ? litColor : baseColor,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
            }}
        >
            {label}
            {/* Animated copper underline */}
            <span
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: isLit ? '100%' : '0%',
                    height: '2px',
                    background: scrolled ? C.copper : '#fff',
                    borderRadius: '1px',
                    transition: 'width 0.25s ease',
                }}
            />
        </a>
    );
}

// ─── MobileNavLink ────────────────────────────────────────────────────────────
function MobileNavLink({ href, label, onClick }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            onClick={(e) => { e.preventDefault(); onClick(href); }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'block',
                padding: '15px 24px',
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '0.03em',
                color: hovered ? C.copper : C.brown,
                textDecoration: 'none',
                background: hovered ? C.beige : 'transparent',
                borderBottom: `1px solid rgba(107,66,38,0.08)`,
                transition: 'background 0.15s ease, color 0.15s ease',
            }}
        >
            {label}
        </a>
    );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const { isMobile, isTablet } = useWindowSize();
    const isNarrow = isMobile || isTablet;   // hamburger below 1024 px

    // ── Scroll listener ──────────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Close drawer when viewport widens beyond tablet ──────────────────────
    useEffect(() => {
        if (!isNarrow) setMenuOpen(false);
    }, [isNarrow]);

    // ── Lock body scroll while drawer is open ────────────────────────────────
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // ── Smooth-scroll handler ────────────────────────────────────────────────
    const handleNavClick = (href) => {
        setActiveLink(href);
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // ── Derived logo colours that adapt to scroll state ──────────────────────
    const logoNameColor = scrolled ? C.brown : '#fff';
    const logoSubColor = scrolled ? C.copper : 'rgba(255,255,255,0.78)';
    const hindiColor = scrolled ? 'rgba(107,66,38,0.32)' : 'rgba(255,255,255,0.28)';
    const iconCircleBg = scrolled ? C.brown : 'rgba(255,255,255,0.14)';
    const iconCircleBdr = scrolled ? 'none' : '1px solid rgba(255,255,255,0.34)';
    const iconColor = scrolled ? C.cream : '#fff';
    const burgerBg = scrolled ? 'rgba(107,66,38,0.07)' : 'rgba(255,255,255,0.12)';
    const burgerBdr = scrolled ? `1px solid rgba(107,66,38,0.18)` : '1px solid rgba(255,255,255,0.30)';
    const burgerColor = scrolled ? C.brown : '#fff';

    return (
        <>
            {/* ── Fixed navigation bar ──────────────────────────────────── */}
            <nav
                role="navigation"
                aria-label="Main navigation"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: scrolled ? 'rgba(255,248,240,0.97)' : 'transparent',
                    borderBottom: scrolled
                        ? '1px solid rgba(107,66,38,0.12)'
                        : '1px solid transparent',
                    boxShadow: scrolled ? '0 2px 20px rgba(107,66,38,0.08)' : 'none',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
                    transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                }}
            >
                <div
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        padding: isNarrow ? '0 16px' : '0 32px',
                        height: isNarrow ? '64px' : '72px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '24px',
                    }}
                >
                    {/* ── Logo ──────────────────────────────────────────── */}
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                        aria-label="The Pantry Car  go to home"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            textDecoration: 'none',
                            flexShrink: 0,
                        }}
                    >
                        {/* Train icon in a circle */}
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: isNarrow ? '38px' : '44px',
                                height: isNarrow ? '38px' : '44px',
                                borderRadius: '50%',
                                background: iconCircleBg,
                                border: iconCircleBdr,
                                flexShrink: 0,
                                transition: 'background 0.35s ease, border 0.35s ease',
                            }}
                        >
                            <IconTrain
                                size={isNarrow ? 19 : 23}
                                color={iconColor}
                            />
                        </span>

                        {/* Brand text stack */}
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                lineHeight: 1,
                            }}
                        >
                            {/* English name */}
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                                    fontSize: isNarrow ? '1.05rem' : '1.2rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: logoNameColor,
                                    whiteSpace: 'nowrap',
                                    transition: 'color 0.35s ease',
                                }}
                            >
                                The Pantry Car
                            </span>

                            {/* Subtitle */}
                            <span
                                style={{
                                    fontSize: '0.6rem',
                                    fontWeight: 400,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: logoSubColor,
                                    marginTop: '4px',
                                    whiteSpace: 'nowrap',
                                    transition: 'color 0.35s ease',
                                }}
                            >
                                Restaurant &amp; Bar
                            </span>

                            {/* Hindi name  desktop only, very subtle */}
                            {!isNarrow && (
                                <span
                                    aria-hidden="true"
                                    style={{
                                        fontSize: '0.56rem',
                                        fontWeight: 400,
                                        letterSpacing: '0.04em',
                                        color: hindiColor,
                                        marginTop: '2px',
                                        fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif",
                                        whiteSpace: 'nowrap',
                                        transition: 'color 0.35s ease',
                                    }}
                                >
                                    थे पैंट्री कार
                                </span>
                            )}
                        </span>
                    </a>

                    {/* ── Desktop nav links (centre) ─────────────────────── */}
                    {!isNarrow && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '28px',
                                flex: 1,
                                justifyContent: 'center',
                            }}
                        >
                            {NAV_LINKS.map(({ label, href }) => (
                                <DesktopNavLink
                                    key={href}
                                    href={href}
                                    label={label}
                                    active={activeLink === href}
                                    scrolled={scrolled}
                                    onActivate={handleNavClick}
                                />
                            ))}
                        </div>
                    )}

                    {/* ── Desktop CTA (right) ────────────────────────────── */}
                    {!isNarrow && (
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                            className="btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 20px',
                                background: C.copper,
                                color: '#fff',
                                borderRadius: '6px',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
                                boxShadow: '0 2px 8px rgba(184,134,11,0.30)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = C.copperDark;
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(184,134,11,0.40)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = C.copper;
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(184,134,11,0.30)';
                            }}
                        >
                            <IconCalendar size={15} color="#fff" />
                            Reserve Table
                        </a>
                    )}

                    {/* ── Mobile hamburger button ────────────────────────── */}
                    {isNarrow && (
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav-drawer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                border: burgerBdr,
                                background: burgerBg,
                                color: burgerColor,
                                cursor: 'pointer',
                                flexShrink: 0,
                                transition: 'background 0.2s ease, border 0.2s ease',
                                padding: 0,
                            }}
                        >
                            {menuOpen
                                ? <IconX size={20} color={burgerColor} />
                                : <IconMenu size={20} color={burgerColor} />}
                        </button>
                    )}
                </div>
            </nav>

            {/* ── Mobile drawer (backdrop + panel) ──────────────────────── */}
            {isNarrow && (
                <>
                    {/* Semi-transparent backdrop */}
                    <div
                        role="presentation"
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 998,
                            background: 'rgba(40,20,10,0.45)',
                            opacity: menuOpen ? 1 : 0,
                            pointerEvents: menuOpen ? 'auto' : 'none',
                            transition: 'opacity 0.3s ease',
                        }}
                    />

                    {/* Slide-down drawer panel */}
                    <div
                        id="mobile-nav-drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        style={{
                            position: 'fixed',
                            top: '64px',
                            left: 0,
                            right: 0,
                            zIndex: 999,
                            background: C.cream,
                            borderBottom: `2px solid ${C.beige}`,
                            boxShadow: '0 8px 32px rgba(107,66,38,0.15)',
                            transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                            opacity: menuOpen ? 1 : 0,
                            pointerEvents: menuOpen ? 'auto' : 'none',
                            transition: 'transform 0.3s ease, opacity 0.3s ease',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 64px)',
                        }}
                    >
                        {/* Nav links */}
                        <nav aria-label="Mobile navigation links">
                            {NAV_LINKS.map(({ label, href }) => (
                                <MobileNavLink
                                    key={href}
                                    href={href}
                                    label={label}
                                    onClick={handleNavClick}
                                />
                            ))}
                        </nav>

                        {/* Action buttons */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                padding: '20px 24px 28px',
                            }}
                        >
                            {/* Reserve Table */}
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                                className="btn-primary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    padding: '13px 20px',
                                    background: C.copper,
                                    color: '#fff',
                                    borderRadius: '8px',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.04em',
                                    textDecoration: 'none',
                                    boxShadow: '0 2px 10px rgba(184,134,11,0.28)',
                                    transition: 'background 0.2s ease',
                                }}
                            >
                                <IconCalendar size={17} color="#fff" />
                                Reserve Table
                            </a>

                            {/* Call Now */}
                            <a
                                href="tel:+919958055600"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    padding: '13px 20px',
                                    background: 'transparent',
                                    color: C.brown,
                                    border: `1.5px solid ${C.brown}`,
                                    borderRadius: '8px',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.04em',
                                    textDecoration: 'none',
                                    transition: 'background 0.2s ease, color 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = C.beige;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                <IconPhone size={17} color={C.brown} />
                                Call Now
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
