function CategorySection({ categories }) {
  return (
    <section className="bg-[#FBF8F5] py-16 dark:bg-[#12100E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A4775B] dark:text-[#C99A78]">
            Explore
          </p>

          <h2 className="text-3xl font-bold text-[#3B2A21] dark:text-[#F5F1EA]">
            Shop by Category
          </h2>

          <p className="mt-2 text-sm text-[#806B5C] dark:text-[#A99A8F]">
            Find what you need from our different categories.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="group flex min-h-32 cursor-pointer items-center justify-center rounded-2xl border border-[#E3D5C9] bg-white px-5 py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B98B6D] hover:bg-[#F5EFE8] hover:shadow-md dark:border-[#332923] dark:bg-[#1A1715] dark:hover:border-[#765540] dark:hover:bg-[#211B17]"
            >
              <h3 className="text-center text-base font-semibold capitalize text-[#5B4030] transition-colors group-hover:text-[#8B5E3C] dark:text-[#D8C5B7] dark:group-hover:text-[#C99A78]">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;