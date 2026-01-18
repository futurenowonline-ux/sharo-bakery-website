import ProductGallery from '@/app/components/ProductGallery';
import { products } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products | Sharo Bakery',
    description: 'Explore our full range of artisan health breads, sandwiches, and fresh baked goods.',
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-sharo-light pb-20">
            <h1 className="py-12 text-center text-4xl font-bold text-sharo-dark">
                All Products
            </h1>
            <section className="mx-auto max-w-7xl">
                <ProductGallery products={products} />
            </section>
        </div>
    );
}
