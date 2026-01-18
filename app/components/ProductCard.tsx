import Image from 'next/image';
import Link from 'next/link';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    category?: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { name, description, price, image } = product;

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg border border-gray-200">
            {/* Image Section - Top 65% visually approximates to h-64/h-72 fixed height for consistency */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-200 md:h-72">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-300 transition-transform duration-200 ease-in-out group-hover:scale-105">
                        <span className="text-sharo-brown">No Image</span>
                    </div>
                )}
            </div>

            {/* Product Info Section */}
            <div className="flex flex-1 flex-col p-4 md:p-6">
                <h3 className="mb-2 text-lg font-bold text-sharo-dark md:text-xl">
                    {name}
                </h3>
                <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-700 md:text-base">
                    {description}
                </p>
                <div className="mt-auto">
                    <p className="mb-4 text-lg font-bold text-sharo-brown md:text-xl">
                        R {price.toFixed(2)}
                    </p>
                    <button
                        className="w-full rounded-md bg-sharo-brown py-2 font-semibold text-white transition-colors hover:bg-opacity-90 hover:bg-[#4A3B2A] md:py-3"
                        aria-label={`View details for ${name}`}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
