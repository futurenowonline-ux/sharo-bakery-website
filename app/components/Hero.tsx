import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/app/components/FadeIn';
import HeroPoster from '@/app/components/HeroPoster';

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
                <FadeIn direction="right" className="flex flex-1 flex-col items-start text-left">
                    <h1 className="text-4xl font-bold text-sharo-brown md:text-5xl lg:text-6xl">
                        {headline}
                    </h1>
                    <p className="mt-8 text-lg text-sharo-brown md:text-xl">
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
                </FadeIn>

                {/* Animated Poster Section */}
                <FadeIn direction="left" delay={0.2} className="w-full flex-1 flex justify-center md:justify-end">
                    <HeroPoster />
                </FadeIn>
            </div>
        </section>
    );
}
