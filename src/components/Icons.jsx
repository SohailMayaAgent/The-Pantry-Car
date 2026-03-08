/**
 * The Pantry Car – centralized SVG icon library.
 * All icons accept { size, color, className, style } props.
 * Default size is 20, default color inherits (currentColor).
 */

const Icon = ({ size = 20, color = 'currentColor', children, style, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size} height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
        className={className}
    >
        {children}
    </svg>
);

// ─── Navigation / UI ───────────────────────────────────────────────────────────
export const IconMenu = (p) => <Icon {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Icon>;
export const IconHome = (p) => <Icon {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></Icon>;
export const IconX = (p) => <Icon {...p}><path d="M18 6L6 18M6 6l12 12" /></Icon>;
export const IconChevronDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9" /></Icon>;
export const IconArrowUp = (p) => <Icon {...p}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></Icon>;
export const IconExternalLink = (p) => <Icon {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></Icon>;

// ─── Food & Restaurant ─────────────────────────────────────────────────────────
export const IconFlame = (p) => <Icon {...p}><path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11z" /><path d="M12 13a2 2 0 0 1-2-2c0-2 2-3.5 2-5 0 1.5 2 3 2 5a2 2 0 0 1-2 2z" /></Icon>;
export const IconGrill = (p) => <Icon {...p}><path d="M3 6h18M3 12h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M9 12v7M15 12v7M5 19h14" /></Icon>;
export const IconCutlery = (p) => <Icon {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></Icon>;
export const IconCake = (p) => <Icon {...p}><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 21h16" /><path d="M2 21h20" /><path d="M7 8v3" /><path d="M12 8v3" /><path d="M17 8v3" /><path d="M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" /><path d="M12 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" /><path d="M17 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" /></Icon>;
export const IconUtensilsCrossed = (p) => <Icon {...p}><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /><path d="m15 15 3.7-3.7a2.1 2.1 0 0 1 2.98 0 2.1 2.1 0 0 1 0 2.98l-7.8 7.8a2 2 0 0 1-2.83 0l-6-6a2 2 0 0 1 0-2.83z" /><path d="m2 13 5-5" /><path d="m6 2 6 6" /><path d="m2 6 4 4" /></Icon>;
export const IconBeer = (p) => <Icon {...p}><path d="M17 11h1a3 3 0 0 1 0 6h-1" /><path d="M9 12v6" /><path d="M13 12v6" /><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5z" /><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" /></Icon>;
export const IconCoffee = (p) => <Icon {...p}><path d="M10 2v2M14 2v2M17 7H7l1 10a4 4 0 0 0 4 3.9A4 4 0 0 0 16 17l1-10" /><path d="M17 7a2 2 0 0 1 2 2 2 2 0 0 1-2 2" /></Icon>;
export const IconLeaf = (p) => <Icon {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></Icon>;

// ─── Hospitality ───────────────────────────────────────────────────────────────
export const IconGlassWater = (p) => <Icon {...p}><path d="M15.5 2H8.7L4 22h16L15.5 2z" /><path d="M4.2 12h15.6" /></Icon>;
export const IconStar = ({ size = 20, color = 'currentColor', style, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size} height={size}
        viewBox="0 0 24 24"
        fill={color}
        stroke="none"
        style={style}
        className={className}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
export const IconStarOutline = (p) => <Icon {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></Icon>;
export const IconCalendar = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></Icon>;
export const IconClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>;
export const IconUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
export const IconUser = (p) => <Icon {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></Icon>;

// ─── Contact / Communication ───────────────────────────────────────────────────
export const IconPhone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 6 6l1.06-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" /></Icon>;
export const IconMessageCircle = (p) => <Icon {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>;
export const IconMail = (p) => <Icon {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></Icon>;
export const IconMapPin = (p) => <Icon {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Icon>;
export const IconNavigation = (p) => <Icon {...p}><polygon points="3 11 22 2 13 21 11 13 3 11" /></Icon>;

// ─── Entertainment / Events ────────────────────────────────────────────────────
export const IconMusic = (p) => <Icon {...p}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></Icon>;
export const IconTv = (p) => <Icon {...p}><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></Icon>;
export const IconPartyPopper = (p) => <Icon {...p}><path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" /><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.44 1.63h-.038c-.86 0-1.55.7-1.55 1.56v0c0 .71-.426 1.35-1.08 1.63v0" /><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.09.5-.45.9-.94 1.08L14 16" /><path d="m7 15-.43-.44a2 2 0 0 0-2.33-.4v0a1.9 1.9 0 0 1-2.24-3l4.17-4.17" /></Icon>;
export const IconMic = (p) => <Icon {...p}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></Icon>;
export const IconTrophy = (p) => <Icon {...p}><line x1="6" y1="10" x2="6" y2="21" /><line x1="18" y1="10" x2="18" y2="21" /><path d="M1 3h4v7a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V3h4" /><line x1="8" y1="21" x2="16" y2="21" /></Icon>;

// ─── Business / Services ───────────────────────────────────────────────────────
export const IconBuilding = (p) => <Icon {...p}><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" /></Icon>;
export const IconTruck = (p) => <Icon {...p}><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></Icon>;
export const IconPackage = (p) => <Icon {...p}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></Icon>;
export const IconCreditCard = (p) => <Icon {...p}><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></Icon>;
export const IconCheckCircle = (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Icon>;
export const IconInfo = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></Icon>;
export const IconShield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>;
export const IconGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></Icon>;

// ─── Social ────────────────────────────────────────────────────────────────────
export const IconFacebook = (p) => <Icon {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Icon>;
export const IconInstagram = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></Icon>;
export const IconYoutube = (p) => <Icon {...p}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></Icon>;
export const IconTwitter = (p) => <Icon {...p}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></Icon>;

// ─── Scroll / Arrow ────────────────────────────────────────────────────────────
export const IconArrowRight = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Icon>;
export const IconDownload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>;
export const IconSend = (p) => <Icon {...p}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></Icon>;

// ─── Veg / Non-Veg indicators ──────────────────────────────────────────────────
export const IconVegDot = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="12" rx="2" fill="none" stroke="#27ae60" strokeWidth="1.5" />
        <circle cx="7" cy="7" r="3" fill="#27ae60" />
    </svg>
);

export const IconNonVegDot = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="12" rx="2" fill="none" stroke="#e74c3c" strokeWidth="1.5" />
        <polygon points="7,3 11,11 3,11" fill="#e74c3c" />
    </svg>
);

// ─── Transport ─────────────────────────────────────────────────────────────────
export const IconTrain = (p) => <Icon {...p}><path d="M4 15.5C4 18.5 6 20 8 20h8c2 0 4-1.5 4-4.5V6c0-2.2-3.6-4-8-4S4 3.8 4 6v9.5z" /><path d="M4 10h16" /><circle cx="8" cy="15" r="1" /><circle cx="16" cy="15" r="1" /><path d="M6 20l-2 2" /><path d="M18 20l2 2" /></Icon>;

// ─── Chef / Kitchen ─────────────────────────────────────────────────────────────
export const IconChefHat = (p) => <Icon {...p}><path d="M6 13v8M18 13v8M2 21h20M4 13l4-9c0-2.2 1.8-4 4-4s4 1.8 4 4l4 9" /><path d="M8 13h8" /></Icon>;

// ─── Emotions ──────────────────────────────────────────────────────────────────
export const IconHeart = (p) => <Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></Icon>;

// WhatsApp
export const IconWhatsApp = (p) => (
    <Icon {...p}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </Icon>
);
