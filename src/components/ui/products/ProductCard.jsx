const MAX_TAGS = 4;

const ProductCard = ({
  product,
  isAdmin = false,
  onView,
  onQuickEdit,
  onEdit,
  onDelete,
}) => {
  const {
    _id,
    name,
    images,
    shortDescription,
    stock,
    category,
    subcategory,
    brand,
    tags = [],
    price,
    discountPrice,
  } = product;

  const inStock = stock > 0;
  const featured = tags.includes("featured");
  const visibleTags = tags.filter((t) => t !== "featured").slice(0, MAX_TAGS);
  const breadcrumb = [category, subcategory, brand].filter(Boolean).join(" · ");
  const image = images?.[0]?.url;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-brand-200/60 bg-white dark:border-brand-900/40 dark:bg-surface-dark">
    
      <div className="relative h-40 w-full overflow-hidden bg-brand-100/60 dark:bg-brand-900/30">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-brand-500">
            No image
          </div>
        )}

        {featured && (
          <span className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-amber-400 px-2 py-0.5 text-[11px] font-semibold text-brand-900">
            Featured
          </span>
        )}

        <span
          className={`absolute right-2 top-2 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
            inStock
              ? "bg-emerald-500/90 text-white"
              : "bg-rose-500/90 text-white"
          }`}
        >
          {inStock ? `${stock} in stock` : "Out of stock"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-brand-900 dark:text-brand-50">{name}</h3>
        {breadcrumb && (
          <p className="mt-0.5 text-[11px] uppercase tracking-wide text-brand-500">
            {breadcrumb}
          </p>
        )}

        {shortDescription && (
          <p className="mt-2 line-clamp-2 text-xs text-brand-500">
            {shortDescription}
          </p>
        )}

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-brand-900 dark:text-brand-50">
            ${price}
          </span>
          {discountPrice != null && discountPrice > 0 && (
            <span className="text-xs text-rose-500">-${discountPrice} off</span>
          )}
        </div>

        {visibleTags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-100/70 px-2 py-0.5 text-[11px] text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

    {/* Actions */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-brand-200/60 pt-3 dark:border-brand-900/40">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onView?.(product)}
            className="flex items-center gap-1 rounded-lg border border-brand-200/60 bg-surface-light/60 px-2 py-1 text-xs font-medium text-brand-900 hover:bg-brand-100 dark:border-brand-900/40 dark:bg-brand-950/30 dark:text-brand-300 dark:hover:bg-brand-900/50"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View</span>
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(product)}
            className="flex items-center gap-1 rounded-lg border border-brand-200/60 bg-surface-light/60 px-2 py-1 text-xs font-medium text-brand-900 hover:bg-brand-100 dark:border-brand-900/40 dark:bg-brand-950/30 dark:text-brand-300 dark:hover:bg-brand-900/50"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={() => onQuickEdit?.(product)}
            className="flex items-center gap-1 rounded-lg border border-brand-200/60 bg-surface-light/60 px-2 py-1 text-xs font-medium text-brand-900 hover:bg-brand-100 dark:border-brand-900/40 dark:bg-brand-950/30 dark:text-brand-300 dark:hover:bg-brand-900/50"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Quick Edit</span>
          </button>
</div>

    {/* Delete Button */}
    <button
      type="button"
      onClick={() => onDelete?.(product._id || product.id)}
      className="flex items-center gap-1 rounded-lg border border-rose-200/80 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600 hover:bg-rose-100 dark:border-rose-950/60 dark:bg-rose-950/30 dark:text-rose-400 dark:hover:bg-rose-900/50"
    >
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      <span>Delete</span>
    </button>
  </div>
</div>
);
};

export default ProductCard;

