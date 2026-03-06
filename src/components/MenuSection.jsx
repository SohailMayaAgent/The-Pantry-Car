import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { IconVegDot, IconNonVegDot, IconCutlery, IconCoffee, IconCalendar } from './Icons';

const menuData = {
    'Starters': [
        { name: 'Paneer Tikka', desc: 'Cottage cheese marinated in aromatic spices, tandoor grilled', price: '₹279', tag: 'Bestseller', veg: true },
        { name: 'Chicken Tikka', desc: 'Boneless chicken pieces marinated in yogurt & spices', price: '₹329', tag: 'Popular', veg: false },
        { name: 'Crispy Corn', desc: 'Golden fried corn tossed in tangy spice mix', price: '₹199', tag: 'Veg Fav', veg: true },
        { name: 'Fish Fingers', desc: 'Crispy battered fish with tartar sauce', price: '₹349', tag: 'Fresh', veg: false },
        { name: 'Mushroom Galawat', desc: 'Melt-in-mouth mushroom kebabs with mint chutney', price: '₹249', tag: "Chef's Special", veg: true },
        { name: 'Tandoori Prawns', desc: 'Jumbo prawns in tandoori marinade, charcoal grilled', price: '₹449', tag: 'Premium', veg: false },
    ],
    'Main Course': [
        { name: 'Butter Chicken', desc: 'Tender chicken in rich creamy tomato-butter gravy', price: '₹349', tag: 'Classic', veg: false },
        { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in creamy butter sauce', price: '₹249', tag: 'Must Try', veg: true },
        { name: 'Paneer Lababdar', desc: 'Cottage cheese in bold spiced tomato gravy', price: '₹289', tag: 'Rich', veg: true },
        { name: "Chef's Special Platter", desc: 'Curated selection of our finest dishes for two', price: '₹799', tag: "Chef's Special", veg: false },
        { name: 'Herb Grilled Chicken', desc: 'Juicy chicken breast with rosemary and thyme', price: '₹399', tag: 'New', veg: false },
        { name: 'Veg Biryani', desc: 'Fragrant basmati rice with seasonal vegetables', price: '₹269', tag: 'Aromatic', veg: true },
    ],
    'Coffee & Beverages': [
        { name: 'Cappuccino', desc: 'Rich espresso with steamed milk and foam', price: '₹149', tag: 'Popular', veg: true },
        { name: 'Cold Brew', desc: 'Slow-steeped cold coffee, smooth and bold', price: '₹179', tag: 'Refreshing', veg: true },
        { name: 'Masala Chai', desc: 'Traditional spiced Indian tea', price: '₹79', tag: 'Classic', veg: true },
        { name: 'Fresh Lime Soda', desc: 'Sweet or salty, always refreshing', price: '₹99', tag: 'Cool', veg: true },
        { name: 'Mango Lassi', desc: 'Creamy yogurt blended with Alphonso mango', price: '₹149', tag: 'Seasonal', veg: true },
        { name: 'Mojito (Virgin)', desc: 'Muddled mint and lime with soda', price: '₹169', tag: 'Fresh', veg: true },
    ],
    'Desserts': [
        { name: 'Gulab Jamun', desc: 'Warm khoya dumplings in rose syrup', price: '₹149', tag: 'Classic', veg: true },
        { name: 'Brownie Sundae', desc: 'Fudgy brownie with vanilla ice cream and chocolate sauce', price: '₹199', tag: 'Favourite', veg: true },
        { name: 'Rasmalai', desc: 'Soft paneer discs in saffron cardamom milk', price: '₹169', tag: 'Traditional', veg: true },
        { name: 'Phirni', desc: 'Creamy rice pudding topped with pistachios', price: '₹129', tag: "Chef's Pick", veg: true },
    ],
};

const BROWN = '#6B4226';
const COPPER = '#B8860B';
const TEXT = '#3D2B1F';
const BG = '#F5E6D3';

function getCategoryIcon(category) {
    if (category === 'Coffee & Beverages') return IconCoffee;
    return IconCutlery;
}

function isChefSpecial(tag) {
    return tag === "Chef's Special" || tag === "Chef's Pick";
}

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState('Starters');
    const [filter, setFilter] = useState('All');
    const tabs = Object.keys(menuData);
    const { isMobile } = useWindowSize();

    const filtered = menuData[activeTab].filter(item =>
        filter === 'All' || (filter === 'Veg' ? item.veg : !item.veg)
    );

    const CategoryIcon = getCategoryIcon(activeTab);

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="menu"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: BG,
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div style={{
                        display: 'inline-block',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: BROWN,
                        border: `1px solid rgba(107,66,38,0.35)`,
                        borderRadius: '40px',
                        padding: '6px 18px',
                        marginBottom: '16px',
                        background: 'rgba(107,66,38,0.07)',
                    }}>
                        Our Menu
                    </div>
                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '2rem' : '2.8rem',
                        fontWeight: 700,
                        color: TEXT,
                        margin: '0 0 16px',
                        lineHeight: 1.2,
                    }}>
                        Signature{' '}
                        <span style={{ color: COPPER }}>Flavours</span>
                    </h2>
                    <div style={{
                        width: '56px',
                        height: '3px',
                        background: `linear-gradient(90deg, ${COPPER}, ${BROWN})`,
                        borderRadius: '2px',
                        margin: '0 auto 20px',
                    }} />
                    <p style={{
                        color: '#7a5c4a',
                        maxWidth: '560px',
                        margin: '0 auto',
                        lineHeight: 1.75,
                        fontSize: isMobile ? '14px' : '16px',
                    }}>
                        From artisan coffees to hearty mains, every dish is thoughtfully crafted with seasonal ingredients and a dash of love.
                    </p>
                </div>

                {/* Category Tabs */}
                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '20px' }}>
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: isMobile ? 'flex-start' : 'center',
                        padding: isMobile ? '0 0 10px 0' : '0',
                        minWidth: 'max-content',
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setActiveTab(tab); setFilter('All'); }}
                                style={{
                                    padding: isMobile ? '10px 20px' : '11px 26px',
                                    borderRadius: '40px',
                                    fontWeight: 600,
                                    fontSize: isMobile ? '13px' : '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    whiteSpace: 'nowrap',
                                    background: activeTab === tab ? BROWN : '#FFFFFF',
                                    color: activeTab === tab ? '#FFFFFF' : BROWN,
                                    border: activeTab === tab
                                        ? `1.5px solid ${BROWN}`
                                        : '1.5px solid rgba(107,66,38,0.25)',
                                    boxShadow: activeTab === tab
                                        ? '0 4px 16px rgba(107,66,38,0.22)'
                                        : '0 1px 4px rgba(107,66,38,0.08)',
                                    fontFamily: 'inherit',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Veg / Non-Veg Filter */}
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    justifyContent: 'center',
                    marginBottom: '36px',
                    flexWrap: 'wrap',
                }}>
                    {[
                        { id: 'All', label: 'All Items', dot: null },
                        { id: 'Veg', label: 'Veg Only', dot: <IconVegDot size={12} /> },
                        { id: 'Non-Veg', label: 'Non-Veg', dot: <IconNonVegDot size={12} /> },
                    ].map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            style={{
                                padding: '7px 18px',
                                borderRadius: '40px',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontFamily: 'inherit',
                                background: filter === f.id ? 'rgba(107,66,38,0.10)' : 'transparent',
                                color: filter === f.id ? BROWN : '#9a7a6a',
                                border: filter === f.id
                                    ? `1px solid ${BROWN}`
                                    : '1px solid rgba(107,66,38,0.18)',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {f.dot}
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Menu Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? '280px' : '310px'}, 1fr))`,
                    gap: isMobile ? '14px' : '20px',
                }}>
                    {filtered.length === 0 && (
                        <div style={{
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '48px 16px',
                            color: '#9a7a6a',
                            fontSize: '15px',
                        }}>
                            No items found for the selected filter.
                        </div>
                    )}
                    {filtered.map((item) => {
                        const special = isChefSpecial(item.tag);
                        return (
                            <div
                                key={item.name}
                                style={{
                                    padding: isMobile ? '18px' : '22px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    gap: '14px',
                                    alignItems: 'flex-start',
                                    transition: 'all 0.3s ease',
                                    background: '#FFFFFF',
                                    border: special
                                        ? `1.5px solid ${COPPER}`
                                        : '1.5px solid rgba(107,66,38,0.12)',
                                    boxShadow: special
                                        ? '0 2px 16px rgba(184,134,11,0.13)'
                                        : '0 1px 6px rgba(107,66,38,0.06)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = special ? COPPER : 'rgba(107,66,38,0.25)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = special
                                        ? '0 10px 32px rgba(184,134,11,0.18)'
                                        : '0 8px 24px rgba(107,66,38,0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = special ? COPPER : 'rgba(107,66,38,0.12)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = special
                                        ? '0 2px 16px rgba(184,134,11,0.13)'
                                        : '0 1px 6px rgba(107,66,38,0.06)';
                                }}
                            >
                                {/* Gold top accent stripe for Chef's Special */}
                                {special && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: `linear-gradient(90deg, ${COPPER}, #D4A017)`,
                                        borderRadius: '12px 12px 0 0',
                                    }} />
                                )}

                                {/* Icon placeholder */}
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    flexShrink: 0,
                                    borderRadius: '10px',
                                    background: special
                                        ? 'rgba(184,134,11,0.10)'
                                        : 'rgba(107,66,38,0.07)',
                                    border: special
                                        ? `1px solid rgba(184,134,11,0.3)`
                                        : '1px solid rgba(107,66,38,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: special ? '4px' : '0',
                                }}>
                                    <CategoryIcon size={20} color={special ? COPPER : BROWN} />
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '8px',
                                        marginBottom: '4px',
                                        marginTop: special ? '4px' : '0',
                                    }}>
                                        <h3 style={{
                                            color: TEXT,
                                            fontSize: isMobile ? '15px' : '16px',
                                            fontWeight: 700,
                                            fontFamily: 'Playfair Display, Georgia, serif',
                                            flex: 1,
                                            margin: 0,
                                            lineHeight: 1.3,
                                        }}>
                                            {item.name}
                                        </h3>
                                        <div style={{ flexShrink: 0, marginTop: '2px' }}>
                                            {item.veg ? <IconVegDot size={14} /> : <IconNonVegDot size={14} />}
                                        </div>
                                    </div>

                                    <p style={{
                                        color: '#9a7a6a',
                                        fontSize: '13px',
                                        lineHeight: 1.55,
                                        marginBottom: '12px',
                                        margin: '4px 0 12px',
                                    }}>
                                        {item.desc}
                                    </p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                            <span style={{
                                                color: COPPER,
                                                fontSize: isMobile ? '16px' : '18px',
                                                fontWeight: 700,
                                                fontFamily: 'Playfair Display, Georgia, serif',
                                            }}>
                                                {item.price}
                                            </span>
                                            <span style={{
                                                background: special
                                                    ? 'rgba(184,134,11,0.12)'
                                                    : 'rgba(107,66,38,0.08)',
                                                border: special
                                                    ? `1px solid rgba(184,134,11,0.35)`
                                                    : '1px solid rgba(107,66,38,0.18)',
                                                color: special ? COPPER : BROWN,
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                padding: '2px 9px',
                                                borderRadius: '20px',
                                                letterSpacing: '0.3px',
                                            }}>
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Chef's Special Platter Bottom Banner */}
                <div style={{
                    marginTop: isMobile ? '48px' : '70px',
                    borderRadius: '14px',
                    background: `linear-gradient(135deg, rgba(184,134,11,0.12), rgba(107,66,38,0.08))`,
                    border: `1.5px solid rgba(184,134,11,0.40)`,
                    padding: isMobile ? '28px 20px' : '44px 52px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Decorative top border accent */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${COPPER}, #D4A017, ${COPPER})`,
                        borderRadius: '14px 14px 0 0',
                    }} />

                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            color: COPPER,
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                        }}>
                            <span style={{
                                width: '20px',
                                height: '2px',
                                background: COPPER,
                                display: 'inline-block',
                                borderRadius: '2px',
                            }} />
                            Chef's Recommendation
                        </div>
                        <h3 style={{
                            fontFamily: 'Playfair Display, Georgia, serif',
                            fontSize: isMobile ? '1.4rem' : '1.75rem',
                            color: TEXT,
                            margin: '0 0 8px',
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}>
                            Chef's Special Platter
                        </h3>
                        <p style={{
                            color: '#7a5c4a',
                            fontSize: isMobile ? '14px' : '15px',
                            margin: 0,
                            lineHeight: 1.6,
                        }}>
                            A curated selection of our finest dishes  starters, mains &amp; sides, for two.
                        </p>
                    </div>

                    <div style={{
                        textAlign: isMobile ? 'left' : 'right',
                        flexShrink: 0,
                    }}>
                        <div style={{
                            fontFamily: 'Playfair Display, Georgia, serif',
                            fontSize: isMobile ? '38px' : '52px',
                            fontWeight: 700,
                            color: COPPER,
                            lineHeight: 1,
                            marginBottom: '4px',
                        }}>
                            ₹799
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: '#9a7a6a',
                            marginBottom: '16px',
                        }}>
                            for two persons
                        </div>
                        <button
                            onClick={() => scrollTo('#reservation')}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: BROWN,
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '8px',
                                padding: isMobile ? '11px 22px' : '13px 28px',
                                fontSize: isMobile ? '14px' : '15px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                                fontFamily: 'inherit',
                                letterSpacing: '0.3px',
                                boxShadow: '0 4px 16px rgba(107,66,38,0.25)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#5a3520';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(107,66,38,0.35)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = BROWN;
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(107,66,38,0.25)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <IconCalendar size={17} color="#FFFFFF" />
                            Reserve to Try
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
