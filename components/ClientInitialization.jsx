'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';

export default function ClientInitialization({ children }) {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            disable: 'mobile',
        });

        // Initialize Lenis
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
