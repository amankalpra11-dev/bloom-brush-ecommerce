import { Feather, Twitter, Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-brand-champagne">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-display text-stone-800 mb-2">
              <Feather className="h-6 w-6" />
              Bloom & Brush
            </NavLink>
            <p className="text-stone-600">Artisanal bouquets, hand-crafted with love.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors"><Twitter /></a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors"><Instagram /></a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors"><Facebook /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-taupe pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Bloom & Brush. All rights reserved.</p>
          <p className="mt-1">Built with love by Pehchanly</p>
        </div>
      </div>
    </footer>
  );
}