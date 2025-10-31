import { useCartStore, useCartTotals, CartItem } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
function CartItemCard({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useCartStore();
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-md bg-brand-champagne p-2" dangerouslySetInnerHTML={{ __html: item.illustration }} />
      <div className="flex-grow">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-stone-500">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
          <span>{item.quantity}</span>
          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}><Trash2 className="h-4 w-4 text-stone-500" /></Button>
    </div>
  );
}
export function Cart() {
  const { isCartOpen, setCartOpen, items } = useCartStore();
  const { totalPrice } = useCartTotals();
  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col bg-brand-alabaster sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl text-stone-800">Your Basket</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-6">
              <div className="divide-y divide-brand-taupe">
                {items.map(item => <CartItemCard key={item.id} item={item} />)}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto flex-col space-y-4 border-t border-brand-taupe pt-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button asChild size="lg" className="w-full bg-stone-800 text-white hover:bg-stone-700">
                <Link to="/checkout" onClick={() => setCartOpen(false)}>Proceed to Checkout</Link>
              </Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-grow flex-col items-center justify-center gap-4 text-center">
            <p className="text-2xl font-display text-stone-600">Your basket is empty</p>
            <p className="text-stone-500">Find a beautiful bouquet to fill it.</p>
            <Button asChild variant="outline" onClick={() => setCartOpen(false)}>
              <Link to="/bouquets">Shop Bouquets</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}