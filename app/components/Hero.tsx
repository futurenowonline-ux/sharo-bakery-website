import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
    headline?: string;
    subheading?: string;
}

export default function Hero({
    headline = "Fresh Bread Baked Daily",
    subheading = "Premium artisan bakery with 5+ years of tradition. Handcrafted with love in Zululand."
}: HeroProps) {
    return (
        // Increased height for better parallax effect
        <section className="relative h-[80vh] w-full overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/sharo-hero.png')" }}
            ></div>

            {/* Darker overlay for better contrast with real photo */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 text-center md:px-16 lg:px-24">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                        {headline}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-10 font-medium drop-shadow-md">
                        {subheading}
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/products"
                            className="inline-block bg-sharo-gold text-sharo-brown px-8 py-3 font-bold rounded-lg hover:opacity-90 transition"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block border-2 border-white text-white px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-sharo-brown transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
