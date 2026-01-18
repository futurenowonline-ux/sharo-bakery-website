
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        return {
            title: 'Product Not Found | Sharo Bakery',
            description: 'The requested product could not be found.',
        };
    }

    return {
        title: `${product.name} | Sharo Bakery`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Sharo Bakery`,
            description: product.description,
            images: product.image ? [product.image] : [],
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(resolvedParams.slug);

    return (
        <div className="min-h-screen bg-sharo-light pb-20">
            {/* Product Detail Section */}
            <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                    {/* Left Column: Image */}
                    <div className="h-96 w-full rounded-2xl bg-gray-300 shadow-lg md:h-full lg:w-full">
                        {/* Placeholder for real image */}
                        {product.image && (
                            <div
                                className="h-full w-full rounded-2xl bg-cover bg-center"
                                style={{ backgroundImage: `url(${product.image})` }}
                                aria-label={product.name}
                            />
                        )}
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-sharo-brown">
                            {product.category}
                        </span>
                        <h1 className="mb-4 text-4xl font-bold text-sharo-dark">
                            {product.name}
                        </h1>
                        <p className="mb-6 text-3xl font-bold text-sharo-brown">
                            R {product.price.toFixed(2)}
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            {product.description}
                        </p>

                        {/* Benefits Loop */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-xl font-bold text-sharo-dark">
                                Why You'll Love It
                            </h3>
                            <ul className="space-y-3">
                                {product.benefits && product.benefits.map((benefit: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-3 mt-1 text-sharo-gold">
                                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <a
                                href={`https://wa.me/27358700000?text=${encodeURIComponent(`Hi, I would like to order ${product.name}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-sharo-gold px-8 py-3 font-semibold text-sharo-brown transition-transform hover:scale-105 hover:opacity-90"
                            >
                                Order on WhatsApp
                            </a>
                            <Link
                                href="/products"
                                className="rounded-md border-2 border-sharo-brown px-6 py-3 font-semibold text-sharo-brown transition-colors hover:bg-sharo-brown hover:text-white"
                            >
                                Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="bg-white py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-16">
                    <h2 className="mb-12 text-center text-3xl font-bold text-sharo-dark">
                        You might also like
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard key={relatedProduct.id} product={relatedProduct} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
