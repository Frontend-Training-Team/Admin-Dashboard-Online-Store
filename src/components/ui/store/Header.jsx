import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, ShoppingCart } from "lucide-react";
import useDarkMode from "../../../hooks/useDarkMode";

function Header() {
  const { isDark, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 h-24 border-b border-brand-200/60 bg-surface-cardLight transition-colors dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A]/80 dark:backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8">

        <div className="flex items-center gap-4 sm:gap-8">

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="rounded-xl bg-brand-100 p-3 text-brand-700 transition-colors active:scale-90 dark:bg-[#181B22] dark:text-[#8A8378] dark:hover:bg-[#22262F] dark:hover:text-[#F5F1EA] md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-xl font-bold text-brand-700 dark:bg-[#181B22] dark:text-[#F5F1EA]">
              L
            </div>

            <div>
              <h1 className="text-xl font-bold leading-tight text-black dark:text-[#F5F1EA] sm:text-2xl">
                LAMSA Store
              </h1>

              <p className="hidden text-sm text-[#939393] dark:text-[#8A8378] sm:block">
                Everything you need in one place
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              to="/"
              className="rounded-xl px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-brand-100 dark:text-[#F5F1EA] dark:hover:bg-[#181B22]"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="rounded-xl px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-brand-100 dark:text-[#F5F1EA] dark:hover:bg-[#181B22]"
            >
              Products
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">

          <Link
            to="/carts"
            aria-label="Shopping Cart"
            className="rounded-xl bg-brand-100 p-3 text-brand-700 transition-colors hover:bg-brand-100/60 active:scale-90 dark:bg-[#181B22] dark:text-[#8A8378] dark:hover:bg-[#22262F] dark:hover:text-[#F5F1EA]"
          >
            <ShoppingCart size={21} />
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-xl bg-brand-100 p-3 text-brand-700 transition-colors hover:bg-brand-100/60 active:scale-90 dark:bg-[#181B22] dark:text-[#8A8378] dark:hover:bg-[#22262F] dark:hover:text-[#F5F1EA]"
          >
            {isDark ? (
              <Sun size={21} />
            ) : (
              <Moon size={21} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-brand-200/60 bg-surface-cardLight shadow-lg dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-8">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-base font-semibold text-black hover:bg-brand-100 dark:text-[#F5F1EA] dark:hover:bg-[#181B22]"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-base font-semibold text-black hover:bg-brand-100 dark:text-[#F5F1EA] dark:hover:bg-[#181B22]"
            >
              Products
            </Link>

            <Link
              to="/carts"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-base font-semibold text-black hover:bg-brand-100 dark:text-[#F5F1EA] dark:hover:bg-[#181B22]"
            >
              Cart
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;