import { useCartStore, useCartTotals } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatedPage } from '@/components/AnimatedPage';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
const checkoutSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  zip: z.string().min(5, { message: 'A valid ZIP code is required.' }),
});
type CheckoutFormValues = z.infer<typeof checkoutSchema>;
export function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const { totalPrice } = useCartTotals();
  const navigate = useNavigate();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
  });
  function onSubmit(data: CheckoutFormValues) {
    console.log('Mock Order Submitted:', data);
    toast.success('Your order has been placed!', {
      description: 'Thank you for shopping with Bloom & Brush.',
    });
    clearCart();
    navigate('/');
  }
  if (items.length === 0) {
    return (
      <AnimatedPage>
        <div className="container mx-auto max-w-2xl py-16 text-center md:py-24">
          <h1 className="font-display text-4xl">Your Basket is Empty</h1>
          <p className="mt-4 text-lg text-stone-600">You can't check out with an empty basket. Let's find something beautiful.</p>
          <Button asChild className="mt-6 bg-stone-800 text-white hover:bg-stone-700">
            <Link to="/bouquets">Shop Bouquets</Link>
          </Button>
        </div>
      </AnimatedPage>
    );
  }
  return (
    <AnimatedPage>
      <div className="bg-brand-champagne/50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-5xl text-stone-800 md:text-6xl">Checkout</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <Card className="bg-brand-alabaster">
                  <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
                <Card className="bg-brand-alabaster">
                  <CardHeader><CardTitle>Shipping Address</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="firstName" render={({ field }) => (<FormItem><FormLabel>First Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (<FormItem><FormLabel>Last Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                    <FormField control={form.control} name="address" render={({ field }) => (<FormItem><FormLabel>Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="city" render={({ field }) => (<FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="state" render={({ field }) => (<FormItem><FormLabel>State / Province</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="zip" render={({ field }) => (<FormItem><FormLabel>ZIP / Postal Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card className="sticky top-28 bg-brand-alabaster">
                  <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-stone-600">{item.name} x {item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" size="lg" className="w-full bg-stone-800 text-white hover:bg-stone-700">Place Order (Mock)</Button>
                  </CardFooter>
                </Card>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </AnimatedPage>
  );
}