import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import App from '@/App';
import { HomePage } from '@/pages/HomePage';
import { BouquetsPage } from '@/pages/BouquetsPage';
import { BouquetDetailPage } from '@/pages/BouquetDetailPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { Toaster } from '@/components/ui/sonner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "bouquets", element: <BouquetsPage /> },
      { path: "bouquets/:id", element: <BouquetDetailPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ]
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
      <Toaster 
        position="top-center"
        richColors 
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
            background: '#F5EBE0', // brand-alabaster
            color: '#44403c', // stone-700
            border: '1px solid #D5BDAF', // brand-taupe
          },
        }}
      />
    </ErrorBoundary>
  </StrictMode>,
)