'use client';

import { useEffect } from 'react';

export function Analytics() {
    useEffect(() => {
        // Google Analytics Script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID';
        document.head.appendChild(script);

        // Initialize gtag
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer = (window as any).dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function gtag(...args: any[]) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'G-YOUR_MEASUREMENT_ID');
    }, []);

    return null;
}
