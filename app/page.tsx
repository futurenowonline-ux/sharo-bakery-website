

import Hero from '@/app/components/Hero';
import ProductCard from '@/app/components/ProductCard';
import FadeIn from '@/app/components/FadeIn';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-sharo-light">

      <Hero />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-sharo-dark md:text-4xl">
              Featured Products
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
