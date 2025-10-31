import { useParams, Link, useNavigate } from 'react-router-dom';
import { bouquets } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import { ArrowLeft } from 'lucide-react';
import { AnimatedPage } from '@/components/AnimatedPage';
import { toast } from 'sonner';
export function BouquetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bouquet = bouquets.find((b) => b.id === id);
  const addToCart = useCartStore((state) => state.addToCart);
  if (!bouquet) {
    return (
      <AnimatedPage>
        <div className="flex h-screen flex-col items-center justify-center text-center">
          <h1 className="font-display text-4xl">Bouquet Not Found</h1>
          <p className="mt-4 text-lg text-stone-600">We couldn't find the bouquet you were looking for.</p>
          <Button asChild variant="link" className="mt-6 text-lg">
            <Link to="/bouquets">Back to Collection</Link>
          </Button>
        </div>
      </AnimatedPage>
    );
  }
  const handleAddToCart = () => {
    addToCart(bouquet);
    toast.success(`${bouquet.name} added to your basket!`);
  };
  return (
    <AnimatedPage>
      <div className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8 text-stone-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Bouquets
          </Button>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-lg bg-brand-champagne p-8">
              <div className="h-auto w-full max-w-md" dangerouslySetInnerHTML={{ __html: bouquet.illustration }} />
            </div>
            <div className="space-y-6">
              <h1 className="font-display text-5xl text-stone-800">{bouquet.name}</h1>
              <p className="text-3xl font-semibold text-stone-700">${bouquet.price.toFixed(2)}</p>
              <p className="text-lg text-stone-600 leading-relaxed">{bouquet.description}</p>
              <div>
                <h3 className="text-xl font-semibold text-stone-800">Composition</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-stone-600">
                  {bouquet.composition.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="w-full bg-stone-800 text-white hover:bg-stone-700 md:w-auto">
                Add to Basket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}