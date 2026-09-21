import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-[#F5EFE8] dark:bg-[#171411]">
      <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-16 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A4775B] dark:text-[#C99A78]">
            Welcome to LAMSA
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#3B2A21] sm:text-5xl lg:text-6xl dark:text-[#F5F1EA]">
            Discover Products
            <span className="block text-[#8B5E3C] dark:text-[#C99A78]">
              You’ll Love
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#765F50] sm:text-lg dark:text-[#B8AAA0]">
            Explore our latest products and find everything you need in one
            place.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/products"
              className="rounded-xl bg-[#8B5E3C] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#70482F] active:scale-95"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-xl border border-[#C9B09D] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#6B4935] transition hover:bg-[#E9DDD2] active:scale-95 dark:border-[#5C4A3D] dark:text-[#D8C5B7] dark:hover:bg-[#241D19]"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;