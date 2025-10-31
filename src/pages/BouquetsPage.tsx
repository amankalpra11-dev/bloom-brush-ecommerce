import { bouquets } from '@/lib/mock-data';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedPage } from '@/components/AnimatedPage';
export function BouquetsPage() {
  return (
    <AnimatedPage>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-5xl text-stone-800 md:text-6xl">Our Collection</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Browse our full selection of artisanal bouquets. Each one is crafted with care and designed to delight.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bouquets.map((bouquet) => (
              <ProductCard key={bouquet.id} bouquet={bouquet} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}