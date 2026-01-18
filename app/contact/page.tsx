
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
                                    Ulundi, KwaZulu-Natal<br />
                                    South Africa
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
                                <p className="text-gray-700">info@sharobakery.co.za</p>
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
                                    <a href="#" className="hover:text-sharo-gold" aria-label="Facebook">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6 text-sharo-dark hover:text-sharo-gold" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-sharo-gold" aria-label="Instagram">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6 text-sharo-dark hover:text-sharo-gold" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="hover:text-sharo-gold" aria-label="WhatsApp">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6 text-sharo-dark hover:text-sharo-gold" viewBox="0 0 24 24">
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
