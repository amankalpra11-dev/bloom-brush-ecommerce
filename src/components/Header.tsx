import { NavLink } from 'react-router-dom';
import { ShoppingBasket, Feather, Menu } from 'lucide-react';
import { useCartStore, useCartTotals } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
export function Header() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const { totalItems } = useCartTotals();
  const controls = useAnimation();
  const prevTotalItems = useRef(totalItems);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (totalItems > prevTotalItems.current) {
      controls.start({
        scale: [1, 1.3, 1],
        transition: { duration: 0.3, times: [0, 0.5, 1] },
      });
    }
    prevTotalItems.current = totalItems;
  }, [totalItems, controls]);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-lg text-stone-700 hover:text-stone-900 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-stone-800 after:transition-transform after:duration-300 after:ease-in-out ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`;
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 text-2xl font-semibold transition-colors ${
      isActive ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
    }`;
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-alabaster/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-display text-stone-800">
          <Feather className="h-6 w-6" />
          Bloom & Brush
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/bouquets" className={linkClass}>Bouquets</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <motion.div animate={controls}>
            <Button onClick={toggleCart} variant="ghost" size="icon" className="relative">
              <ShoppingBasket className="h-6 w-6 text-stone-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </motion.div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-stone-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] bg-brand-alabaster">
                <nav className="mt-12 flex flex-col items-center gap-8">
                  <SheetClose asChild>
                    <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink to="/bouquets" className={mobileLinkClass}>Bouquets</NavLink>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}