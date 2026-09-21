import { ShoppingCart } from 'lucide-react';

export default function Carts() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-white dark:bg-coal-800 shadow-xs">
        <span className="text-xs font-semibold tracking-wider text-copper-500 uppercase">
          Carts
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-content-primary mt-1">
          Cart overview
        </h1>
        <p className="text-sm text-brand-600/70 dark:text-content-muted mt-1.5">
          All active carts returned from the API are rendered here with their latest item details.
        </p>
      </div>

      <div className="rounded-2xl border border-dashed border-brand-200 dark:border-white/[0.08] bg-white/40 dark:bg-coal-800/40 p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-coal-600 flex items-center justify-center text-brand-400 dark:text-content-muted mb-4 border border-brand-100 dark:border-white/[0.06]">
          <ShoppingCart className="w-7 h-7" />
        </div>
        <h3 className="text-base font-semibold text-brand-950 dark:text-content-primary">
          No active carts found
        </h3>
        <p className="text-sm text-brand-500 dark:text-content-muted mt-1 max-w-sm">
          No carts returned from the API. When carts are created or restored by shoppers, they will show up here.
        </p>
      </div>
    </div>
  );
}
