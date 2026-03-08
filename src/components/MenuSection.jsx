import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconCutlery, IconCoffee, IconCalendar, IconTrain, IconChefHat } from './Icons';
import { menuCategories, menuItems, chefSpecialPlatter } from '../data/menuData';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';

// Veg/Non Veg indicators
function VegDot({ size = 14 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `2px solid #27ae60`,
        borderRadius: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: size - 4,
          height: size - 4,
          background: '#27ae60',
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function NonVegDot({ size = 14 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `2px solid #c0392b`,
        borderRadius: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: size - 6,
          height: size - 6,
          background: '#c0392b',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

// Railway track divider
function RailwayTrack() {
  return (
    <div
      style={{
        height: '12px',
        width: '100%',
        background: 'repeating-linear-gradient(90deg, #4A4A4A 0px, #4A4A4A 20px, transparent 20px, transparent 28px)',
        borderTop: '2px solid #D4AF37',
        borderBottom: '2px solid #D4AF37',
        margin: '20px 0',
        position: 'relative',
      }}
    >
      {/* Railway ties */}
      <div
        style={{
          position: 'absolute',
          top: '-4px',
          left: '0',
          right: '0',
          height: '20px',
          background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 24px, #8B5A2B 24px, #8B5A2B 26px)',
        }}
      />
    </div>
  );
}

// Category icon
function getCategoryIcon(category) {
  if (category.includes('Coffee') || category.includes('Dessert')) return IconCoffee;
  if (category.includes('Pizza')) return IconChefHat;
  if (category.includes('Bread') || category.includes('Rice')) return IconCutlery;
  return IconTrain;
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuCategories[0]);
  const [filter, setFilter] = useState('All');
  const { isMobile, isTablet } = useWindowSize();

  const filteredItems = menuItems[activeTab]?.filter(item =>
    filter === 'All' || (filter === 'Veg' ? item.veg : !item.veg)
  ) || [];

  const CategoryIcon = getCategoryIcon(activeTab);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isSmall = isMobile;

  return (
    <section
      id="menu"
      style={{
        padding: isSmall ? '64px 0' : '100px 0',
        background: 'linear-gradient(135deg, #2A2018 0%, #3D2B1F 50%, #1A1209 100%)',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Railway-themed background decoration */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: `
            linear-gradient(90deg, transparent 48%, rgba(184, 115, 51, 0.03) 48%, rgba(184, 115, 51, 0.03) 52%, transparent 52%)
          `,
          backgroundSize: '80px 30px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isSmall ? '0 16px' : '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header with Railway Theme */}
        <div style={{ textAlign: 'center', marginBottom: isSmall ? '40px' : '60px' }}>
          {/* Railway lantern icon */}
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🚃</div>

          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: GOLD,
            border: `1px solid ${GOLD}`,
            borderRadius: '40px',
            padding: '6px 20px',
            marginBottom: '16px',
            background: 'rgba(212, 175, 55, 0.1)',
          }}>
            रेलवे पैंट्री कार मेनू
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: isSmall ? '2.2rem' : clamp(2.5, 4, 3.2),
            fontWeight: 800,
            color: TEXT,
            margin: '0 0 16px',
            lineHeight: 1.1,
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          }}>
            The Pantry Car{' '}
            <span style={{ color: COPPER }}>Menu</span>
          </h2>

          <h3 style={{
            fontFamily: 'Noto Sans Devanagari, serif',
            fontSize: isSmall ? '1.2rem' : '1.5rem',
            fontWeight: 700,
            color: GOLD,
            margin: '0 0 20px',
            lineHeight: 1.2,
          }}>
            स्वाद की यात्रा
          </h3>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            maxWidth: '400px',
            margin: '0 auto',
          }}>
            <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, transparent, ${COPPER})` }} />
            <div style={{ fontSize: '24px' }}>🍽️</div>
            <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${COPPER}, transparent)` }} />
          </div>

          <p style={{
            color: 'rgba(255,248,240,0.8)',
            maxWidth: '560px',
            margin: '24px auto 0',
            lineHeight: 1.75,
            fontSize: isSmall ? '14px' : '16px',
          }}>
            स्वादिष्ट व्यंजनों का सफ़र - Authentic Indian & Chinese cuisine with a railway twist
          </p>
        </div>

        {/* Railway Track Divider */}
        <RailwayTrack />

        {/* Category Tabs - Train Coach Style */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: isSmall ? 'flex-start' : 'center',
            padding: isSmall ? '0 0 10px 0' : '0',
            minWidth: 'max-content',
          }}>
            {menuCategories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setFilter('All'); }}
                  style={{
                    padding: isSmall ? '10px 18px' : '11px 22px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: isSmall ? '12px' : '13px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    background: isActive
                      ? `linear-gradient(135deg, ${COPPER} 0%, ${COPPER_LIGHT} 100%)`
                      : 'rgba(255,248,240,0.05)',
                    color: isActive ? CREAM : 'rgba(255,248,240,0.7)',
                    border: isActive
                      ? `2px solid ${GOLD}`
                      : '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: isActive
                      ? `0 4px 16px rgba(184, 115, 51, 0.4)`
                      : 'none',
                    fontFamily: 'inherit',
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Veg / Non-Veg Filter - Railway Ticket Style */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
          {[
            { id: 'All', label: 'All Items / सभी', dot: <span style={{ fontSize: '16px' }}>🍽️</span> },
            { id: 'Veg', label: 'Veg Only / शाकाहारी', dot: <VegDot size={14} /> },
            { id: 'Non-Veg', label: 'Non-Veg / मांसाहारी', dot: <NonVegDot size={14} /> },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'inherit',
                background: filter === f.id
                  ? `linear-gradient(135deg, ${BURGUNDY} 0%, #A52A2A 100%)`
                  : 'rgba(255,248,240,0.05)',
                color: filter === f.id ? CREAM : 'rgba(255,248,240,0.7)',
                border: filter === f.id
                  ? `2px solid ${GOLD}`
                  : '1px solid rgba(212, 175, 55, 0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              {f.dot}
              {f.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid - Train Ticket Style */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${isSmall ? '280px' : '320px'}, 1fr))`,
          gap: isSmall ? '14px' : '20px',
        }}>
          {filteredItems.length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 16px',
              color: 'rgba(255,248,240,0.6)',
              fontSize: '15px',
              background: 'rgba(255,248,240,0.03)',
              borderRadius: '12px',
              border: '1px dashed rgba(212, 175, 55, 0.3)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚂</div>
              <p>No items found for this filter.</p>
              <p style={{ fontSize: '13px', marginTop: '8px' }}>इस फ़िल्टर के लिए कोई आइटम नहीं मिला।</p>
            </div>
          )}

          {filteredItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              style={{
                padding: isSmall ? '18px' : '20px',
                borderRadius: '12px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
                background: `linear-gradient(135deg, #FFF8DC 0%, #FFF8F0 100%)`,
                border: `2px solid ${COPPER}`,
                boxShadow: `0 4px 16px rgba(184, 115, 51, 0.2)`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) rotate(-0.5deg)';
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.boxShadow = `0 8px 28px rgba(212, 175, 55, 0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.borderColor = COPPER;
                e.currentTarget.style.boxShadow = `0 4px 16px rgba(184, 115, 51, 0.2)`;
              }}
            >
              {/* Train ticket notch effects */}
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                background: '#2A2018',
                borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute',
                right: '-10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                background: '#2A2018',
                borderRadius: '50%',
              }} />

              {/* Dashed line effect */}
              <div style={{
                position: 'absolute',
                left: '10px',
                right: '10px',
                top: '50%',
                borderTop: `2px dashed rgba(184, 115, 51, 0.3)`,
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                flexShrink: 0,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${COPPER} 0%, ${COPPER_LIGHT} 100%)`,
                border: `2px solid ${GOLD}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '4px',
                color: CREAM,
              }}>
                <CategoryIcon size={20} color={CREAM} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0, marginTop: '4px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: '6px',
                }}>
                  <h3 style={{
                    color: TEXT_DARK,
                    fontSize: isSmall ? '14px' : '15px',
                    fontWeight: 700,
                    fontFamily: 'Playfair Display, Georgia, serif',
                    flex: 1,
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {item.name}
                  </h3>
                  <div style={{ flexShrink: 0 }}>
                    {item.veg ? <VegDot size={14} /> : <NonVegDot size={14} />}
                  </div>
                </div>

                <p style={{
                  color: '#7A6455',
                  fontSize: '12px',
                  lineHeight: 1.5,
                  marginBottom: '10px',
                  margin: '4px 0 10px',
                }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      color: BURGUNDY,
                      fontSize: isSmall ? '16px' : '18px',
                      fontWeight: 800,
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}>
                      ₹{item.price}
                    </span>
                  </div>
                  {item.tag && (
                    <span style={{
                      background: `linear-gradient(135deg, ${GOLD} 0%, #E6C259 100%)`,
                      color: TEXT_DARK,
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}>
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Special Platter - Railway Coach Style */}
        <div style={{
          marginTop: isSmall ? '48px' : '70px',
          borderRadius: '16px',
          background: `linear-gradient(135deg, rgba(184,115,51,0.15), rgba(212,175,55,0.1))`,
          border: `3px solid ${GOLD}`,
          padding: isSmall ? '28px 24px' : '44px 52px',
          display: 'flex',
          flexDirection: isSmall ? 'column' : 'row',
          alignItems: isSmall ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Railway coach top accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: `linear-gradient(90deg, ${BURGUNDY}, ${COPPER}, ${GOLD}, ${COPPER}, ${BURGUNDY})`,
          }} />

          {/* Train wheels decoration */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: `${15 + i * 25}%`,
                width: '30px',
                height: '30px',
                border: `3px solid ${COPPER}`,
                borderRadius: '50%',
                background: '#2A2018',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '10px', height: '10px', background: GOLD, borderRadius: '50%' }} />
            </div>
          ))}

          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: GOLD,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              <span>👨‍🍳</span>
              Chef's Recommendation / शेफ़ स्पेशल
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: isSmall ? '1.4rem' : '1.9rem',
              color: TEXT,
              margin: '0 0 10px',
              fontWeight: 800,
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}>
              Chef's Special Platter
            </h3>
            <p style={{ color: 'rgba(255,248,240,0.85)', fontSize: isSmall ? '14px' : '15px', margin: '0 0 12px', lineHeight: 1.6 }}>
              {chefSpecialPlatter.description}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              {chefSpecialPlatter.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '12px',
                    color: COPPER_LIGHT,
                    background: 'rgba(255,248,240,0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            textAlign: isSmall ? 'left' : 'right',
            flexShrink: 0,
            marginLeft: isSmall ? '0' : 'auto',
          }}>
            <div style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: isSmall ? '42px' : '58px',
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1,
              marginBottom: '14px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            }}>
              ₹{chefSpecialPlatter.price}
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,248,240,0.7)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              For Two Persons / दो व्यक्तियों के लिए
            </div>
            <button
              onClick={() => scrollTo('#reservation')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: `linear-gradient(135deg, ${BURGUNDY} 0%, #A52A2A 100%)`,
                color: CREAM,
                border: `2px solid ${GOLD}`,
                borderRadius: '10px',
                padding: isSmall ? '12px 24px' : '14px 30px',
                fontSize: isSmall ? '14px' : '15px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
                letterSpacing: '0.5px',
                boxShadow: `0 4px 16px rgba(128, 0, 32, 0.4)`,
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, #A52A2A 0%, ${BURGUNDY} 100%)`;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 24px rgba(212, 175, 55, 0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${BURGUNDY} 0%, #A52A2A 100%)`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 16px rgba(128, 0, 32, 0.4)`;
              }}
            >
              <IconCalendar size={18} color={CREAM} />
              Reserve Now / बुक करें
            </button>
          </div>
        </div>

        {/* Bottom Railway Decoration */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: 'rgba(255,248,240,0.5)',
          fontSize: '13px',
          letterSpacing: '2px',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🚂</div>
          <div>THE PANTRY CAR | थे पैंट्री कार</div>
          <div style={{ fontSize: '11px', marginTop: '4px', color: GOLD }}>Journey Through Flavors | स्वाद की यात्रा</div>
        </div>

      </div>
    </section>
  );
}

function clamp(min, vw, max) {
  return `clamp(${min}rem, ${vw}vw, ${max}rem)`;
}
