
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
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="h-6 w-6" viewBox="0 0 24 24">
                                            <path stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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

                    {/* Website Beta Feedback CTA */}
                    <div className="mt-8 rounded-lg border-2 border-dashed border-sharo-gold/50 bg-sharo-gold/5 p-6 text-center">
                        <h3 className="text-xl font-bold text-sharo-brown">
                            Website Beta Testing 🚀
                        </h3>
                        <p className="mt-2 text-gray-700">
                            We're currently testing our new digital home. Help us make it perfect by sharing your experience!
                        </p>
                        <a
                            href="/beta-feedback"
                            className="mt-6 inline-block rounded-md bg-sharo-gold px-8 py-3 font-bold text-white shadow-md transition-all hover:bg-sharo-gold/90 hover:shadow-lg active:scale-95"
                        >
                            Give Website Feedback
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
