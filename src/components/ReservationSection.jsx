import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import reservationService from '../services/reservation.service';
import { IconUser, IconPhone, IconMail, IconCalendar, IconUsers, IconClock, IconCheckCircle, IconWhatsApp, IconSend } from './Icons';

const timeSlots = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

const initialForm = { name: '', phone: '', email: '', date: '', guests: '2', time: '', occasion: '', notes: '' };

const brown = '#6B4226';
const copper = '#B8860B';
const cream = '#FFF8F0';
const brownBorder = 'rgba(107,66,38,0.2)';

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
        background: '#fff',
        border: `1px solid ${brownBorder}`,
        color: brown,
        padding: '12px 14px',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.2s ease',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        color: 'rgba(107,66,38,0.6)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        marginBottom: '6px',
    };

    return (
        <section id="reservation" style={{ padding: isMobile ? '64px 0' : '100px 0', background: cream, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(184,134,11,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
                    <div className="section-subtitle">Book a Table</div>
                    <h2 className="section-title" style={{ color: brown, fontSize: isMobile ? '1.8rem' : undefined }}>
                        Reserve Your{' '}
                        <span style={{ color: copper }}>Experience</span>
                    </h2>
                    <div className="divider-copper" style={{ width: '60px', margin: '16px auto 0' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 380px', gap: isMobile ? '40px' : '48px', alignItems: 'start' }}>
                    {/* Form Card */}
                    <div style={{ background: '#fff', border: `1px solid ${brownBorder}`, borderRadius: '16px', padding: isMobile ? '24px 20px' : '40px', boxShadow: '0 4px 24px rgba(107,66,38,0.06)' }}>
                        {submitted && reservation ? (
                            /* SUCCESS STATE */
                            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                                    <IconCheckCircle size={64} color="#27ae60" />
                                </div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.4rem' : '1.8rem', color: brown, marginBottom: '8px' }}>
                                    Table Reserved!
                                </h3>
                                <div style={{ display: 'inline-block', background: 'rgba(184,134,11,0.08)', border: `1px solid rgba(184,134,11,0.3)`, borderRadius: '8px', padding: '10px 20px', marginBottom: '16px' }}>
                                    <span style={{ color: 'rgba(107,66,38,0.6)', fontSize: '12px' }}>Reservation ID: </span>
                                    <span style={{ color: copper, fontWeight: 700, fontSize: '16px', letterSpacing: '1px' }}>{reservation.reservationId}</span>
                                </div>
                                <p style={{ color: 'rgba(107,66,38,0.65)', marginBottom: '8px' }}>
                                    We'll confirm via WhatsApp/call at <strong style={{ color: brown }}>{form.phone}</strong>
                                </p>
                                <p style={{ color: 'rgba(107,66,38,0.45)', fontSize: '14px', marginBottom: '28px' }}>
                                    {reservation.date} · {reservation.time} · {reservation.guests} Guests
                                </p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href={`https://wa.me/919999999999?text=Hi! I just reserved a table at The Pantry Car. ID: ${reservation.reservationId}. Name: ${form.name}, Date: ${reservation.date}, Time: ${reservation.time}, Guests: ${reservation.guests}.`}
                                        target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ gap: '8px' }}
                                    >
                                        <IconWhatsApp size={18} color="#fff" /><span>Confirm via WhatsApp</span>
                                    </a>
                                    <button className="btn-outline" onClick={() => { setSubmitted(false); setReservation(null); setForm(initialForm); }}>
                                        Book Another
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* FORM STATE */
                            <form onSubmit={handleSubmit}>
                                {error && (
                                    <div style={{ background: 'rgba(231,76,60,0.07)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', color: '#e74c3c', fontSize: '14px' }}>
                                        {error}
                                    </div>
                                )}

                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                                    {/* Name */}
                                    <div>
                                        <label style={labelStyle}>Full Name *</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}>
                                                <IconUser size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                                                style={{ ...fieldStyle, paddingLeft: '38px' }}
                                                onFocus={(e) => e.target.style.borderColor = brown}
                                                onBlur={(e) => e.target.style.borderColor = brownBorder} />
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div>
                                        <label style={labelStyle}>Phone Number *</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}>
                                                <IconPhone size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" type="tel"
                                                style={{ ...fieldStyle, paddingLeft: '38px' }}
                                                onFocus={(e) => e.target.style.borderColor = brown}
                                                onBlur={(e) => e.target.style.borderColor = brownBorder} />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div>
                                        <label style={labelStyle}>Email (Optional)</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}>
                                                <IconMail size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email"
                                                style={{ ...fieldStyle, paddingLeft: '38px' }}
                                                onFocus={(e) => e.target.style.borderColor = brown}
                                                onBlur={(e) => e.target.style.borderColor = brownBorder} />
                                        </div>
                                    </div>
                                    {/* Date */}
                                    <div>
                                        <label style={labelStyle}>Date *</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}>
                                                <IconCalendar size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <input name="date" required value={form.date} onChange={handleChange} type="date" min={today}
                                                style={{ ...fieldStyle, paddingLeft: '38px' }}
                                                onFocus={(e) => e.target.style.borderColor = brown}
                                                onBlur={(e) => e.target.style.borderColor = brownBorder} />
                                        </div>
                                    </div>
                                    {/* Guests */}
                                    <div>
                                        <label style={labelStyle}>Guests *</label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}>
                                                <IconUsers size={16} color="rgba(107,66,38,0.4)" />
                                            </div>
                                            <select name="guests" value={form.guests} onChange={handleChange} style={{ ...fieldStyle, paddingLeft: '38px', cursor: 'pointer' }}>
                                                {['1', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '25+'].map(n => (
                                                    <option key={n} value={n} style={{ background: '#fff', color: brown }}>
                                                        {n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {/* Occasion */}
                                    <div>
                                        <label style={labelStyle}>Occasion</label>
                                        <select name="occasion" value={form.occasion} onChange={handleChange} style={{ ...fieldStyle, cursor: 'pointer' }}>
                                            {['', 'Birthday', 'Anniversary', 'Date Night', 'Corporate', 'Friends Outing', 'Family Dinner'].map(o => (
                                                <option key={o} value={o} style={{ background: '#fff', color: brown }}>{o || 'Select occasion'}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={labelStyle}>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                            <IconClock size={14} color="rgba(107,66,38,0.5)" /> Preferred Time *
                                        </span>
                                    </label>
                                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 3 : 4}, 1fr)`, gap: '8px' }}>
                                        {timeSlots.map((slot) => (
                                            <button
                                                type="button"
                                                key={slot}
                                                onClick={() => setForm({ ...form, time: slot })}
                                                style={{
                                                    padding: '9px 6px', borderRadius: '6px',
                                                    fontSize: isMobile ? '11px' : '12px', fontWeight: 600,
                                                    cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'center',
                                                    background: form.time === slot ? brown : 'rgba(107,66,38,0.04)',
                                                    color: form.time === slot ? '#FFF8F0' : 'rgba(107,66,38,0.55)',
                                                    border: form.time === slot ? 'none' : `1px solid ${brownBorder}`,
                                                    boxShadow: form.time === slot ? '0 4px 16px rgba(107,66,38,0.25)' : 'none',
                                                }}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Notes */}
                                <div style={{ marginBottom: '24px' }}>
                                    <label style={labelStyle}>Special Requests</label>
                                    <textarea
                                        name="notes"
                                        value={form.notes}
                                        onChange={handleChange}
                                        placeholder="Allergies, decorations, cake, seating preferences..."
                                        rows={3}
                                        style={{ ...fieldStyle, resize: 'vertical', fontFamily: 'inherit' }}
                                        onFocus={(e) => e.target.style.borderColor = brown}
                                        onBlur={(e) => e.target.style.borderColor = brownBorder}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={loading}
                                    style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '15px', gap: '10px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                                >
                                    {loading ? (
                                        <>
                                            <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,248,240,0.3)', borderTopColor: '#FFF8F0', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                                            Confirming...
                                        </>
                                    ) : (
                                        <><IconCalendar size={18} color="#FFF8F0" /> Confirm Reservation</>
                                    )}
                                </button>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                                    <a
                                        href="tel:+919999999999"
                                        style={{
                                            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                            background: 'rgba(107,66,38,0.06)', border: `1px solid ${brownBorder}`,
                                            color: brown, padding: '12px', borderRadius: '6px',
                                            textDecoration: 'none', fontWeight: 600, fontSize: '14px',
                                        }}
                                    >
                                        <IconPhone size={16} color={brown} /> Call to Book
                                    </a>
                                    <a
                                        href="https://wa.me/919999999999?text=Hi! I'd like to reserve a table at The Pantry Car."
                                        target="_blank" rel="noopener noreferrer"
                                        style={{
                                            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                            background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.3)',
                                            color: '#25d366', padding: '12px', borderRadius: '6px',
                                            textDecoration: 'none', fontWeight: 600, fontSize: '14px',
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
                        {/* Newsletter Card */}
                        <div style={{ background: '#fff', border: `1px solid ${brownBorder}`, borderRadius: '12px', padding: isMobile ? '20px' : '28px', boxShadow: '0 2px 12px rgba(107,66,38,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(184,134,11,0.1)', border: '1.5px solid rgba(184,134,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <IconMail size={22} color={copper} />
                                </div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: brown }}>Stay Updated</h3>
                            </div>
                            <p style={{ color: 'rgba(107,66,38,0.6)', fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>
                                Get exclusive offers, seasonal menus, and special event invites.
                            </p>
                            {newsletterJoined ? (
                                <div style={{ color: brown, fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <IconCheckCircle size={16} color="#27ae60" /> You're subscribed!
                                </div>
                            ) : (
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        style={{ flex: 1, background: '#FFF8F0', border: `1px solid ${brownBorder}`, color: brown, padding: '10px 12px', borderRadius: '6px', fontSize: '13px', outline: 'none', minWidth: 0 }}
                                        onFocus={(e) => e.target.style.borderColor = brown}
                                        onBlur={(e) => e.target.style.borderColor = brownBorder}
                                    />
                                    <button
                                        onClick={() => newsletterEmail && setNewsletterJoined(true)}
                                        style={{ background: brown, border: 'none', borderRadius: '6px', padding: '10px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <IconSend size={16} color="#FFF8F0" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Opening Hours */}
                        <div style={{ background: '#fff', border: `1px solid ${brownBorder}`, borderRadius: '12px', padding: isMobile ? '20px' : '24px', boxShadow: '0 2px 12px rgba(107,66,38,0.05)' }}>
                            <h4 style={{ color: brown, fontSize: '15px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <IconClock size={18} color={copper} /> Opening Hours
                            </h4>
                            {[
                                ['Monday – Sunday', '11:00 AM – 11:00 PM'],
                                ['Public Holidays', '11:00 AM – 11:00 PM'],
                            ].map(([day, hours]) => (
                                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(107,66,38,0.08)', fontSize: '14px' }}>
                                    <span style={{ color: 'rgba(107,66,38,0.6)' }}>{day}</span>
                                    <span style={{ color: copper, fontWeight: 600 }}>{hours}</span>
                                </div>
                            ))}
                            <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(39,174,96,0.08)', border: '1px solid rgba(39,174,96,0.25)', borderRadius: '20px', padding: '4px 12px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27ae60' }} />
                                <span style={{ color: '#27ae60', fontSize: '12px', fontWeight: 600 }}>Open Today</span>
                            </div>
                        </div>

                        {/* Booking Tip */}
                        <div style={{ background: 'rgba(184,134,11,0.06)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '12px', padding: isMobile ? '16px' : '20px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <IconCalendar size={18} color={copper} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <p style={{ color: 'rgba(107,66,38,0.65)', fontSize: '13px', lineHeight: 1.6 }}>
                                    <strong style={{ color: brown }}>Booking tip:</strong> Reserve at least 2 hours in advance for weekday evenings. For weekends and special occasions, <strong style={{ color: copper }}>advance booking is strongly recommended</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
