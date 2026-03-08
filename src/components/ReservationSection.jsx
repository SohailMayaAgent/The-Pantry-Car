import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import reservationService from '../services/reservation.service';
import { IconUser, IconPhone, IconMail, IconCalendar, IconUsers, IconClock, IconCheckCircle, IconWhatsApp, IconTrain } from './Icons';

// Railway-themed colors
const COPPER = '#B87333';
const COPPER_LIGHT = '#CD853F';
const BURGUNDY = '#800020';
const GOLD = '#D4AF37';
const CREAM = '#FFF8F0';
const TEXT = '#FFF8F0';
const TEXT_DARK = '#3D2B1F';

const timeSlots = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];
const initialForm = { name: '', phone: '', email: '', date: '', guests: '2', time: '', occasion: '', notes: '' };

export default function ReservationSection() {
    const { isMobile, isTablet } = useWindowSize();
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [reservation, setReservation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterJoined, setNewsletterJoined] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        setError(null);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.date || !form.time) {
            setError('Please fill in all required fields.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const result = await reservationService.create(form);
            setReservation(result);
            setSubmitted(true);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again or call us directly.');
        } finally {
            setLoading(false);
        }
    };

    const fieldStyle = {
        width: '100%',
        background: CREAM,
        border: `2px solid rgba(184, 115, 51, 0.2)`,
        color: TEXT_DARK,
        padding: '12px 14px',
        borderRadius: '8px',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        color: 'rgba(255,248,240,0.7)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        marginBottom: '6px',
    };

    return (
        <section
            id="reservation"
            style={{
                padding: isMobile ? '64px 0' : '100px 0',
                background: `linear-gradient(180deg, #2A2018 0%, ${BURGUNDY} 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Railway track background */}
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
                            टेबल बुक करें
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 700,
                        color: TEXT,
                        marginBottom: '12px',
                    }}>
                        Reserve Your{' '}
                        <span style={{ color: GOLD }}>Table</span>
                    </h2>

                    <h3 style={{
                        fontFamily: 'Noto Sans Devanagari, serif',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 600,
                        color: COPPER_LIGHT,
                        marginBottom: '16px',
                    }}>
                        अपनी टेबल बुक करें
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
                    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 380px',
                    gap: isMobile ? '40px' : '48px',
                    alignItems: 'start',
                }}>
                    {/* Form Card - Railway ticket style */}
                    <div style={{
                        background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                        border: `3px solid ${COPPER}`,
                        borderRadius: '16px',
                        padding: isMobile ? '24px 20px' : '32px',
                        boxShadow: `0 8px 32px rgba(184,115,51,0.3)`,
                        position: 'relative',
                    }}>
                        {/* Railway ticket notches */}
                        <div style={{
                            position: 'absolute', left: '-14px', top: '50%',
                            width: '28px', height: '28px',
                            background: BURGUNDY, borderRadius: '50%',
                        }} />
                        <div style={{
                            position: 'absolute', right: '-14px', top: '50%',
                            width: '28px', height: '28px',
                            background: BURGUNDY, borderRadius: '50%',
                        }} />

                        {submitted && reservation ? (
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '80px', height: '80px',
                                        background: `linear-gradient(135deg, #27ae60, #2ecc71)`,
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: `3px solid ${GOLD}`,
                                        boxShadow: `0 8px 24px rgba(39,174,96,0.3)`,
                                    }}>
                                        <IconCheckCircle size={40} color={CREAM} />
                                    </div>
                                </div>
                                <h3 style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: isMobile ? '1.5rem' : '1.8rem',
                                    color: TEXT_DARK,
                                    marginBottom: '8px',
                                }}>
                                    Table Reserved!
                                </h3>
                                <div style={{
                                    display: 'inline-block',
                                    background: `rgba(184,115,51,0.1)`,
                                    border: `1px solid ${COPPER}`,
                                    borderRadius: '8px',
                                    padding: '8px 20px',
                                    marginBottom: '16px',
                                }}>
                                    <span style={{ color: '#7A6455', fontSize: '12px' }}>Reservation ID: </span>
                                    <span style={{ color: BURGUNDY, fontWeight: 700, fontSize: '16px', letterSpacing: '1px' }}>
                                        {reservation.reservationId}
                                    </span>
                                </div>
                                <p style={{ color: '#7A6455', marginBottom: '8px', fontSize: '14px' }}>
                                    We'll confirm via WhatsApp/call at <strong style={{ color: BURGUNDY }}>{form.phone}</strong>
                                </p>
                                <p style={{
                                    color: '#9A8478',
                                    fontSize: '13px',
                                    marginBottom: '24px',
                                    padding: '12px',
                                    background: 'rgba(184,115,51,0.08)',
                                    borderRadius: '8px',
                                }}>
                                    📅 {reservation.date} · 🕐 {reservation.time} · 👥 {reservation.guests} Guests
                                </p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href={`https://wa.me/919958055600?text=Hi! I just reserved a table at The Pantry Car. ID: ${reservation.reservationId}. Name: ${form.name}, Date: ${reservation.date}, Time: ${reservation.time}, Guests: ${reservation.guests}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            background: '#25d366',
                                            color: CREAM,
                                            padding: '12px 24px',
                                            borderRadius: '10px',
                                            fontWeight: 700, fontSize: '14px',
                                            textDecoration: 'none',
                                            border: '2px solid #128C7E',
                                            boxShadow: `0 4px 16px rgba(37,211,102,0.3)`,
                                        }}
                                    >
                                        <IconWhatsApp size={18} color={CREAM} />
                                        <span>Confirm via WhatsApp</span>
                                    </a>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setReservation(null);
                                            setForm(initialForm);
                                        }}
                                        style={{
                                            background: 'transparent',
                                            color: BURGUNDY,
                                            padding: '12px 24px',
                                            borderRadius: '10px',
                                            fontWeight: 700, fontSize: '14px',
                                            border: `2px solid ${BURGUNDY}`,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Book Another
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {error && (
                                    <div style={{
                                        background: 'rgba(192, 57, 43, 0.1)',
                                        border: '1px solid rgba(192, 57, 43, 0.3)',
                                        borderRadius: '8px',
                                        padding: '12px 16px',
                                        marginBottom: '20px',
                                        color: '#c0392b',
                                        fontSize: '14px',
                                    }}>
                                        {error}
                                    </div>
                                )}

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '16px',
                                    marginBottom: '16px',
                                }}>
                                    {[
                                        { name: 'name', label: 'Full Name / नाम *', Icon: IconUser, placeholder: 'Your name', type: 'text' },
                                        { name: 'phone', label: 'Phone / फोन *', Icon: IconPhone, placeholder: '+91 99999 99999', type: 'tel' },
                                        { name: 'email', label: 'Email (Optional)', Icon: IconMail, placeholder: 'your@email.com', type: 'email' },
                                        { name: 'date', label: 'Date / तारीख *', Icon: IconCalendar, type: 'date', min: today },
                                    ].map((field) => (
                                        <div key={field.name}>
                                            <label style={labelStyle}>{field.label}</label>
                                            <div style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute', left: '12px', top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    pointerEvents: 'none', display: 'flex',
                                                }}>
                                                    <field.Icon size={16} color="rgba(107,66,38,0.4)" />
                                                </div>
                                                <input
                                                    {...field}
                                                    required={field.required}
                                                    value={form[field.name]}
                                                    onChange={handleChange}
                                                    style={{
                                                        ...fieldStyle,
                                                        paddingLeft: '38px',
                                                        cursor: 'pointer',
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = GOLD}
                                                    onBlur={(e) => e.target.style.borderColor = 'rgba(184, 115, 51, 0.2)'}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    {/* Guests */}
                                    <div>
                                        <label style={labelStyle}>Guests / मेहमान *</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute', left: '12px', top: '50%',
                                                transform: 'translateY(-50%)',
                                                pointerEvents: 'none', display: 'flex',
                                            }}>
                                                <IconUsers size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <select
                                                name="guests"
                                                value={form.guests}
                                                onChange={handleChange}
                                                style={{
                                                    ...fieldStyle,
                                                    paddingLeft: '38px',
                                                    cursor: 'pointer',
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = GOLD}
                                                onBlur={(e) => e.target.style.borderColor = 'rgba(184, 115, 51, 0.2)'}
                                            >
                                                {['1', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '25+'].map(n => (
                                                    <option key={n} value={n} style={{ background: CREAM, color: TEXT_DARK }}>
                                                        {n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Occasion */}
                                    <div>
                                        <label style={labelStyle}>Occasion / मौका</label>
                                        <select
                                            name="occasion"
                                            value={form.occasion}
                                            onChange={handleChange}
                                            style={{
                                                ...fieldStyle,
                                                cursor: 'pointer',
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = GOLD}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(184, 115, 51, 0.2)'}
                                        >
                                            {['', 'Birthday', 'Anniversary', 'Date Night', 'Corporate', 'Friends Outing', 'Family Dinner'].map(o => (
                                                <option key={o} value={o} style={{ background: CREAM, color: TEXT_DARK }}>
                                                    {o || 'Select occasion'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={labelStyle}>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                            <IconClock size={14} color={GOLD} /> Preferred Time / समय *
                                        </span>
                                    </label>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${isMobile ? 3 : 4}, 1fr)`,
                                        gap: '8px',
                                    }}>
                                        {timeSlots.map((slot) => (
                                            <button
                                                type="button"
                                                key={slot}
                                                onClick={() => setForm({ ...form, time: slot })}
                                                style={{
                                                    padding: '10px 6px',
                                                    borderRadius: '8px',
                                                    fontSize: isMobile ? '11px' : '12px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    textAlign: 'center',
                                                    background: form.time === slot
                                                        ? `linear-gradient(135deg, ${BURGUNDY}, ${COPPER})`
                                                        : CREAM,
                                                    color: form.time === slot ? CREAM : TEXT_DARK,
                                                    border: form.time === slot
                                                        ? `2px solid ${GOLD}`
                                                        : `2px solid rgba(184, 115, 51, 0.2)`,
                                                    boxShadow: form.time === slot
                                                        ? `0 4px 16px rgba(184,115,51,0.3)`
                                                        : 'none',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (form.time !== slot) {
                                                        e.currentTarget.style.borderColor = GOLD;
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (form.time !== slot) {
                                                        e.currentTarget.style.borderColor = 'rgba(184, 115, 51, 0.2)';
                                                    }
                                                }}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Notes */}
                                <div style={{ marginBottom: '24px' }}>
                                    <label style={labelStyle}>Special Requests / विशेष अनुरोध</label>
                                    <textarea
                                        name="notes"
                                        value={form.notes}
                                        onChange={handleChange}
                                        placeholder="Allergies, decorations, cake, seating preferences..."
                                        rows={3}
                                        style={{
                                            ...fieldStyle,
                                            resize: 'vertical',
                                            fontFamily: 'inherit',
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = GOLD}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(184, 115, 51, 0.2)'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        background: `linear-gradient(135deg, ${BURGUNDY} 0%, ${COPPER} 100%)`,
                                        color: CREAM,
                                        border: `2px solid ${GOLD}`,
                                        padding: '14px',
                                        borderRadius: '10px',
                                        fontWeight: 700,
                                        fontSize: '15px',
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                        boxShadow: `0 4px 20px rgba(184,115,51,0.3)`,
                                        transition: 'all 0.2s ease',
                                        opacity: loading ? 0.7 : 1,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!loading) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = `0 6px 28px rgba(212,175,55,0.4)`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `0 4px 20px rgba(184,115,51,0.3)`;
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <span style={{
                                                display: 'inline-block',
                                                width: '18px',
                                                height: '18px',
                                                border: '2px solid rgba(255,248,240,0.3)',
                                                borderTopColor: CREAM,
                                                borderRadius: '50%',
                                                animation: 'spin 0.8s linear infinite',
                                            }} />
                                            Confirming...
                                        </>
                                    ) : (
                                        <>
                                            <IconCalendar size={18} color={CREAM} />
                                            Confirm Reservation
                                        </>
                                    )}
                                </button>

                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    marginTop: '12px',
                                    flexWrap: 'wrap',
                                }}>
                                    <a
                                        href="tel:+919958055600"
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            background: CREAM,
                                            border: `2px solid ${COPPER}`,
                                            color: TEXT_DARK,
                                            padding: '11px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                        }}
                                    >
                                        <IconPhone size={16} color={BURGUNDY} /> Call to Book
                                    </a>
                                    <a
                                        href="https://wa.me/919958055600?text=Hi! I'd like to reserve a table at The Pantry Car."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            background: 'rgba(37,211,102,0.15)',
                                            border: '2px solid #25d366',
                                            color: '#25d366',
                                            padding: '11px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                        }}
                                    >
                                        <IconWhatsApp size={16} color="#25d366" /> WhatsApp
                                    </a>
                                </div>

                                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                            </form>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Opening Hours */}
                        <div style={{
                            background: `linear-gradient(135deg, ${CREAM} 0%, #FFF8DC 100%)`,
                            border: `2px solid ${COPPER}`,
                            borderRadius: '12px',
                            padding: isMobile ? '20px' : '24px',
                            boxShadow: `0 4px 16px rgba(184,115,51,0.2)`,
                        }}>
                            <h4 style={{
                                color: TEXT_DARK,
                                fontSize: '15px',
                                fontWeight: 700,
                                marginBottom: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <IconClock size={20} color={BURGUNDY} />
                                Opening Hours
                            </h4>
                            {[
                                ['Monday – Sunday', '11:00 AM – 11:00 PM'],
                                ['Public Holidays', '11:00 AM – 11:00 PM'],
                            ].map(([day, hours]) => (
                                <div key={day} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px 0',
                                    borderBottom: '1px solid rgba(184, 115, 51, 0.15)',
                                    fontSize: '14px',
                                }}>
                                    <span style={{ color: '#7A6455' }}>{day}</span>
                                    <span style={{ color: COPPER_LIGHT, fontWeight: 700 }}>{hours}</span>
                                </div>
                            ))}
                            <div style={{
                                marginTop: '12px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'rgba(39,174,96,0.12)',
                                border: '1px solid #27ae60',
                                borderRadius: '20px',
                                padding: '4px 12px',
                            }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27ae60' }} />
                                <span style={{ color: '#27ae60', fontSize: '12px', fontWeight: 700 }}>Open Today</span>
                            </div>
                        </div>

                        {/* Booking Tip */}
                        <div style={{
                            background: `rgba(184,115,51,0.1)`,
                            border: `1px solid ${GOLD}`,
                            borderRadius: '12px',
                            padding: isMobile ? '16px' : '20px',
                        }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <IconCalendar size={20} color={GOLD} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <p style={{ color: 'rgba(255,248,240,0.8)', fontSize: '13px', lineHeight: 1.6 }}>
                                    <strong style={{ color: GOLD }}>Booking tip:</strong> Reserve at least 2 hours in advance for weekday evenings. For weekends and special occasions,{' '}
                                    <strong style={{ color: COPPER_LIGHT }}>advance booking is strongly recommended</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div style={{
                            background: `rgba(255,248,240,0.05)`,
                            border: `1px solid ${COPPER}`,
                            borderRadius: '12px',
                            padding: isMobile ? '16px' : '20px',
                        }}>
                            <h4 style={{
                                color: TEXT,
                                fontSize: '14px',
                                fontWeight: 700,
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}>
                                🚂 Location
                            </h4>
                            <p style={{ color: 'rgba(255,248,240,0.7)', fontSize: '13px', lineHeight: '1.6' }}>
                                2nd Floor, Mahagun Mart<br />
                                Sector 78, Noida, UP 201305
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
