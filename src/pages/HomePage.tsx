import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { bouquets } from '@/lib/mock-data';
import { ProductCard } from '@/components/ProductCard';
import FlowerHero from '@/assets/illustrations/flower-hero.svg?url';
import { AnimatedPage } from '@/components/AnimatedPage';
export function HomePage() {
  const featuredBouquets = bouquets.slice(0, 3);
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="overflow-hidden bg-brand-champagne py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-display text-5xl text-stone-800 md:text-6xl lg:text-7xl">
              Artfully Crafted Bouquets
            </h1>
            <p className="text-lg text-stone-600 md:text-xl">
              Discover unique, hand-illustrated floral arrangements that tell a story. Each bouquet is a work of art, designed to bring beauty and joy into your life.
            </p>
            <Button asChild size="lg" className="bg-stone-800 text-white hover:bg-stone-700 transition-colors">
              <Link to="/bouquets">Shop All Bouquets</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={FlowerHero} alt="Illustrated flower" className="h-auto w-full max-w-sm md:max-w-md" />
          </div>
        </div>
      </section>
      {/* Featured Bouquets Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-4xl text-stone-800 md:text-5xl">Featured Bouquets</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              A curated selection of our most loved arrangements, perfect for any occasion.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBouquets.map((bouquet) => (
              <ProductCard key={bouquet.id} bouquet={bouquet} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}