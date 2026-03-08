import { useState, useEffect } from 'react';
import { IconCalendar, IconWhatsApp, IconArrowUp } from './components/Icons';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import OrderOnlineSection from './components/OrderOnlineSection';
import EventsSection from './components/EventsSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const BG_DARK = '#1A1209';

export default function PublicSite() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      background: `linear-gradient(135deg, ${BG_DARK} 0%, #2A2018 50%, ${BURGUNDY} 100%)`,
      minHeight: '100vh',
    }}>
      {/* Navbar is embedded inside HeroSection's white card */}
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <OrderOnlineSection />
      <EventsSection />
      <ReviewsSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
      <Footer />

      {/* Floating Reserve button - Railway style */}
      <div style={{
        position: 'fixed', right: '24px', bottom: '100px', zIndex: 900,
        animation: 'gentle-pulse 3s ease-in-out infinite',
      }}>
        <button
          onClick={() => scrollTo('#reservation')}
          style={{
            borderRadius: '50px',
            padding: '14px 22px',
            fontSize: '14px',
            fontWeight: 700,
            flexDirection: 'column',
            gap: '2px',
            display: 'flex',
            alignItems: 'center',
            background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
            color: CREAM,
            border: `2px solid ${GOLD}`,
            cursor: 'pointer',
            boxShadow: `0 8px 30px rgba(184,115,51,0.4)`,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = `0 12px 40px rgba(212,175,55,0.5)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = `0 8px 30px rgba(184,115,51,0.4)`;
          }}
        >
          <IconCalendar size={20} color={CREAM} />
          <span style={{ fontSize: '11px', letterSpacing: '0.5px', position: 'relative', zIndex: 1 }}>
            RESERVE
          </span>
        </button>
      </div>

      {/* WhatsApp floating button - with railway styling */}
      <div style={{ position: 'fixed', right: '24px', bottom: '24px', zIndex: 900 }}>
        <a
          href="https://wa.me/919958055600?text=Hi! I'd like to reserve a table at The Pantry Car, Sector 78 Noida."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#25d366',
            boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
            textDecoration: 'none',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '2px solid #128C7E',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 30px rgba(37,211,102,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)';
          }}
        >
          <IconWhatsApp size={28} color="#fff" />
        </a>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <div style={{ position: 'fixed', left: '24px', bottom: '24px', zIndex: 900 }}>
          <button
            onClick={scrollTop}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,248,240,0.95)',
              border: `2px solid ${GOLD}`,
              color: CREAM,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: `0 2px 12px rgba(212,175,55,0.2)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.border = `2px solid ${GOLD}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,248,240,0.95)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = `2px solid ${GOLD}`;
            }}
            aria-label="Scroll to top"
          >
            <IconArrowUp size={20} color={CREAM} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes scale-in { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gentle-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
      `}</style>
    </div>
  );
}
