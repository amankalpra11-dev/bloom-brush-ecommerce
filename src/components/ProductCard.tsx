import { Link } from 'react-router-dom';
import { Bouquet } from '@/lib/mock-data';
import { motion } from 'framer-motion';
interface ProductCardProps {
  bouquet: Bouquet;
}
const MotionLink = motion(Link);
export function ProductCard({ bouquet }: ProductCardProps) {
  return (
    <MotionLink
      to={`/bouquets/${bouquet.id}`}
      className="group block overflow-hidden rounded-lg bg-brand-champagne shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="h-64 w-full bg-white p-4 flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: bouquet.illustration }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-800">{bouquet.name}</h3>
        <p className="mt-2 text-lg font-medium text-stone-600">${bouquet.price.toFixed(2)}</p>
      </div>
    </MotionLink>
  );
}