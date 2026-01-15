import Link from 'next/link';

interface HeroProps {
    headline?: string;
    subheading?: string;
}

export default function Hero({
    headline = "Fresh Bread Baked Daily",
    subheading = "Premium artisan bakery with 5+ years of tradition. Handcrafted with love in Zululand."
}: HeroProps) {
    return (
        <section className="bg-sharo-light py-12 md:py-20 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col-reverse gap-12 px-4 md:flex-row md:items-center md:gap-12 md:px-8 lg:px-16">
                {/* Text Content */}
                <div className="flex flex-1 flex-col items-start text-left">
                    <h1 className="text-4xl font-bold text-sharo-brown md:text-5xl lg:text-6xl">
                        {headline}
                    </h1>
                    <p className="mt-8 text-lg text-gray-600 md:text-xl">
                        {subheading}
                    </p>

                    <div className="mt-8 flex w-full flex-col gap-3 md:flex-row md:gap-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center rounded-lg bg-sharo-gold px-8 py-3 font-semibold text-sharo-brown transition-transform hover:scale-105 hover:opacity-90"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-sharo-brown bg-transparent px-8 py-3 font-semibold text-sharo-brown transition-colors hover:bg-sharo-brown hover:text-white"
                        >
                            Visit Our Bakery
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full flex-1">
                    <div className="h-96 w-full rounded-2xl bg-gray-300 shadow-lg md:aspect-[4/3] md:h-auto">
                        {/* Placeholder for now */}
                    </div>
                </div>
            </div>
        </section>
    );
}
