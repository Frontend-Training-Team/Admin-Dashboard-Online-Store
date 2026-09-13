import { Eye, Pencil, SlidersHorizontal, Trash2 } from 'lucide-react';

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
    description,
    stock = 0,
    category,
    brand,
    tags = [],
    price,
    discountPrice,
  } = product || {};

  const inStock = stock > 0;
  const isFeatured = Boolean(
    product?.featured === true || product?.isFeatured === true || tags.includes('featured')
  );
  const visibleTags = tags.filter((t) => t !== 'featured').slice(0, MAX_TAGS);
  const image = images?.[0]?.url;

  const handleDeleteClick = () => {
    onDelete?.(product);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-gray-100/80 bg-white shadow-xs transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A]">
      {/* 1. Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 dark:bg-[#181B22]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 dark:brightness-[0.92]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-400 dark:text-[#8A8378]">
            No Image
          </div>
        )}

        {/* FEATURED Badge matching Figma */}
        {isFeatured && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-[#F59E0B] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-black shadow-xs">
            FEATURED
          </span>
        )}

        {/* Stock Status Badge */}
        <span
          className={`absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
            inStock
              ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 dark:bg-[#132B1F] dark:text-[#7CE38B] dark:border-[#7CE38B]/30'
              : 'bg-rose-500/15 text-rose-600 border border-rose-500/30 dark:bg-[#2B1214] dark:text-[#F87171] dark:border-[#F87171]/30'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              inStock ? 'bg-[#10B981] dark:bg-[#7CE38B]' : 'bg-rose-500 dark:bg-[#F87171]'
            }`}
          />
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* 2. Content Container */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#C98156]">
          {category || 'Uncategorized'}
        </p>

        {/* Product Title */}
        <h3
          className="mt-1 line-clamp-1 text-lg font-bold text-gray-900 dark:text-[#F5F1EA]"
          title={name}
        >
          {name}
        </h3>

        {/* Short Description */}
        <p className="mt-1.5 line-clamp-2 text-xs text-gray-500 leading-relaxed dark:text-[#8A8378]">
          {shortDescription || description || 'No description available for this product.'}
        </p>

        {/* Price & Stock Section */}
        <div className="mt-4 flex items-baseline justify-between border-t border-gray-100 dark:border-[rgba(255,255,255,0.06)] pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#F5F1EA]">
              ${price ?? 0}
            </span>
            {discountPrice && discountPrice > 0 ? (
              <span className="text-xs text-gray-400 line-through dark:text-[#8A8378]">
                ${discountPrice}
              </span>
            ) : null}
          </div>
          <span className="text-xs font-medium text-gray-500 dark:text-[#8A8378]">
            {stock} units
          </span>
        </div>

        {/* Tags */}
        {visibleTags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600 dark:bg-[#181B22] dark:text-[#B9B2A8]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <hr className="border-gray-200/60 dark:border-[rgba(255,255,255,0.06)] my-3" />

        {/* Actions Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onView?.(product)}
              className="flex items-center gap-1.5 rounded-xl bg-[#EFF2F6] px-3.5 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-[#181B22] dark:text-[#F5F1EA] dark:hover:bg-[#22262F] cursor-pointer"
            >
              <Eye size={16} strokeWidth={1.75} />
              <span>View</span>
            </button>

            <button
              type="button"
              onClick={() => onEdit?.(product)}
              className="flex items-center gap-1.5 rounded-xl bg-[#EFF2F6] px-3.5 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-[#181B22] dark:text-[#F5F1EA] dark:hover:bg-[#22262F] cursor-pointer"
            >
              <Pencil size={16} strokeWidth={1.75} />
              <span>Edit</span>
            </button>

            <button
              type="button"
              onClick={() => onQuickEdit?.(product)}
              className="flex items-center gap-1.5 rounded-xl bg-[#EFF2F6] px-3.5 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-[#181B22] dark:text-[#F5F1EA] dark:hover:bg-[#22262F] cursor-pointer"
            >
              <SlidersHorizontal size={16} strokeWidth={1.75} />
              <span>Quick Edit</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleDeleteClick}
            className="flex items-center gap-1.5 rounded-xl border border-rose-400 bg-white px-4 py-2 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50 dark:border-[rgba(248,113,113,0.24)] dark:bg-transparent dark:text-[#F87171] dark:hover:bg-[rgba(248,113,113,0.10)] cursor-pointer"
          >
            <Trash2 size={16} strokeWidth={1.75} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
