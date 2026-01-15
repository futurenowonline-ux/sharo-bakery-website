import ProductCard, { Product } from '@/app/components/ProductCard';

interface ProductGalleryProps {
    products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
