import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Sharo Bakery',
    description: 'Our story: Premium artisan bakery in Ulundi bringing health and wellness to the community.',
};

export default function AboutPage() {
    const benefits = [
        {
            title: "High Quality Ingredients",
            description: "We use only the finest natural ingredients, sourced locally where possible, to ensure every bite is perfect."
        },
        {
            title: "Fresh Baked Daily",
            description: "Our ovens start before dawn. We believe in the magic of fresh bread, baked new every single morning."
        },
        {
            title: "Health Focused",
            description: "Our health bread is crafted to support wellness, high in fibre and packed with nutritious seeds."
        },
        {
            title: "Community Support",
            description: "Born in Ulundi, we are proud to serve and support our local community through nutrition and job creation."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-sharo-light py-12 md:py-16 text-center">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold text-sharo-brown md:text-5xl">
                        About Sharo Bakery
                    </h1>
                    <p className="mt-4 text-lg text-sharo-brown md:text-xl">
                        Premium artisan bakery bringing health and wellness to Ulundi
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-12 md:py-20">
                <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
                    <h2 className="mb-8 text-3xl font-bold text-sharo-dark">Our Story</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            Founded in 2021, Sharo Bakery is a proud black woman-owned establishment dedicated to revitalizing the traditional art of baking. What started as a small kitchen passion has grown into a beacon of quality in Ulundi, driven by a simple mission: to provide our community with bread that isn't just delicious, but truly nourishing.
                        </p>
                        <p>
                            We realized there was a gap in the market for high-quality, health-conscious baked goods. The response was overwhelming. From humble beginnings, we have expanded to supply major retail partners including BP and Spar, proving that there is a real hunger for authentic, preservative-free artisan bread.
                        </p>
                        <p>
                            At Sharo Bakery, we don't cut corners. Our commitment to quality is unwavering, and our dedication to our community is the heart of everything we do. We believe that good bread brings people together, and we are honored to be a part of your daily table.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-50 py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
                    <h2 className="mb-12 text-center text-3xl font-bold text-sharo-dark">
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg border-l-4 border-sharo-gold bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                            >
                                <h3 className="mb-3 text-xl font-bold text-sharo-brown">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
