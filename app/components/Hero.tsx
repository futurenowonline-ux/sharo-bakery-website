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

            {/* Text Content Overlay - Left Aligned */}
            <div className="relative z-10 flex h-full items-center justify-start px-4 text-left md:px-16 lg:px-24">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white drop-shadow-lg md:text-7xl">
                        {headline}
                    </h1>
                    {/* Subheading removed as per request */}
                    <div className="flex gap-4">
                        <Link
                            href="/products"
                            className="inline-block rounded-lg bg-sharo-gold px-8 py-3 font-bold text-sharo-brown transition hover:opacity-90"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-white hover:text-sharo-brown"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
