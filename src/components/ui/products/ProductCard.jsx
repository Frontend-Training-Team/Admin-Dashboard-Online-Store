import { useState } from "react";
import { Eye, Pencil, SlidersHorizontal, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const MAX_TAGS = 4;

const ProductCard = ({ product = {}, onView, onQuickEdit, onEdit, onDelete }) => {
  const {
    _id,
    id,
    name = "Unnamed Product",
    images = [],
    image: singleImage,
    shortDescription,
    description,
    stock = 0,
    category,
    brand,
    tags = [],
    price = 0,
    discountPrice,
    featured,
    isFeatured,
  } = product;

  const productId = _id || id;
  const isProductFeatured = Boolean(featured === true || isFeatured === true || tags.includes("featured"));
  const inStock = stock > 0;

  // Format category & brand labels
  const categoryName = typeof category === "object" ? category?.name : category;
  const brandName = typeof brand === "object" ? brand?.name : brand;

  // Process image list
  const imageList = Array.isArray(images) && images.length > 0
    ? images.map((img) => (typeof img === "string" ? img : img?.url)).filter(Boolean)
    : singleImage
      ? [singleImage]
      : [];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const currentImage = imageList[activeImageIndex] || imageList[0];
  const visibleTags = tags.filter((t) => t !== "featured").slice(0, MAX_TAGS);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 dark:border-brand-900/40 dark:bg-coal-800 dark:hover:border-brand-700/60">
      {/* Image Container */}
      <div className="relative aspect-[500/348] w-full overflow-hidden bg-[#F8F7F4] dark:bg-brand-900/20">
        {currentImage ? (
          <img
            src={currentImage}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-400 dark:text-brand-500">
            No Image Available
          </div>
        )}

        {/* Featured Badge */}
        {isProductFeatured && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#F6B704] px-3.5 py-1 text-[11px] font-bold tracking-wider text-black uppercase shadow-sm">
            FEATURED
          </span>
        )}

        {/* Stock Status Badge (if out of stock) */}
        {!inStock && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-rose-500/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs shadow-sm">
            Out of Stock
          </span>
        )}

        {/* Multi-image Carousel Arrows */}
        {imageList.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:bg-gray-800/90 dark:text-white dark:hover:bg-gray-800"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:bg-gray-800/90 dark:text-white dark:hover:bg-gray-800"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {imageList.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-200 ${idx === activeImageIndex
                      ? "w-4 bg-white shadow-xs"
                      : "w-1.5 bg-white/60"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6 gap-4">
        <div className="space-y-2">
          {/* Category & Brand */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8E4726] dark:text-brand-300 line-clamp-1">
              {categoryName || "ELECTRONICS"}
            </span>
            {brandName && (
              <span className="text-sm font-medium text-gray-400 dark:text-gray-400 line-clamp-1">
                {brandName}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-brand-50 line-clamp-1 group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors"
            title={name}
          >
            {name}
          </h3>

          {/* Short Description */}
          {(shortDescription || description) && (
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {shortDescription || description}
            </p>
          )}

          {/* Price & Discount */}
          <div className="flex items-baseline gap-2.5 pt-1">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-brand-50">
              ${price}
            </span>
            {discountPrice != null && discountPrice > 0 && (
              <span className="text-sm font-semibold text-[#34A853]">
                -${discountPrice} off
              </span>
            )}
          </div>

          {/* Tags */}
          {visibleTags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-gray-700 dark:bg-brand-900/40 dark:text-brand-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 dark:border-brand-900/40">
          <button
            type="button"
            onClick={() => onView?.(product)}
            className="flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-xs font-semibold text-gray-800 hover:bg-slate-200 dark:bg-brand-900/40 dark:text-brand-100 dark:hover:bg-brand-900/70 transition-colors cursor-pointer"
          >
            <Eye size={15} />
            <span>View</span>
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(product)}
            className="flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-xs font-semibold text-gray-800 hover:bg-slate-200 dark:bg-brand-900/40 dark:text-brand-100 dark:hover:bg-brand-900/70 transition-colors cursor-pointer"
          >
            <Pencil size={15} />
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={() => onQuickEdit?.(product)}
            className="flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-xs font-semibold text-gray-800 hover:bg-slate-200 dark:bg-brand-900/40 dark:text-brand-100 dark:hover:bg-brand-900/70 transition-colors cursor-pointer"
          >
            <SlidersHorizontal size={15} />
            <span>Quick Edit</span>
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(product)}
            className="ml-auto flex items-center gap-1.5 rounded-lg border border-[#E54335] px-3.5 py-2 text-xs font-semibold text-[#E54335] hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
          >
            <Trash2 size={15} />
            <span>Delete</span>
          </button>
        </div >
      </div >
    </div >
  );
};

export default ProductCard;

