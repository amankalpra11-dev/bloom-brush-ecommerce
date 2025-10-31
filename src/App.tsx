import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-alabaster">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
      <Cart />
    </div>
  );
}
export default App;