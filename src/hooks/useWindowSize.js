import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // initialise
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        width: size.width,
        height: size.height,
        isMobile: size.width < 640,
        isTablet: size.width >= 640 && size.width < 1024,
        isDesktop: size.width >= 1024,
    };
}
