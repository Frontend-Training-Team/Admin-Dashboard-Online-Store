import { Link } from "react-router-dom";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

function FeaturedProducts({ products, loading }) {
  return (
    <section className="bg-[#F5EFE8] py-16 dark:bg-[#171411]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A4775B] dark:text-[#C99A78]">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-[#3B2A21] dark:text-[#F5F1EA]">
              Featured Products
            </h2>

            <p className="mt-2 text-sm text-[#806B5C] dark:text-[#A99A8F]">
              Discover some of our latest products.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden rounded-xl border border-[#C9B09D] px-5 py-2.5 text-sm font-semibold text-[#6B4935] transition hover:bg-[#E9DDD2] sm:block dark:border-[#5C4A3D] dark:text-[#D8C5B7] dark:hover:bg-[#241D19]"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : products.slice(0, 6).map((product) => (
                <div
                  key={product._id}
                  className="group overflow-hidden rounded-2xl border border-[#E3D5C9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A88F] hover:shadow-lg dark:border-[#332923] dark:bg-[#1A1715] dark:hover:border-[#765540]"
                >
                  <div className="h-60 overflow-hidden bg-[#EEE5DD] dark:bg-[#211B17]">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#A4775B] dark:text-[#C99A78]">
                      {product.category}
                    </p>

                    <h3 className="line-clamp-2 min-h-12 font-semibold text-[#3B2A21] dark:text-[#F5F1EA]">
                      {product.name}
                    </h3>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-lg font-bold text-[#8B5E3C] dark:text-[#C99A78]">
                        ${product.price}
                      </p>

                      <Link
                        to={`/products/${product._id}`}
                        className="rounded-xl bg-[#8B5E3C] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#70482F] active:scale-95"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/products"
            className="rounded-xl bg-[#8B5E3C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#70482F]"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
