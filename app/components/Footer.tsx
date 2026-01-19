import Link from 'next/link';


export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ];

    return (
        <footer className="bg-sharo-brown text-white">
            {/* Main Footer Content */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-8 md:py-16 lg:px-16">

                {/* Column 1: Brand */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold">Sharo Bakery</h2>
                    <p className="text-sm text-sharo-light/90">Fresh bread baked daily.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-sharo-gold">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-sharo-light transition-colors hover:text-sharo-gold"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-sharo-gold">Contact Us</h3>
                    <div className="space-y-2 text-sm text-sharo-light/90">
                        <p>Phone: 071 743 8989</p>
                        <p>Email: info@sharobakery.co.za</p>
                        <p>Address: Ulundi, KwaZulu-Natal</p>
                    </div>
                </div>

                {/* Column 4: Social Media */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-sharo-gold">Follow Us</h3>
                    <div className="flex space-x-4">
                        {/* Using text placeholders if icons fail, but structure is ready for react-icons if installed, 
                 User asked for icons. I will assume react-icons is distinct or I should use simple text/svgs if not installed.
                 Standard 'lucide-react' is often in next.js templates, or 'react-icons'.
                 I will use standard text/unicode for now to be safe without installing deps, 
                 OR better yet, I'll allow the user to install dependencies if needed, but the prompt said "TypeScript, React hooks... Dependencies: None (Tailwind only)" for Navbar.
                 For Footer it says "Social Media (Facebook, Instagram, WhatsApp icons)".
                 I'll use simple text labels or SVGs to avoid unchecked dependencies.
                 Actually, let's use SVGs directly for zero discrepancies.
             */}
                        <a href="#" className="hover:text-sharo-gold" aria-label="Facebook">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-sharo-gold" aria-label="Instagram">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a
                            href="https://wa.me/27717438989?text=Hello%20Sharo%20Bakery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sharo-gold"
                            aria-label="WhatsApp"
                        >
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-sharo-gold/30 bg-black/10">
                <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm md:px-8">
                    <p className="text-sharo-light">
                        &copy; 2026 Sharo Bakery. All rights reserved. | <a href="https://e-nani-digital-tools-site.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sharo-light hover:text-sharo-gold transition-colors">Website by eNani Digital Tools</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
