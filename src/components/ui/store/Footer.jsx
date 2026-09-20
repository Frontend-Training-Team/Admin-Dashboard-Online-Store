import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#5C4638] bg-[#4A362B] dark:border-[#332923] dark:bg-[#171411]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-[#3B2A21] dark:text-[#F5F1EA]"
            >
              LAMSA
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#806B5C] dark:text-[#A99A8F]">
              Everything you need in one place. Discover our latest products
              and enjoy a simple shopping experience.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#5B4030] dark:text-[#D8C5B7]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Products
              </Link>

              <Link
                to="/carts"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Cart
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#5B4030] dark:text-[#D8C5B7]">
              Support
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Terms
              </a>

              <a
                href="#"
                className="text-sm text-[#806B5C] transition hover:text-[#8B5E3C] dark:text-[#A99A8F] dark:hover:text-[#C99A78]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#D8C8BA] pt-6 text-center dark:border-[#332923]">
          <p className="text-sm text-[#806B5C] dark:text-[#8A8378]">
            © 2026 LAMSA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;