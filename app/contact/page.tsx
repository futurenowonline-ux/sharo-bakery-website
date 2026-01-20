
import ContactForm from '@/app/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Sharo Bakery',
    description: 'Get in touch with Sharo Bakery in Ulundi. Call, email, or visit us for fresh health bread.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-sharo-light py-12 text-center md:py-16">
                <h1 className="text-4xl font-bold text-sharo-brown md:text-5xl">
                    Contact Sharo Bakery
                </h1>
                <p className="mt-4 text-lg text-sharo-brown">
                    We'd love to hear from you
                </p>
            </section>

            {/* Main Content */}
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-8">

                {/* Left Column: Contact Info */}
                <div className="md:col-span-1">
                    <div className="rounded-lg bg-sharo-light p-8 shadow-sm">
                        <h2 className="mb-6 text-2xl font-bold text-sharo-dark">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-sharo-brown">Visit Us</h3>
                                <p className="text-gray-700">
                                    B943 Indlavini Crescent<br />
                                    Ulundi 3838
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sharo-brown">Call Us</h3>
                                <p className="text-gray-700">
                                    <a href="tel:+27717438989" className="hover:text-sharo-gold hover:underline">
                                        071 743 8989
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sharo-brown">Email Us</h3>
                                <p className="text-gray-700">sharongazu@icloud.com</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sharo-brown">Opening Hours</h3>
                                <p className="text-gray-700">
                                    Mon - Fri: 8am - 5pm<br />
                                    Sat: 8am - 1pm<br />
                                    Sun: Closed
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-sharo-brown">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {/* Reuse SVGs from Footer if icons not available, but ideally consistent */}
                                    {/* Facebook - Blue */}
                                    <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity" aria-label="Facebook">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    {/* YouTube - Red */}
                                    <a href="https://www.youtube.com/@SharoBakery" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:opacity-80 transition-opacity" aria-label="YouTube">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                                        </svg>
                                    </a>
                                    {/* WhatsApp - Green */}
                                    <a
                                        href="https://wa.me/27717438989?text=Hello%20Sharo%20Bakery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#25D366] hover:opacity-80 transition-opacity"
                                        aria-label="WhatsApp"
                                    >
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="md:col-span-2">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}
